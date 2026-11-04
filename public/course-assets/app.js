const MODULES = [
{ id:"intro", short:"مقدمة", title:"أهداف ومخرجات التدريب", html:`
<p>تهدف هذه الدورة إلى بناء ثقافة نزاهة لدى جميع منسوبي إعتمد، ومساعدتك على اكتشاف مؤشرات الاحتيال مبكراً ومعرفة الطريق الصحيح للإبلاغ عنها.</p>
<h3>بنهاية الدورة ستكون قادراً على:</h3>
<ul class="objectives">
<li>شرح مفهوم الاحتيال المالي وتعريف البنك المركزي السعودي للاحتيال.</li>
<li>التمييز بين أنواع الاحتيال الداخلي والخارجي.</li>
<li>تفسير مثلث الاحتيال: الضغط والفرصة والتبرير.</li>
<li>التعرّف على مؤشرات الخطر في مختلف نطاقات العمل.</li>
<li>استخدام آلية الإبلاغ المعتمدة بثقة وسرية.</li>
</ul>
<div class="def"><b>طريقة الدورة</b>كل وحدة تنتهي بسؤال تحقق سريع. بعد إنهاء الوحدات الست تنتقل إلى الاختبار النهائي (20 سؤالاً)، ودرجة النجاح 80٪. <b color="red">يلزم إكمال الاستبيان النهائي بعد اجتياز الاختبار</b></div>`},

{ id:"concept", short:"المفهوم", title:"مفهوم وتعريف الاحتيال المالي", html:`
<div class="def"><b>الاحتيال</b>هو أي فعل يهدف إلى تضليل شخص آخر عمداً من أجل الحصول على منفعة. ويتضمن إخفاء الحقائق أو تزويرها أو سرقتها، أو الإبلاغ عنها بشكل خاطئ أو حذفها، والغرض من ذلك هو الحصول على منفعة.</div>
<div class="def"><b>الاحتيال المالي</b>هو الاستيلاء على أموال الغير بلا وجه حق باستخدام طرق احتيالية مثل الإيهام أو الخداع أو الكذب أو غيرها من الأساليب الاحتيالية. فهو أي عمل يتم القيام به من أجل الحصول على الفائدة غير المشروعة التي تتم من خلال استغلال الوسائل التقنية أو الصلاحيات الوظيفية أو غيرها.</div>
<div class="def sama"><b>تعريف البنك المركزي السعودي للاحتيال</b>هو القيام بعمل أو الامتناع عن القيام به بهدف الحصول على فائدة بشكل مباشر أو غير مباشر تعود لمرتكب الاحتيال أو لطرف آخر لم يكن ليحصل عليها دون ذلك.</div>
<h3>من صور الاحتيال (على سبيل المثال لا الحصر)</h3>
<div class="grid3">
<div class="card"><h4>مستندات غير صحيحة</h4><p>استخدام مستندات تحتوي على معلومات غير صحيحة.</p></div>
<div class="card"><h4>الإخفاء</h4><p>عدم الإفصاح أو تعمّد إخفاء معلومات يلزم النظام بتقديمها.</p></div>
<div class="card"><h4>الاستغلال</h4><p>استغلال سلطة أو موقع ثقة أو علاقة ائتمانية، أو إساءة التصرف بالأصول.</p></div>
</div>`,
 check:{q:"حسب تعريف البنك المركزي السعودي، هل يمكن أن يُعدّ «الامتناع» عن عمل ما احتيالاً؟",
  o:["لا، الاحتيال يكون بفعل إيجابي فقط","نعم، إذا كان الهدف الحصول على فائدة مباشرة أو غير مباشرة","فقط إذا ترتب عليه خسارة نقدية","فقط إذا ارتكبه طرف خارجي"],a:1,
  e:"التعريف ينص على «القيام بعمل أو الامتناع عن القيام به» بهدف الحصول على فائدة، مثل تعمّد إخفاء معلومات يلزم النظام بتقديمها."}},

{ id:"internal", short:"الاحتيال الداخلي", title:"أنواع الاحتيال الداخلي", html:`
<p>الاحتيال الداخلي يرتكبه أشخاص من داخل المنشأة مستغلين وصولهم أو صلاحياتهم. ينقسم إلى ثلاثة أنواع رئيسية:</p>
<div class="grid3">
<div class="card"><h4>اختلاس الأصول</h4><p>سرقة المخزون، أو تزوير تقارير النفقات، أو تحويل الأموال النقدية للشركة، سواء كانت مادية أو رقمية، لغير وجهتها.</p></div>
<div class="card"><h4>الفساد</h4><p>العمولات غير المشروعة، أو الرشوة، أو تضارب المصالح، أو توجيه العقود القيّمة نحو أصدقاء شخصيين غير مخوّل لهم بذلك.</p></div>
<div class="card"><h4>الاحتيال في القوائم المالية</h4><p>التلاعب المتعمد بالسجلات المحاسبية لإخفاء مشكلات الأداء أو تحقيق أهداف تعسفية.</p></div>
</div>`,
 check:{q:"موظف يضخّم مبالغ تقارير النفقات ليستردّ أكثر مما صرفه فعلاً. تحت أي نوع يندرج ذلك؟",
  o:["الفساد","الاحتيال في القوائم المالية","اختلاس الأصول","احتيال خارجي"],a:2,
  e:"تزوير تقارير النفقات مذكور صراحة ضمن صور اختلاس الأصول."}},

{ id:"triangle", short:"مثلث الاحتيال", title:"مثلث الاحتيال", html:`
<p>يفسّر مثلث الاحتيال لماذا يرتكب شخص عادي فعلاً احتيالياً. تجتمع عادةً ثلاثة عناصر، وإزالة أي ضلع منها تُضعف احتمال وقوع الاحتيال. اضغط على كل عنصر للتعرف عليه.</p>
<div class="tri">
<svg viewBox="0 0 360 320" role="group" aria-label="مثلث الاحتيال">
  <path class="edge" d="M180 60 L60 260 L300 260 Z"/>
  <text class="center" x="180" y="200" text-anchor="middle">الاحتيال</text>
  <g class="v" data-k="p" tabindex="0" role="button"><circle cx="180" cy="60" r="48"/><text x="180" y="66" text-anchor="middle">الضغط</text></g>
  <g class="v" data-k="o" tabindex="0" role="button"><circle cx="60" cy="260" r="48"/><text x="60" y="266" text-anchor="middle">الفرصة</text></g>
  <g class="v" data-k="r" tabindex="0" role="button"><circle cx="300" cy="260" r="48"/><text x="300" y="266" text-anchor="middle">التبرير</text></g>
</svg>
<div class="triinfo" id="triinfo" aria-live="polite"></div>
</div>
<div class="def" style="margin-top:22px"><b>دورك كموظف</b>الضغط والتبرير عوامل شخصية يصعب التحكم بها، لكن الفرصة هي الضلع الذي نستطيع جميعاً إغلاقه: الالتزام بالضوابط، والفصل بين المهام، والإبلاغ عن أي ثغرة.</div>`,
 check:{q:"وجود ضعف في الضوابط الداخلية أو غياب الرقابة يمثّل أي ضلع من مثلث الاحتيال؟",
  o:["الضغط","الفرصة","التبرير","لا يرتبط بالمثلث"],a:1,
  e:"الفرصة هي ثغرة واضحة أو نقطة ضعف في الضوابط الداخلية (غياب الرقابة)."}},

{ id:"external", short:"الاحتيال الخارجي", title:"أنواع الاحتيال الخارجي (العملاء)", html:`
<p>يأتي الاحتيال الخارجي من العملاء أو أطراف خارج الشركة، وغالباً يظهر في طلبات التمويل. انتبه للعلامات التالية أثناء مراجعة الملفات:</p>
<div class="grid3">
<div class="card"><h4>وثائق وطلب التمويل</h4><ul><li>اختلاف التوقيعات على وثائق التمويل.</li><li>تضارب المعلومات المقدمة من العميل في طلب التمويل.</li><li>الاحتيال الإلكتروني.</li></ul></div>
<div class="card"><h4>الملف الائتماني</h4><ul><li>دخل العميل وسجله الائتماني لا يتلاءم مع ملفه الشخصي.</li><li>عدم تناسب عمر العميل ومؤهلاته العلمية مع عدد سنوات العمل.</li><li>التنقل المتكرر بين الوظائف أو عدم وجود استقرار وظيفي.</li></ul></div>
<div class="card"><h4>المستندات المزورة</h4><ul><li>احتواء شهادة إثبات الوظيفة على تعديلات مكتوبة بخط اليد.</li><li>شهادة إثبات وظيفة غير مطبوعة على أوراق جهة العمل الرسمية التي تحمل شعارها.</li><li>تزوير كشف الحساب.</li></ul></div>
</div>`,
 check:{q:"وصلتك شهادة تعريف بالراتب عليها تعديل في المبلغ بخط اليد. ما التصرف الأنسب؟",
  o:["قبولها لأن الختم موجود","اعتبارها مؤشر تزوير وعدم اعتمادها قبل التحقق","تعديل المبلغ في النظام بنفسك","تجاهل التعديل لأنه بسيط"],a:1,
  e:"التعديلات المكتوبة بخط اليد على شهادة إثبات الوظيفة من مؤشرات التزوير المذكورة في الوحدة."}},

{ id:"flags", short:"مؤشرات الخطر", title:"مؤشرات خطر الاحتيال حسب النطاق", html:`
<p>هذه المؤشرات لا تعني بالضرورة وجود احتيال، لكنها علامات تستدعي الانتباه والتقييم. خصصنا لكل نطاق صفحة مستقلة، اضغط «التالي» لاستعراضها بالترتيب أو اختر نطاقاً من القائمة.</p>
<div class="steps" id="flags"></div>`,
 // This check is shown on the last domain page (see the split after FLAGS)
 check:{q:"موظف لا يستخدم رصيد إجازاته أبداً ويعمل خارج ساعات الدوام بشكل شبه معتاد. تحت أي نطاق تُصنّف هذه المؤشرات؟",
  o:["الإدارة التشغيلية","المحاسبة والمالية","سلوكيات الموظف","تكنولوجيا المعلومات"],a:2,
  e:"عدم استمتاع الموظف برصيد إجازاته والعمل خارج الساعات الرسمية من مؤشرات نطاق سلوكيات الموظفين."}},

{ id:"report", short:"آلية الإبلاغ", title:"آلية الإبلاغ", html:`
<p>يلتزم الموظف عند علمه بأي مخالفة أو شبهة مخالفة لأحكام اللائحة أو الأنظمة ذات العلاقة بإبلاغ إدارة الالتزام. تُعامل بلاغاتك بالسرية والأمان.</p>
<div class="steps">
<div class="card"><h4>١. لاحظ</h4><p>نشاط مشبوه أو مخالفة أو شبهة مخالفة.</p></div>
<div class="card"><h4>٢. أبلغ</h4><p>عبر إحدى القناتين المعتمدتين أدناه.</p></div>
<div class="card"><h4>٣. اطمئن</h4><p>بلاغك يُعامل بسرية، ومحمي من أي انتقام عند الإبلاغ بحسن نية.</p></div>
</div>
<h3>قنوات الإبلاغ المعتمدة</h3>
<div class="card" style="margin-bottom:10px"><h4>البريد الإلكتروني المخصص لاستقبال البلاغات</h4>
<div class="channel"><span class="mail" id="mail">compliance@eitmed.sa</span><button class="btn ghost" id="copyMail" type="button" style="padding:6px 14px;font-size:.85rem">نسخ العنوان</button></div></div>
<div class="card"><h4>المدير المباشر</h4><p>الذي يحيل البلاغ فوراً إلى إدارة الالتزام.</p></div>
<div class="def" style="margin-top:18px"><b>تذكّر</b>الصمت أو التستر على نشاط احتيالي تعلم به يُعامل كتواطؤ مباشر.</div>`,
 check:{q:"ما هو البريد الرسمي المخصص لاستقبال البلاغات؟",
  o:["hr@eitmed.sa","compliance@eitmed.sa","support@eitmed.sa","البريد الشخصي لمديرك"],a:1,
  e:"البريد الرسمي لاستقبال البلاغات هو compliance@eitmed.sa، أو إبلاغ المدير المباشر الذي يحيله لإدارة الالتزام."}}
];

