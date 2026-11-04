#!/bin/sh
set -e

cd /app

echo "==> Entrypoint starting (command: $*)"

# Platforms like Render inject the port to listen on via $PORT
export SERVER_NAME="${SERVER_NAME:-:${PORT:-8080}}"

# Render "Secret Files" are mounted at /etc/secrets
if [ -f /etc/secrets/.env ]; then
    cp /etc/secrets/.env /app/.env
fi

if [ -z "$APP_KEY" ] && ! grep -qE '^APP_KEY=.+' /app/.env 2>/dev/null; then
    echo "APP_KEY is not set. Generate one with: php artisan key:generate --show" >&2
    echo "Variables received (names only): $(env | cut -d= -f1 | grep -E '^(APP_|DB_|RENDER)' | sort | tr '\n' ' ')" >&2
    echo "Secret files in /etc/secrets: $(ls -A /etc/secrets 2>/dev/null | tr '\n' ' ')" >&2
    exit 1
fi

# Render exposes the public URL as RENDER_EXTERNAL_URL
if [ -z "$APP_URL" ] && [ -n "$RENDER_EXTERNAL_URL" ]; then
    export APP_URL="$RENDER_EXTERNAL_URL"
fi

if [ -n "$APP_URL" ] && ! printf '%s' "$APP_URL" | grep -qE '^https?://[A-Za-z0-9.-]+(:[0-9]+)?(/[^[:space:]]*)?$'; then
    echo "APP_URL is invalid: [$APP_URL]. Use a full URL like https://your-app.onrender.com (no spaces, quotes or <>)." >&2
    exit 1
fi

# Render's docs name the connection string DATABASE_URL; Laravel reads DB_URL
if [ -z "$DB_URL" ] && [ -n "$DATABASE_URL" ]; then
    export DB_URL="$DATABASE_URL"
fi

if [ -n "$DB_URL" ] && ! printf '%s' "$DB_URL" | grep -q '://'; then
    echo "DB_URL must be a full connection URL like postgresql://USER:PASSWORD@HOST:5432/DATABASE (got a value without '://'). Copy Render's Internal Database URL, not just the hostname." >&2
    exit 1
fi

case "${DB_CONNECTION:-}" in
    pgsql|mysql|mariadb)
        if [ -z "$DB_URL" ] && [ -z "$DB_HOST" ] && ! grep -qE '^(DB_URL|DB_HOST)=.+' /app/.env 2>/dev/null; then
            echo "No database configured for DB_CONNECTION=$DB_CONNECTION. Set DB_URL (e.g. Render's Internal Database URL) or DB_HOST/DB_PORT/DB_DATABASE/DB_USERNAME/DB_PASSWORD." >&2
            exit 1
        fi
        ;;
esac

# Laravel's writable dirs (may be excluded from the image by .dockerignore)
mkdir -p storage/framework/cache storage/framework/sessions \
         storage/framework/views storage/logs bootstrap/cache

# Drop any config/route cache baked into the image so Render's env vars win
php artisan optimize:clear >/dev/null

php artisan storage:link --force >/dev/null 2>&1 || true

is_enabled() {
    case "$(printf '%s' "$1" | tr -d '"'"'"' ' | tr '[:upper:]' '[:lower:]')" in
        true|1|yes|on) return 0 ;;
        *) return 1 ;;
    esac
}

# Migrations run by default (sessions/cache tables need them).
# Set RUN_MIGRATIONS=false on Render to skip.
if is_enabled "${RUN_MIGRATIONS:-true}"; then
    echo "==> Running migrations (connection: ${DB_CONNECTION:-<default>})"
    php artisan migrate --force
    php artisan migrate:status
else
    echo "==> Skipping migrations (RUN_MIGRATIONS=${RUN_MIGRATIONS})"
fi

# Seeds roles, categories and the admin user; safe to run on every deploy.
# Opt-in: set RUN_SEEDERS=true on Render.
if is_enabled "${RUN_SEEDERS:-false}"; then
    echo "==> Running ProductionSeeder"
    php artisan db:seed --class=ProductionSeeder --force
else
    echo "==> Skipping seeders (RUN_SEEDERS=${RUN_SEEDERS:-<not set>})"
fi

php artisan optimize

echo "==> Starting: $*"
exec "$@"