const TRI = {
 p:{t:"الضغط",d:"دافع شخصي أو مالي يدفع الشخص للتفكير في الاحتيال.",ex:"مثال: ديون متراكمة، أو ضغط لتحقيق مستهدفات المبيعات الشهرية."},
 o:{t:"الفرصة",d:"ثغرة واضحة أو نقطة ضعف في الضوابط الداخلية (غياب الرقابة).",ex:"مثال: موظف يوافق على القرض وينفذ تحويل المبلغ بنفسه دون فصل بين المهام."},
 r:{t:"التبرير",d:"إقناع الشخص لنفسه بأن السلوك مقبول أو مؤقت.",ex:"مثال: «سأعيد المبلغ الشهر القادم» أو «الشركة لا تقدّر جهدي»."}
};

const FLAGS = [
 ["الحوكمة والهيكل التنظيمي",["فرد واحد أو مجموعة من الأفراد يحتكرون إدارة العمليات أو اتخاذ القرارات المالية.","استراتيجية الشركة غير ثابتة وسريعة التغيير.","الهيكل التنظيمي للشركة معقد.","تضارب المصالح بين المديرين وأعضاء فريق العمل والشركات (الطرف الثالث)."]],
 ["الإدارة التشغيلية",["ضعف البرامج التدريبية المقدمة للموظفين.","عدم انسجام نشاطات شركة التمويل مع سياساتها المعلنة.","ارتفاع تدوير الموظفين على مستوى الإدارة، خصوصاً في الإدارة المالية أو إدارة العمليات.","مهام وصفقات معقدة تستلزم مهارات خاصة لفهمها.","فقدان المستندات والوثائق الأصلية واستبدالها بصور."]],
 ["المحاسبة والمالية",["ارتفاع التكاليف دون مبرر أو كونها باهظة مقارنة بالشركات المنافسة.","عدم ترابط النتائج والنسب المالية.","عائد الشركة أقل بكثير من مثيلاتها في السوق."]],
 ["المراجعة الداخلية",["ضعف هيكلة الرقابة الداخلية.","عدم كفاية المعلومات الصادرة عن عمليات تدقيق سابقة.","ضغط غير مبرر من مجلس الإدارة أو المديرين على مدققي الحسابات.","ضعف أو عدم وجود نتائج لعمليات التدقيق الداخلي.","عدم استقلالية المراجعين الداخليين التامة.","سلوك عدائي من مجلس الإدارة أو المديرين ضد التقارير المالية للشركة."]],
 ["سلوكيات الموظف / الموظفين",["الإثراء غير المبرر والتبدل المفاجئ في أسلوب العيش.","عمل الموظف خارج ساعات العمل الرسمية بشكل شبه معتاد.","عدم استمتاع الموظف برصيد إجازاته.","استقالة الموظفين الجدد بشكل سريع."]],
 ["تكنولوجيا المعلومات",["ضعف نظام أمن المعلومات والأصول."]]
];

const EXAM = [
 {q:"ماذا يترتب على الموظف الذي يلاحظ نشاطاً احتيالياً لزميل له ويختار الصمت أو التستر عليه؟",o:["يُعفى من المسؤولية تماماً لأن المخالفة لم تصدر منه شخصياً","يُعامل صمته أو تستره على أنه تواطؤ مباشر ويخضع لنفس العقوبة","يُوجَّه له لوم شفهي فقط أثناء تقييم الأداء السنوي","يُمنح مكافأة مالية نظير الحفاظ على استقرار بيئة العمل"],a:1},
 {q:"أي من الممارسات التالية يُصنّف كاحتيال وتلاعب بمقاييس الأداء في قسم المبيعات؟",o:["مساعدة العميل في فهم شروط وأحكام العقد الائتماني","تحديث بيانات الاتصال بالعميل بناءً على طلبه الرسمي الموثق","تقديم مستندات العميل الائتمانية عبر البوابة الإلكترونية المخصصة","اختلاق وثائق في خطة العمل أو تعديل الطلبات للوفاء بالأهداف الشهرية"],a:3},
 {q:"ما هو الموقف الرسمي للشركة تجاه الاحتيال الداخلي المكتشف؟",o:["توجيه إنذار كتابي أول مع خفض المرتب شهرياً","النقل الإداري إلى قسم آخر ذي صلاحيات محدودة","عدم التسامح المطلق، والفصل الفوري لسبب مشروع، والملاحقة الجنائية","التغاضي عن المخالفة الأولى إذا أُعيدت الأموال طواعية"],a:2},
 {q:"لضمان الفصل بين الواجبات في العمليات المالية، ما الإجراء المتبع بين الموافقة والصرف؟",o:["يقوم الموظف نفسه الذي وافق على القرض بتنفيذ الحوالة النهائية","لا يجوز للموظف الذي يوافق على ملف القرض أن يكون نفسه من ينفذ تحويل المبلغ","يتم الصرف يدوياً بنقدية سائلة دون تسجيلها في النظام الأساسي","يُكتفى بتفويض شفهي من قسم المبيعات دون قيود تقنية"],a:1},
 {q:"ما الضمان الذي تقدمه سياسة الشركة للموظفين الذين يبلغون عن مخالفات أو شبهات احتيال بحسن نية؟",o:["مكافأة ترويجية فورية في وسائل الإعلام المحلية","ضمان كامل بعدم الانتقام أو المضايقة أو اتخاذ أي إجراء وظيفي سلبي، مع حماية السرية","إلزامهم بتقديم أدلة جنائية قاطعة ومكتملة قبل قبول البلاغ","نقلهم فوراً إلى قسم آخر"],a:1},
 {q:"على من تنطبق سياسة مكافحة الاحتيال؟",o:["المديرين التنفيذيين والشركاء الاستراتيجيين فقط","الموظفين الدائمين داخل المقر الرئيسي فقط","موظفي قسم الائتمان والتحصيل فقط","جميع الموظفين وأعضاء مجلس الإدارة والمتعاقدين"],a:3},
 {q:"تبيّن أن مسؤول تقنية المعلومات عدّل البرنامج النصي (script) الخاص برسوم التأخير الآلية في النظام لاستثناء مجموعة محددة من الحسابات. على أي خلل في الضوابط يدل ذلك؟",o:["استخراج البيانات","تأخر الوصول المنطقي","إساءة استخدام الوصول المميز","ثغرة إلكترونية"],a:2},
 {q:"ما المقصود بـ«تضارب المصالح» داخل الهيكل التنظيمي؟",o:["اختلاف الموظفين حول المهام","موقف تؤثر فيه المصالح الشخصية على قرارات العمل","اختلافات في خطوط السلطة والمسؤولية","أوجه القصور في الكفاءة التشغيلية"],a:1},
 {q:"لماذا ينبغي أن تتوافق صلاحيات الوصول مع المسؤوليات الوظيفية؟",o:["لتبسيط عمليات التدقيق فقط","لزيادة العبء الإداري","لتجنب توثيق الأدوار","لمنع الأنشطة غير المصرح بها والاحتيال"],a:3},
 {q:"ما الغرض من مؤشرات المخاطر الرئيسية (KRIs) في العمليات؟",o:["تحديد المجالات التي تنطوي على مخاطر عالية للاحتيال والمخاطر التشغيلية","استبدال مراجعات الإدارة","تقليل متطلبات إعداد التقارير","إلغاء عمليات التدقيق"],a:0},
 {q:"ما هو مثال على مؤشر خطر تشغيلي؟",o:["إجراء المطابقات في الوقت المناسب","التجاوز المتكرر للضوابط المقررة","الموافقات المستقلة","إعداد تقارير الامتثال بانتظام"],a:1},
 {q:"ما الهدف الرئيسي للضوابط المحاسبية في منع الاحتيال؟",o:["زيادة حجم المعاملات","ضمان دقة التقارير المالية وحماية الأصول","القضاء على المخاطر التشغيلية","تقليل عبء العمل على الموظفين"],a:1},
 {q:"أي مما يلي يُعد مثالاً على الاحتيال المحاسبي؟",o:["تسجيل المعاملات بدقة","مطابقة الحسابات بانتظام","اتباع السياسات المحاسبية","تحريف السجلات المالية عمداً"],a:3},
 {q:"لماذا تُعد حدود الموافقة مهمة في مجال التمويل؟",o:["لإبطاء المعاملات","لإلغاء الرقابة","لضمان اعتماد المعاملات على المستوى المناسب","لزيادة التكاليف التشغيلية"],a:2},
 {q:"ما الدور الذي تلعبه المراجعة الداخلية في كشف الاحتيال المحاسبي؟",o:["تقديم تأكيد مستقل ومراجعة الضوابط","معالجة المدفوعات","إعداد القوائم المالية","الموافقة على المعاملات"],a:0},
 {q:"التكاليف التشغيلية لإحدى الشركات أعلى باستمرار من متوسطات القطاع دون سبب تجاري واضح. على ماذا قد يدل ذلك؟",o:["إدارة قوية للتكاليف","احتمال وجود احتيال أو هدر أو عدم كفاءة","تحسن في الربحية","ممارسات فعالة في مجال المشتريات"],a:1},
 {q:"أي سلوك قد يشير إلى احتمال وجود احتيال في عمليات الشراء؟",o:["دعم نظام المناقصات التنافسية","تفضيل المورد نفسه بشكل متكرر دون مبرر","توثيق عمليات تقييم الموردين","مراجعة العقود بانتظام"],a:1},
 {q:"يقوم أحد الموظفين باستمرار بتجاوز الإجراءات والضوابط المعتمدة. ما الذي ينبغي على الإدارة النظر فيه؟",o:["القيادة القوية","كفاءة العمليات","مشاركة الموظفين","مخاطر الاحتيال أو سوء السلوك"],a:3},
 {q:"التحسن المفاجئ وغير المبرر في مستوى المعيشة، والذي يبدو غير متناسب مع دخل الموظف، قد يكون بمثابة:",o:["علامة مؤكدة على الاحتيال","مؤشر محتمل للاحتيال يستدعي التقييم","دليل على الأداء القوي","خطأ محاسبي"],a:1},
 {q:"ما الذي ينبغي على الإدارة فعله عندما تكون نفقات معينة أعلى باستمرار من معايير المقارنة في القطاع؟",o:["التحقيق في أسباب التفاوت","تجاهل الانحراف","زيادة الميزانية تلقائياً","التوقف عن إعداد التقارير المالية"],a:0}
];
const PASS = 16;
const AR = n => String(n).replace(/\d/g,d=>"٠١٢٣٤٥٦٧٨٩"[d]);
const flagCount = n => AR(n)+" "+(n>2?"مؤشرات":n===1?"مؤشر":"مؤشران");

// The red flags module is an overview page followed by one page per domain.
(()=>{
  const at=MODULES.findIndex(m=>m.id==="flags");const overview=MODULES[at];
  const pages=FLAGS.map((f,k)=>({id:"flag-"+k,short:f[0],title:f[0],sub:true,
    eyebrow:overview.title+" · "+AR(k+1)+" من "+AR(FLAGS.length),
    html:`<p>${flagCount(f[1].length)} في هذا النطاق:</p><div class="card"><ul>${f[1].map(x=>`<li>${x}</li>`).join("")}</ul></div>`}));
  pages[pages.length-1].check=overview.check;delete overview.check;
  MODULES.splice(at+1,0,...pages);
})();

// ---- state ----
const KEY="eitmed-integrity-course-v2";
// Set window.COURSE_CFG = {submitUrl, csrf} before this script to save results to a server.
const CFG=window.COURSE_CFG||{};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let S={done:[],cur:0,best:null,name:"",email:""};
const isEmail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&Array.isArray(s.done))S=Object.assign(S,s)}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const TOTAL=MODULES.length+1; // + exam
const EXAM_IDX=MODULES.length;
const SURVEY_IDX=EXAM_IDX+1;
// Survey questions come from the server (config/course.php); this copy is used by the standalone version.
const SURVEY=CFG.survey||{ratings:["محتوى الدورة كان واضحاً وسهل الفهم.","زادت الدورة من وعيي بأنواع الاحتيال ومؤشراته.","أعرف الآن كيف وأين أبلّغ عن أي شبهة احتيال.","ساعدتني الأمثلة وأسئلة التحقق السريع على الفهم."],
  open:[]};
const SCALE=["غير موافق بشدة","غير موافق","محايد","موافق","موافق بشدة"];
const UNITS=MODULES.filter(m=>!m.sub).length-1; // excludes the intro page
const unitNo=i=>MODULES.slice(1,i+1).filter(m=>!m.sub).length;
const subNo=i=>MODULES.slice(0,i+1).reverse().findIndex(m=>!m.sub);

function markDone(i){if(!S.done.includes(i)){S.done.push(i);save();}renderRail();renderProg();}
function renderProg(){
  const n=S.done.filter(i=>i<MODULES.length).length+(S.best!==null&&S.best>=PASS?1:0);
  document.getElementById("progTxt").textContent=AR(n)+" من "+AR(TOTAL);
  document.getElementById("progBar").style.width=(n/TOTAL*100)+"%";
}
function renderRail(){
  const r=document.getElementById("rail");r.innerHTML="";
  MODULES.forEach((m,i)=>{
    const b=document.createElement("button");b.type="button";
    b.className=(S.done.includes(i)?"done":"")+(m.sub?" sub":"");b.setAttribute("aria-current",S.cur===i?"true":"false");
    b.innerHTML=`<span class="dot">${S.done.includes(i)?"✓":AR(m.sub?subNo(i):unitNo(i))}</span><span>${m.short}</span>`;
    b.onclick=()=>go(i);r.appendChild(b);
  });
  const sep=document.createElement("div");sep.className="sep";r.appendChild(sep);
  const e=document.createElement("button");e.type="button";
  const passed=S.best!==null&&S.best>=PASS;
  e.className=passed?"done":"";e.setAttribute("aria-current",S.cur===EXAM_IDX?"true":"false");
  e.innerHTML=`<span class="dot">${passed?"✓":"؟"}</span><span>الاختبار النهائي</span>`;
  e.onclick=()=>go(EXAM_IDX);r.appendChild(e);
  const sv=document.createElement("button");sv.type="button";
  sv.className=S.survey?"done":"";sv.setAttribute("aria-current",S.cur===SURVEY_IDX?"true":"false");
  sv.innerHTML=`<span class="dot">${S.survey?"✓":"✎"}</span><span>استبيان الدورة</span>`;
  sv.onclick=()=>go(SURVEY_IDX);r.appendChild(sv);
}
function go(i){stopTTS();S.cur=i;save();renderRail();i===SURVEY_IDX?renderSurvey():i===EXAM_IDX?renderExamIntro():renderModule(i);
  const m=document.getElementById("main");if(m.getBoundingClientRect().top<0)m.scrollIntoView({behavior:"smooth",block:"start"});}

function quizBlock(container,q,onAnswer){
  container.innerHTML=`<div class="q">${q.q}</div><div class="opts"></div><div class="fbw"></div>`;
  const opts=container.querySelector(".opts");
  q.o.forEach((t,k)=>{const b=document.createElement("button");b.type="button";b.className="opt";b.textContent=t;
    b.onclick=()=>{opts.querySelectorAll(".opt").forEach((x,j)=>{x.disabled=true;if(j===q.a)x.classList.add("right");});
      const ok=k===q.a;if(!ok)b.classList.add("wrong");
      const fb=container.querySelector(".fbw");
      fb.innerHTML=`<div class="fb ${ok?"ok":"no"}">${ok?"إجابة صحيحة.":"ليست الإجابة الصحيحة."}${q.e?` <span>${q.e}</span>`:""}</div>`;
      onAnswer(ok,k);};
    opts.appendChild(b);});
}

function renderModule(i){
  const m=MODULES[i];const main=document.getElementById("main");
  main.innerHTML=`<section class="panel"><div class="eyebrow">${i===0?"قبل البدء":m.eyebrow||"الوحدة "+AR(unitNo(i))+" من "+AR(UNITS)}</div><h2>${m.title}</h2><div class="tts" id="tts"></div><div class="lesson">${m.html}</div>
   ${m.check?`<div class="check"><div class="eyebrow" style="margin-bottom:8px">تحقق سريع</div><div id="chk"></div></div>`:""}
   <div class="nav-row"><button class="btn ghost" id="prev" type="button">السابق</button><button class="btn" id="next" type="button">${i===MODULES.length-1?"إلى الاختبار النهائي":"التالي"}</button></div></section>`;
  const prev=main.querySelector("#prev"),next=main.querySelector("#next");
  if(i===0)prev.style.visibility="hidden";
  prev.onclick=()=>go(i-1);
  next.onclick=()=>{markDone(i);go(i+1);};
  if(m.check){
    const answered=S.done.includes(i);
    if(!answered)next.disabled=true;
    quizBlock(main.querySelector("#chk"),m.check,()=>{next.disabled=false;markDone(i);});
    if(!answered){const note=document.createElement("span");}
  }
  if(m.id==="triangle")initTri();
  if(m.id==="flags")initFlags();
  if(m.id==="report")initCopy();
  updTTS();
}
function initTri(){
  const info=document.getElementById("triinfo");
  const show=k=>{document.querySelectorAll(".tri .v").forEach(v=>v.classList.toggle("on",v.dataset.k===k));
    const t=TRI[k];info.dataset.k=k;info.innerHTML=`<h4>${t.t}</h4><div>${t.d}</div><div class="ex">${t.ex}</div>`;};
  document.querySelectorAll(".tri .v").forEach(v=>{v.onclick=()=>show(v.dataset.k);
    v.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();show(v.dataset.k);}};});
  show("p");window.__triShow=show;
}
function initFlags(){
  const at=MODULES.findIndex(m=>m.id==="flags");
  const box=document.getElementById("flags");
  box.innerHTML=FLAGS.map((f,k)=>`<button type="button" class="card flagnav"><h4>${AR(k+1)}. ${f[0]}</h4><p>${flagCount(f[1].length)}</p></button>`).join("");
  box.querySelectorAll(".flagnav").forEach((b,k)=>b.onclick=()=>{markDone(at);go(at+1+k);});
}
function initCopy(){
  const b=document.getElementById("copyMail");
  b.onclick=()=>{const t="compliance@eitmed.sa";
    const sel=()=>{const r=document.createRange();r.selectNodeContents(document.getElementById("mail"));const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent="حدّد العنوان وانسخه";};
    try{navigator.clipboard.writeText(t).then(()=>{b.textContent="تم النسخ";},sel);}catch(e){sel();}};
}

// ---- exam ----
let X=null;
function renderExamIntro(){
  const main=document.getElementById("main");
  const ready=MODULES.every((_,i)=>S.done.includes(i));
  main.innerHTML=`<section class="panel"><div class="eyebrow">التقييم</div><h2>الاختبار النهائي</h2>
  <p>يتكون الاختبار من ${AR(EXAM.length)} سؤالاً من نوع الاختيار من متعدد، تظهر بترتيب عشوائي. درجة النجاح ${AR(PASS)} من ${AR(EXAM.length)} (٨٠٪). يمكنك إعادة الاختبار أكثر من مرة.</p>
  ${S.best!==null?`<div class="def"><b>أفضل نتيجة سابقة</b>${AR(S.best)} من ${AR(EXAM.length)}${S.best>=PASS?" (ناجح)":""}</div>`:""}
  ${surveyDue()?`<div class="def sama"><b>خطوة مطلوبة</b>أكمل استبيان الدورة أولاً لعرض نتيجتك أو إعادة الاختبار.</div>`:ready?"":`<div class="def sama"><b>ملاحظة</b>لم تكمل كل الوحدات بعد. ننصحك بإنهائها أولاً، لكن يمكنك البدء الآن.</div>`}
  <div class="who">
    <label for="fName">الاسم الكامل</label><input id="fName" type="text" autocomplete="name" maxlength="120" value="${esc(S.name||"")}">
    <label for="fEmail">البريد الإلكتروني</label><input id="fEmail" type="email" dir="ltr" autocomplete="email" inputmode="email" maxlength="190" value="${esc(S.email||"")}">
    <div class="err" id="whoErr" hidden>اكتب اسمك الكامل وبريدك الإلكتروني الصحيح قبل البدء.</div>
  </div>
  <div class="nav-row"><button class="btn ghost" type="button" id="back">رجوع للوحدات</button><button class="btn" type="button" id="start">${surveyDue()?"إلى الاستبيان":"ابدأ الاختبار"}</button></div></section>`;
  main.querySelector("#back").onclick=()=>go(MODULES.length-1);
  if(surveyDue()){main.querySelector(".who").style.display="none";main.querySelector("#start").onclick=()=>go(SURVEY_IDX);return;}
  main.querySelector("#start").onclick=()=>{
    const n=main.querySelector("#fName").value.trim(),e=main.querySelector("#fEmail").value.trim().toLowerCase();
    if(n.length<3||!isEmail(e)){main.querySelector("#whoErr").hidden=false;return;}
    S.name=n;S.email=e;save();startExam();};
}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function startExam(){
  X={order:shuffle(EXAM.map((_,i)=>i)),i:0,res:[],ans:[]};
  // shuffle options per question; keep perm so answers can be reported by original index
  X.qs=X.order.map(idx=>{const q=EXAM[idx];const perm=shuffle(q.o.map((_,k)=>k));return{q:q.q,o:perm.map(k=>q.o[k]),a:perm.indexOf(q.a),perm};});
  renderQ();
}
function renderQ(){
  const main=document.getElementById("main");const q=X.qs[X.i];
  const pips=X.qs.map((_,k)=>`<i class="${k<X.res.length?(X.res[k]?"r":"w"):k===X.i?"c":""}"></i>`).join("");
  main.innerHTML=`<section class="panel"><div class="exam-head"><span class="eyebrow">الاختبار النهائي</span><span>السؤال ${AR(X.i+1)} من ${AR(X.qs.length)}</span></div>
  <div class="pips">${pips}</div><div id="eq"></div>
  <div class="nav-row"><span></span><button class="btn" id="nx" type="button" disabled>${X.i===X.qs.length-1?"عرض النتيجة":"السؤال التالي"}</button></div></section>`;
  quizBlock(main.querySelector("#eq"),q,(ok,k)=>{X.res.push(ok);X.ans.push({q:X.order[X.i],a:X.qs[X.i].perm[k]});main.querySelector("#nx").disabled=false;
    const p=main.querySelectorAll(".pips i")[X.i];p.className=ok?"r":"w";});
  main.querySelector("#nx").onclick=()=>{X.i++;X.i<X.qs.length?renderQ():finishExam();};
}
// The survey is mandatory: an employee who has taken the exam must send it before seeing results.
const surveyDue=()=>S.best!==null&&!S.survey;
function finishExam(){
  const score=X.res.filter(Boolean).length;
  if(S.best===null||score>S.best)S.best=score;
  S.lastExam={score,total:X.qs.length,wrong:X.order.filter((_,k)=>!X.res[k]),at:Date.now()};
  save();renderRail();renderProg();
  if(CFG.submitUrl)submitResult(X.ans); // saved to the server right away, even if the survey is never sent
  if(surveyDue()){S.cur=SURVEY_IDX;save();renderRail();renderSurvey();}else renderResult();
}
function renderResult(){
  const L=S.lastExam;if(!L){go(EXAM_IDX);return;}
  const score=L.score,pass=score>=PASS;
  const main=document.getElementById("main");
  main.innerHTML=`<section class="panel"><div class="result">
  <div class="eyebrow">نتيجتك</div>
  <div class="score ${pass?"pass":"fail"}">${AR(score)} / ${AR(L.total)}</div>
  <p style="margin:6px auto 0">${pass?"أحسنت، اجتزت الاختبار النهائي.":"لم تصل لدرجة النجاح ("+AR(PASS)+"). راجع الإجابات أدناه ثم أعد المحاولة."}</p>
  ${CFG.submitUrl?`<div class="sync" id="sync" aria-live="polite"></div>`:""}
  ${pass?`<div class="cert"><div style="font-family:var(--f-display);font-size:1.15rem">${esc(S.name)}</div><h3>أتمّ دورة ثقافة النزاهة والوعي بالاحتيال</h3><div>EITMED · حماية مكان عملنا</div><div style="color:var(--muted);font-size:.9rem;margin-top:6px">${new Date(L.at).toLocaleDateString("ar-SA-u-ca-gregory",{year:"numeric",month:"long",day:"numeric"})}</div></div>`:""}
  ${L.wrong.length?`<div class="review"><h3>مراجعة الأسئلة التي أخطأت فيها</h3>${L.wrong.map(i=>`<div class="item">${EXAM[i].q}<br><b>الإجابة الصحيحة: ${EXAM[i].o[EXAM[i].a]}</b></div>`).join("")}</div>`:""}
  <div class="nav-row" style="justify-content:center"><button class="btn" id="again" type="button">إعادة الاختبار</button><button class="btn ghost" id="home" type="button">العودة للوحدات</button></div>
  </div></section>`;
  main.querySelector("#again").onclick=startExam;
  main.querySelector("#home").onclick=()=>go(0);
  paintSync();
}
// Result upload state, shown on whichever page is open (survey or result)
const SYNC={state:null,ans:null};
function paintSync(){
  const box=document.getElementById("sync");if(!box||!SYNC.state){if(box)box.hidden=true;return;}
  box.hidden=false;
  if(SYNC.state==="pending"){box.className="sync";box.textContent="جاري حفظ نتيجة الاختبار…";}
  else if(SYNC.state==="ok"){box.className="sync ok";box.textContent="تم حفظ نتيجة الاختبار وإرسالها لإدارة الالتزام.";}
  else{box.className="sync no";box.innerHTML='تعذّر حفظ نتيجة الاختبار. تأكد من اتصالك ثم <button type="button" class="linkbtn">أعد الإرسال</button>';
    box.querySelector("button").onclick=()=>submitResult(SYNC.ans);}
}
function submitResult(ans){
  SYNC.state="pending";SYNC.ans=ans;paintSync();
  fetch(CFG.submitUrl,{method:"POST",credentials:"same-origin",
    headers:{"Content-Type":"application/json","Accept":"application/json","X-CSRF-TOKEN":CFG.csrf||"","ngrok-skip-browser-warning":"1"},
    body:JSON.stringify({name:S.name,email:S.email,answers:ans})})
  .then(r=>{if(!r.ok)throw new Error(r.status);return r.json();})
  .then(()=>{SYNC.state="ok";paintSync();})
  .catch(()=>{SYNC.state="fail";paintSync();});
}

// ---- text to speech ----
const synth=window.speechSynthesis||null;
const T={q:[],i:0,on:false,paused:false,rate:1,tok:0};
let arVoice=null;
try{const r=parseFloat(localStorage.getItem(KEY+"-rate"));if(r)T.rate=r}catch(e){}
function pickVoice(){if(!synth)return;const v=synth.getVoices().filter(x=>/^ar/i.test(x.lang));arVoice=v.find(x=>/SA/i.test(x.lang))||v[0]||null;}
if(synth){pickVoice();try{synth.addEventListener("voiceschanged",()=>{pickVoice();if(!T.on)updTTS();});}catch(e){synth.onvoiceschanged=()=>{pickVoice();if(!T.on)updTTS();};}}
function chunks(t){t=t.replace(/\s+/g," ").trim();if(!t)return[];
  const parts=t.split(/(?<=[.؟!:])\s+/);const out=[];
  parts.forEach(p=>{if(p.length<=220){out.push(p);return;}let cur="";p.split(/(?<=،)\s+/).forEach(s=>{if((cur+" "+s).length>220&&cur){out.push(cur);cur=s;}else cur=cur?cur+" "+s:s;});if(cur)out.push(cur);});
  return out;}
function buildQueue(){
  const root=document.querySelector(".panel");const items=[];
  const add=(el,t,on)=>chunks(t).forEach(c=>items.push({el,t:c,on}));
  add(root.querySelector("h2"),root.querySelector("h2").textContent);
  root.querySelector(".lesson").querySelectorAll(".lesson > p, .lesson > h3, .def, .objectives li, .card h4, .card p, .card li, details.flag summary, details.flag li, .tri").forEach(el=>{
    if(el.classList.contains("tri")){const info=document.getElementById("triinfo");["p","o","r"].forEach(k=>{const x=TRI[k];add(info,x.t+". "+x.d+" "+x.ex,()=>window.__triShow&&window.__triShow(k));});return;}
    if(el.tagName==="SUMMARY"){add(el,el.firstChild.textContent);return;}
    add(el,el.textContent);
  });
  return items;}
function clearHi(){document.querySelectorAll(".reading").forEach(e=>e.classList.remove("reading"));}
function stopTTS(){T.tok++;if(synth)synth.cancel();T.on=false;T.paused=false;clearHi();updTTS();}
function speakNext(){
  if(!T.on||T.paused)return;clearHi();
  if(T.i>=T.q.length){stopTTS();return;}
  const it=T.q[T.i];if(it.on&&(T.i===0||T.q[T.i-1].on!==it.on))it.on();
  const d=it.el.closest("details");if(d)d.open=true;
  it.el.classList.add("reading");
  try{it.el.scrollIntoView({block:"nearest",behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"});}catch(e){}
  const tok=++T.tok;const u=new SpeechSynthesisUtterance(it.t);
  u.lang=arVoice?arVoice.lang:"ar-SA";if(arVoice)u.voice=arVoice;u.rate=T.rate;
  const next=()=>{if(tok!==T.tok)return;T.i++;speakNext();};
  u.onend=next;u.onerror=next;
  synth.speak(u);}
function updTTS(){
  const b=document.getElementById("tts");if(!b)return;
  if(!synth){b.innerHTML='<span class="note">متصفحك لا يدعم القراءة الصوتية. جرّب Chrome أو Edge أو Safari.</span>';return;}
  const play=!T.on?"استمع للوحدة":T.paused?"متابعة":"إيقاف مؤقت";
  const noAr=synth.getVoices().length>0&&!arVoice;
  b.innerHTML=`<button class="btn" type="button" id="ttsPlay">${play}</button>${T.on?'<button class="btn ghost" type="button" id="ttsStop">إيقاف</button>':""}<label class="lbl2" for="ttsRate">السرعة</label><select id="ttsRate">${[0.8,1,1.2,1.4].map(r=>`<option value="${r}"${r===T.rate?" selected":""}>${AR(r)}×</option>`).join("")}</select>${noAr?'<span class="note">لا يوجد صوت عربي مثبّت على جهازك، فقد تكون القراءة غير واضحة. يمكنك إضافة اللغة العربية من إعدادات الكلام في جهازك.</span>':""}`;
  b.querySelector("#ttsPlay").onclick=()=>{
    if(!T.on){T.q=buildQueue();T.i=0;T.on=true;T.paused=false;updTTS();speakNext();}
    else if(T.paused){T.paused=false;updTTS();speakNext();}
    else{T.paused=true;T.tok++;synth.cancel();updTTS();}
    const p=document.getElementById("ttsPlay");if(p)p.focus();};
  const st=b.querySelector("#ttsStop");if(st)st.onclick=stopTTS;
  b.querySelector("#ttsRate").onchange=e=>{T.rate=parseFloat(e.target.value);try{localStorage.setItem(KEY+"-rate",T.rate)}catch(err){}
    if(T.on&&!T.paused){T.tok++;synth.cancel();speakNext();}};
}

// ---- survey ----
function renderSurvey(){
  const main=document.getElementById("main");
  const prev=S.surveyAns||{};const gate=surveyDue();
  main.innerHTML=`<section class="panel"><div class="eyebrow">${gate?"خطوة أخيرة":"رأيك يهمنا"}</div><h2>استبيان الدورة</h2>
  ${gate?`<div class="def sama"><b>الاستبيان إلزامي</b>أكمل الاستبيان وأرسله لعرض نتيجة الاختبار.</div>`:""}
  ${gate&&CFG.submitUrl?`<div class="sync" id="sync" aria-live="polite" hidden></div>`:""}
  <p>ساعدنا في تحسين الدورة. حدّد مدى موافقتك على كل عبارة${SURVEY.open.length?"، ثم أجب عن الأسئلة المفتوحة إن رغبت":""}. يستغرق الاستبيان أقل من دقيقة.</p>
  ${S.survey?`<div class="def"><b>شكراً لك</b>سبق أن أرسلت الاستبيان. يمكنك تعديل إجاباتك وإعادة إرسالها.</div>`:""}
  <div class="who">
    <label for="sName">الاسم الكامل</label><input id="sName" type="text" autocomplete="name" maxlength="120" value="${esc(S.name||"")}">
    <label for="sEmail">البريد الإلكتروني</label><input id="sEmail" type="email" dir="ltr" autocomplete="email" inputmode="email" maxlength="190" value="${esc(S.email||"")}">
  </div>
  <div class="survey">
  ${SURVEY.ratings.map((q,i)=>`<fieldset class="sv-q" data-i="${i}"><legend>${AR(i+1)}. ${esc(q)}</legend><div class="scale">
    ${SCALE.map((t,k)=>`<label><input type="radio" name="r${i}" value="${k+1}"${prev.ratings&&prev.ratings[i]===k+1?" checked":""}><span>${t}</span></label>`).join("")}
  </div></fieldset>`).join("")}
  ${SURVEY.open.map((q,i)=>`<div class="sv-open"><label for="o${i}">${esc(q)} <span class="opt-l">(اختياري)</span></label><textarea id="o${i}" rows="3" maxlength="2000">${esc((prev.comments||[])[i]||"")}</textarea></div>`).join("")}
  </div>
  <div class="err" id="svErr" hidden></div>
  <div class="sync" id="svSync" aria-live="polite" hidden></div>
  <div class="nav-row">${gate?"<span></span>":`<button class="btn ghost" type="button" id="svBack">رجوع</button>`}<button class="btn" type="button" id="svSend">${gate?"إرسال الاستبيان وعرض النتيجة":"إرسال الاستبيان"}</button></div></section>`;
  if(gate)paintSync();else main.querySelector("#svBack").onclick=()=>go(EXAM_IDX);
  main.querySelector("#svSend").onclick=()=>{
    const err=main.querySelector("#svErr");err.hidden=true;
    main.querySelectorAll(".sv-q").forEach(f=>f.classList.remove("missing"));
    const n=main.querySelector("#sName").value.trim(),e=main.querySelector("#sEmail").value.trim().toLowerCase();
    const ratings=SURVEY.ratings.map((_,i)=>{const c=main.querySelector(`input[name="r${i}"]:checked`);return c?parseInt(c.value,10):null;});
    const missing=ratings.map((r,i)=>r===null?i:-1).filter(i=>i>=0);
    if(n.length<3||!isEmail(e)){err.textContent="اكتب اسمك الكامل وبريدك الإلكتروني الصحيح.";err.hidden=false;main.querySelector(n.length<3?"#sName":"#sEmail").focus();return;}
    if(missing.length){missing.forEach(i=>main.querySelector(`.sv-q[data-i="${i}"]`).classList.add("missing"));
      err.textContent="أجب عن جميع العبارات المظللة.";err.hidden=false;main.querySelector(`.sv-q[data-i="${missing[0]}"]`).scrollIntoView({behavior:"smooth",block:"center"});return;}
    const comments=SURVEY.open.map((_,i)=>main.querySelector("#o"+i).value.trim());
    S.name=n;S.email=e;S.surveyAns={ratings,comments};save();
    sendSurvey({name:n,email:e,ratings,comments},gate);
  };
}
function sendSurvey(body,gate){
  const box=document.getElementById("svSync"),btn=document.getElementById("svSend");
  const done=()=>{S.survey=true;save();renderRail();
    if(gate&&S.lastExam){S.cur=EXAM_IDX;save();renderRail();renderResult();return;}
    document.getElementById("main").innerHTML=`<section class="panel"><div class="result"><div class="eyebrow">استبيان الدورة</div><h2>شكراً لك</h2><p style="margin:6px auto 0">تم استلام إجاباتك، وستساعدنا في تحسين الدورة.</p>
    <div class="nav-row" style="justify-content:center"><button class="btn ghost" id="home" type="button">العودة للوحدات</button></div></div></section>`;
    document.getElementById("home").onclick=()=>go(0);};
  if(!CFG.surveyUrl){done();return;} // standalone: nowhere to send
  box.hidden=false;box.className="sync";box.textContent="جاري إرسال الاستبيان…";btn.disabled=true;
  fetch(CFG.surveyUrl,{method:"POST",credentials:"same-origin",
    headers:{"Content-Type":"application/json","Accept":"application/json","X-CSRF-TOKEN":CFG.csrf||"","ngrok-skip-browser-warning":"1"},
    body:JSON.stringify(body)})
  .then(r=>{if(!r.ok)throw new Error(r.status);return r.json();})
  .then(done)
  .catch(()=>{btn.disabled=false;box.className="sync no";box.textContent="تعذّر إرسال الاستبيان. تأكد من اتصالك ثم اضغط «إرسال الاستبيان» مرة أخرى.";});
}

renderRail();renderProg();go(Math.min(S.cur||0,SURVEY_IDX));
