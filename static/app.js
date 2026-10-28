/**
 * منصة التعلم والتحول المهني إلى إدارة المنتجات
 * المستفيد: إسماعيل العسيوطي
 * Interactive Core Application (Vanilla JS - Zero Dependencies)
 */

// Data Store
const APP_DATA = {
  skills: [
    {
      title: "أبحاث المستخدمين (User Research)",
      category: "Discovery",
      level: "medium",
      levelText: "متوسط",
      evidence: "أجريت مقابلات نوعية مع 15 متخصص SEO أثناء بناء منتج SEO GPS وحددت ألم الفحص اليدوي اليومي.",
      gap: "الاعتماد على المقابلات غير المنظمة دون إطار Continuous Discovery أو Opportunity Solution Trees.",
      plan: "دراسة منهجية تيريزا توريس وتطبيق شجرة الفرص والحلول على SEO GPS."
    },
    {
      title: "تحليل رحلة المستخدم وسلوكه (User Journey & Behavior)",
      category: "Discovery",
      level: "strong",
      levelText: "قوي",
      evidence: "استخدام Microsoft Clarity و GA4 لدراسة سلوك زوار منصة Ajeek وترجمتها لتحسينات واجهة ومسار التسجيل.",
      gap: "الربط بين سلوك الواجهة وتحقيق مؤشرات الاحتفاظ (Retention) وتدفقات التفعيل (Activation Funnels).",
      plan: "نقل التحليل من صفحات الهبوط الفردية إلى تصميم مسارات الاحتفاظ والـ Onboarding الكاملة."
    },
    {
      title: "تحسين تجربة المستخدم (UX Optimization)",
      category: "Discovery",
      level: "strong",
      levelText: "قوي",
      evidence: "خلفية دراسية في تطوير المواقع (BIS) وخبرة عملية في تحسين تجربة التصفح ونقاط الاحتكاك لعملاء B2B.",
      gap: "الحاجة لإتقان عمل نماذج أولية سريعة (Wireframing) على أداة Figma لاختبار الفرضيات قبل التطوير.",
      plan: "إتقان أساسيات Figma لمديري المنتجات لإنشاء Lo-Fi Prototypes ومشاركتها مع المطورين."
    },
    {
      title: "استراتيجية ورؤية المنتج (Product Strategy & Vision)",
      category: "Strategy",
      level: "gap",
      levelText: "يحتاج تطوير",
      evidence: "بناء أدوات برمجية لسد احتياجات فورية لفريق العمل والعملاء.",
      gap: "غياب الإطار النظري لبناء استراتيجية تميز المنتج على المدى الطويل وربطها برؤية الشركة وأهداف OKRs.",
      plan: "دراسة أطر الاستراتيجية مثل نموذج DHM لجيبسون بيدل ونموذج ريتشارد روميلت وتطبيقها على منتجك."
    },
    {
      title: "التعاون التقني مع المطورين (Developer Collaboration)",
      category: "Execution",
      level: "strong",
      levelText: "قوي",
      evidence: "اجتماعات أسبوعية منتظمة مع المطورين لتنفيذ متطلبات منصات كبرى (مثل Ajeek) وفهم الأكواد و APIs.",
      gap: "لا توجد فجوة تواصل، بل ميزة تفاضلية نادرة تمكنك من كسب ثقة الفرق الهندسية فوراً.",
      plan: "تعزيز هذه الميزة عبر إدارة المقايضات التقنية (Technical Trade-offs) وتحديد الديون الفنية."
    },
    {
      title: "جمع وتحديد المتطلبات (Requirements Gathering)",
      category: "Execution",
      level: "medium",
      levelText: "متوسط",
      evidence: "كتابة مواصفات ومشاكل تقنية وتتبعها حتى الإطلاق على المنصات الرقمية لعملاء Digital Bond.",
      gap: "صياغة المتطلبات كمهام تقنية أو تذاكر فنية بدلاً من صياغتها كـ PRD معياري يركز على المشكلة والهدف.",
      plan: "التدرب على كتابة وثائق PRD كاملة تتضمن سياق المشكلة، فرضيات العمل، حالات الاستخدام، ومعايير القبول."
    },
    {
      title: "قصص المستخدمين ومعايير القبول (User Stories & BDD)",
      category: "Execution",
      level: "gap",
      levelText: "يحتاج تطوير",
      evidence: "متابعة المشاكل وإصلاحها مع المطورين حتى الطرح النهائي.",
      gap: "عدم كتابة قصص المستخدمين بصيغة (As a... I want... So that...) وتحديد معايير Given-When-Then.",
      plan: "إتقان كتابة قصص المستخدمين ومعايير القبول وتفكيك الملاحم (Epics) إلى مهام قابلة للتسليم في Sprint."
    },
    {
      title: "أطر تحديد الأولويات (RICE, MoSCoW, Kano)",
      category: "Execution",
      level: "gap",
      levelText: "يحتاج تطوير",
      evidence: "ترتيب الأولويات الفنية بناءً على الأثر المباشر لنتائج محركات البحث وطلبات العملاء.",
      gap: "غياب الأطر الكمية المعيارية التي توازن بين الجهد والأثر وثقة الفريق وتوافق الأهداف.",
      plan: "تطبيق أطر RICE و MoSCoW و Kano Model على جدول أعمال تطوير منتج SEO GPS ومنصة Ajeek."
    },
    {
      title: "تحليل البيانات وتتبع الأحداث (Analytics & Tracking)",
      category: "Metrics",
      level: "strong",
      levelText: "قوي",
      evidence: "إتقان GA4 و Google Tag Manager و Microsoft Clarity وقواعد البيانات والتحليل بـ Python و R.",
      gap: "التركيز ينصب غالباً على مؤشرات الزيارات والتحويل الأولي (Acquisition & Conversion).",
      plan: "الانتقال لمقاييس المنتجات المتخصصة في سلوك الاستخدام (Product Analytics) مثل Mixpanel و Amplitude."
    },
    {
      title: "مقاييس المنتجات واقتصادياتها (Product Metrics & KPIs)",
      category: "Metrics",
      level: "gap",
      levelText: "يحتاج تطوير",
      evidence: "متابعة نمو الزيارات العضوية، معدلات النقر (CTR)، والتحويلات عبر مسارات المواقع.",
      gap: "عدم بناء أشجار المقاييس الرسمية، وتحديد مؤشر النجم الشمالي (North Star)، ونماذج AARRR و HEART.",
      plan: "بناء شجرة مقاييس تفصيلية لـ SEO GPS مع تحديد مقاييس الـ Activation و Retention و Churn و LTV."
    },
    {
      title: "التجريب واختبار الفرضيات (A/B Testing)",
      category: "Metrics",
      level: "medium",
      levelText: "متوسط",
      evidence: "إجراء اختبارات تحسين العناوين وعناصر الصفحات لرفع الأداء في محركات البحث والمستخدمين.",
      gap: "غياب الأساس الإحصائي الرسمي لحجم العينة، القوة الإحصائية (Statistical Power)، و p-value.",
      plan: "دراسة منهجية التجريب العلمي للمنتجات، وحساب مدة الاختبارات، وتفادي الفخاخ الإحصائية الشائعة."
    },
    {
      title: "نماذج التسعير وحزم الاشتراك (Pricing Strategy)",
      category: "Business",
      level: "gap",
      levelText: "يحتاج تطوير",
      evidence: "تقديم أداة SEO GPS كحل داخلي وتجريبي لتقليص وقت العمل.",
      gap: "عدم دراسة استراتيجيات تسعير SaaS (Freemium, Tiered, Usage-based) وعلاقتها بـ COGS.",
      plan: "بناء نموذج تسعير ثلاثي المستويات لـ SEO GPS مبني على القيمة والحد الأقصى لاستخدام الـ API."
    },
    {
      title: "إدارة منتجات الذكاء الاصطناعي (AI Product Management)",
      category: "AI",
      level: "medium",
      levelText: "متوسط",
      evidence: "المشاركة في بناء حلول ذكاء اصطناعي وأدوات SaaS لعملاء B2B في Digital Bond، واستخدام Python.",
      gap: "التعامل مع التقنية كحل برمجي بدلاً من تقييمها كمنتج تجاري يوازن بين دقة النموذج وتكلفة الاستخدام.",
      plan: "دراسة أطر إدارة منتجات الـ AI: قياس الهلوسة، وإدارة الـ Latency، وتصميم تجارب واجهة احتمالية."
    },
    {
      title: "التأثير بدون سلطة وإدارة أصحاب المصلحة (Leadership)",
      category: "Leadership",
      level: "strong",
      levelText: "قوي",
      evidence: "قيادة فريق SEO وتنسيق المهام وعرض تقارير الأداء للعملاء والإدارة في Digital Bond.",
      gap: "صياغة التواصل بلغة المال والأعمال (ROI, CAC, Retention) بدلاً من المقاييس التسويقية فقط.",
      plan: "إتقان إعداد عروض تحديث المنتجات (Product Reviews) ومواءمة توقعات الإدارة عبر خرائط الطريق."
    }
  ],

  resources: [
    {
      name: "INSPIRED: How to Create Tech Products Customers Love (Marty Cagan)",
      type: "كتاب",
      category: "Book",
      url: "https://www.goodreads.com/book/show/35249663-inspired",
      level: "متوسط",
      duration: "10 ساعات قراءة",
      price: "مدفوع",
      phase: 1,
      priority: "أولوية قصوى"
    },
    {
      name: "Escaping the Build Trap (Melissa Perri)",
      type: "كتاب",
      category: "Book",
      url: "https://www.goodreads.com/book/show/39863488-escaping-the-build-trap",
      level: "متوسط",
      duration: "7 ساعات قراءة",
      price: "مدفوع",
      phase: 1,
      priority: "أولوية قصوى"
    },
    {
      name: "Digital Product Management: Modern Fundamentals (Univ of Virginia)",
      type: "كورس",
      category: "Course",
      url: "https://www.coursera.org/learn/uva-darden-digital-product-management",
      level: "متوسط",
      duration: "11 ساعة",
      price: "مجاني للمشاهدة",
      phase: 1,
      priority: "أولوية عالية"
    },
    {
      name: "Continuous Discovery Habits (Teresa Torres)",
      type: "كتاب",
      category: "Book",
      url: "https://www.goodreads.com/book/show/58133580-continuous-discovery-habits",
      level: "متوسط إلى متقدم",
      duration: "9 ساعات قراءة",
      price: "مدفوع",
      phase: 2,
      priority: "أولوية قصوى"
    },
    {
      name: "The Mom Test: How to talk to customers (Rob Fitzpatrick)",
      type: "كتاب",
      category: "Book",
      url: "https://www.goodreads.com/book/show/52283963-the-mom-test",
      level: "متوسط",
      duration: "4 ساعات قراءة",
      price: "مدفوع",
      phase: 2,
      priority: "أولوية قصوى"
    },
    {
      name: "The Official Scrum Guide 2020 (Schwaber & Sutherland)",
      type: "وثيقة رسمية",
      category: "Article",
      url: "https://scrumguides.org/scrum-guide.html",
      level: "متوسط",
      duration: "ساعتان",
      price: "مجاني",
      phase: 3,
      priority: "أولوية قصوى"
    },
    {
      name: "Atlassian Agile Coach (إدارة السكروم على Jira)",
      type: "أدلة ومقالات",
      category: "Article",
      url: "https://www.atlassian.com/agile",
      level: "متوسط",
      duration: "6 ساعات",
      price: "مجاني",
      phase: 3,
      priority: "أولوية قصوى"
    },
    {
      name: "The North Star Playbook (Amplitude)",
      type: "كتاب ودليل",
      category: "Book",
      url: "https://amplitude.com/north-star",
      level: "متوسط إلى متقدم",
      duration: "5 ساعات",
      price: "مجاني",
      phase: 4,
      priority: "أولوية قصوى"
    },
    {
      name: "أكاديمية التحليلات السلوكية من Mixpanel",
      type: "أدلة ومقالات",
      category: "Article",
      url: "https://mixpanel.com/blog/",
      level: "متوسط إلى متقدم",
      duration: "6 ساعات",
      price: "مجاني",
      phase: 4,
      priority: "أولوية عالية"
    },
    {
      name: "Trustworthy Online Controlled Experiments (Ron Kohavi)",
      type: "كتاب",
      category: "Book",
      url: "https://www.goodreads.com/book/show/50397551-trustworthy-online-controlled-experiments",
      level: "متقدم",
      duration: "12 ساعة قراءة",
      price: "مدفوع",
      phase: 4,
      priority: "أولوية متوسطة"
    },
    {
      name: "AI Product Management Specialization (Duke University)",
      type: "تخصص كورس",
      category: "Course",
      url: "https://www.coursera.org/specializations/ai-product-management-duke",
      level: "متوسط إلى متقدم",
      duration: "30 ساعة",
      price: "مجاني للمشاهدة",
      phase: 5,
      priority: "أولوية قصوى"
    },
    {
      name: "Lenny's Newsletter & Podcast",
      type: "نشرة وبودكاست",
      category: "Podcast",
      url: "https://www.lennysnewsletter.com/",
      level: "متوسط إلى متقدم",
      duration: "أسبوعي",
      price: "مجاني جزئياً",
      phase: 5,
      priority: "أولوية قصوى"
    },
    {
      name: "Reforge Blog (Growth & AI Product Strategy)",
      type: "مقالات متقدمة",
      category: "Article",
      url: "https://www.reforge.com/blog",
      level: "متقدم",
      duration: "مستمر",
      price: "مجاني",
      phase: 5,
      priority: "أولوية عالية"
    },
    {
      name: "Cracking the PM Interview (Gayle McDowell & Jackie Bavaro)",
      type: "كتاب",
      category: "Book",
      url: "https://www.goodreads.com/book/show/18691941-cracking-the-pm-interview",
      level: "متوسط إلى متقدم",
      duration: "12 ساعة قراءة",
      price: "مدفوع",
      phase: 6,
      priority: "أولوية قصوى"
    },
    {
      name: "Decode and Conquer (Lewis Lin - CIRCLES Framework)",
      type: "كتاب",
      category: "Book",
      url: "https://www.goodreads.com/book/show/19085816-decode-and-conquer",
      level: "متوسط إلى متقدم",
      duration: "8 ساعات قراءة",
      price: "مدفوع",
      phase: 6,
      priority: "أولوية قصوى"
    },
    {
      name: "بودكاست Product Management بالعربي (إهاب تاج)",
      type: "بودكاست عربي",
      category: "Podcast",
      url: "https://podcasts.apple.com/us/podcast/product-management-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/id1527847953",
      level: "متوسط",
      duration: "حلقات متعددة",
      price: "مجاني",
      phase: 2,
      priority: "أولوية عالية"
    },
    {
      name: "بودكاست برودكت ممتاز (حسين ممتاز)",
      type: "بودكاست عربي",
      category: "Podcast",
      url: "https://www.youtube.com/@HosamMomtaz",
      level: "متوسط إلى متقدم",
      duration: "حلقات متعددة",
      price: "مجاني",
      phase: 4,
      priority: "أولوية عالية"
    },
    {
      name: "حلقة مناقشة كتاب Inspired - بودكاست غلاف",
      type: "بودكاست عربي",
      category: "Podcast",
      url: "https://www.youtube.com/watch?v=k5qP8pB7jQE",
      level: "متوسط",
      duration: "ساعة واحدة",
      price: "مجاني",
      phase: 1,
      priority: "أولوية عالية"
    },
    {
      name: "قوالب إدارة المنتجات في Notion",
      type: "قوالب جاهزة",
      category: "Template",
      url: "https://www.notion.so/templates/category/product-management",
      level: "متوسط",
      duration: "تطبيق مباشر",
      price: "مجاني",
      phase: 3,
      priority: "أولوية عالية"
    },
    {
      name: "قوالب ومكتبة Atlassian Confluence للمنتجات",
      type: "قوالب جاهزة",
      category: "Template",
      url: "https://www.atlassian.com/software/confluence/templates/category/product-management",
      level: "متوسط",
      duration: "تطبيق مباشر",
      price: "مجاني",
      phase: 3,
      priority: "أولوية عالية"
    }
  ],

  weeks: [
    { num: 1, phase: 1, title: "عقلية مدير المنتج وتفكيك فخ البناء", desc: "قراءة فصول من Escaping the Build Trap، التمييز بين تسليم المخرجات وتحقيق القيمة للأعمال والمستخدم.", deliverable: "ملخص استراتيجي: Feature Teams vs Product Teams" },
    { num: 2, phase: 1, title: "استراتيجية المنتج ورسالة القيمة", desc: "الوحدة الأولى من كورس Univ of Virginia على Coursera ونموذج Value Proposition Canvas.", deliverable: "مسودة رسالة القيمة لمنتج SEO GPS" },
    { num: 3, phase: 1, title: "اقتصاديات SaaS وأهداف OKRs", desc: "دراسة CAC, LTV, Churn ومؤشرات الأداء ومواءمتها مع أهداف العمل العليا من Google re:Work.", deliverable: "جدول 3 أهداف OKRs نوعية لـ SEO GPS" },
    { num: 4, phase: 1, title: "تسليم المشروع الأول (Vision Brief)", desc: "مراجعة فصول استراتيجية المنتج من كتاب INSPIRED ودمج نتائج الأسابيع السابقة.", deliverable: "المشروع 1: وثيقة رؤية واستراتيجية SEO GPS كاملة" },
    
    { num: 5, phase: 2, title: "أساسيات الاكتشاف المستمر وثلاثي المنتج", desc: "دراسة منهجية Continuous Discovery ودور Product Trio في اللقاءات الأسبوعية مع العملاء.", deliverable: "خريطة تدفق أسبوعية لجلسات الاكتشاف" },
    { num: 6, phase: 2, title: "شجرة الفرص والحلول (OST)", desc: "رسم شجرة Opportunity Solution Tree وربط ألم المستخدمين بحلول متعددة وفرضيات اختبار.", deliverable: "شجرة OST كاملة لمنتج SEO GPS على Miro" },
    { num: 7, phase: 2, title: "فن المقابلات دون انحياز (The Mom Test)", desc: "قراءة كتاب The Mom Test وتطوير سيناريو مقابلات يستخرج الحقائق السلوكية بدون تملق.", deliverable: "دليل أسئلة مقابلات مستخدمين محايد" },
    { num: 8, phase: 2, title: "النماذج الأولية على Figma وتسليم المشروع الثاني", desc: "تصميم Wireframes منخفضة الدقة لميزة التنبيهات الفورية للمشاكل التقنية.", deliverable: "المشروع 2: شجرة OST + نموذج Figma تفاعلي" },
    
    { num: 9, phase: 3, title: "منهجية Scrum الرسمية ودور الـ PM/PO", desc: "قراءة Scrum Guide 2020، احتفاليات السبرنت، وإدارة الـ Backlog مع المطورين.", deliverable: "مصفوفة فحص بيئة العمل وتطبيق السكروم" },
    { num: 10, phase: 3, title: "كتابة وثائق PRD المعيارية", desc: "هيكل وثيقة متطلبات المنتج، سياق المشكلة، النطاق وما هو خارج النطاق (Non-goals).", deliverable: "مسودة وثيقة PRD لميزة فحص العناوين المكررة" },
    { num: 11, phase: 3, title: "قصص المستخدمين وتحديد الأولويات بـ RICE", desc: "صياغة معايير القبول بصيغة Given-When-Then وتطبيق معادلة RICE الحسابية بدقة.", deliverable: "سجل ميزات مصنف وفق RICE بقصص BDD" },
    { num: 12, phase: 3, title: "إدارة الباك لوج على Jira وتسليم المشروع الثالث", desc: "إنشاء مشروع Scrum Board على Jira وتقدير نقاط الـ Story Points وتخطيط سبرنت.", deliverable: "المشروع 3: وثيقة PRD معيارية كاملة + Backlog على Jira" },
    
    { num: 13, phase: 4, title: "مؤشر النجم الشمالي (North Star Framework)", desc: "دراسة كتاب Amplitude وتحديد مؤشر النجم الشمالي ومدخلاته الأربعة لمنتج SaaS.", deliverable: "مخطط شجرة النجم الشمالي لـ SEO GPS" },
    { num: 14, phase: 4, title: "أطر المقاييس (AARRR و HEART) وتحليل التسرب", desc: "تحليل مسار القمع (Funnel Analysis) لمنصة Ajeek واستخراج نقاط الاحتكاك السلوكية.", deliverable: "خريطة مسار التحويل ونقاط التسرب لمنصة Ajeek" },
    { num: 15, phase: 4, title: "أسس التجريب الإحصائي للمنتجات (A/B Testing)", desc: "فهم حجم العينة، القوة الإحصائية، قيمة p-value، وفترة التشغيل السليمة من كتاب رون كوهافي.", deliverable: "وثيقة تصميم تجربة A/B Test كاملة" },
    { num: 16, phase: 4, title: "التحليلات السلوكية وتسليم المشروع الرابع", desc: "إعداد خطة تتبع أحداث المنتج (Event Tracking Plan) ومقارنة Mixpanel بـ GA4.", deliverable: "المشروع 4: شجرة مقاييس + خطة تتبع + تصميم A/B Test" },
    
    { num: 17, phase: 5, title: "النمو المعتمد على المنتج (PLG)", desc: "تصميم تجربة الخدمة الذاتية (Self-serve) وحلقات النمو التلقائية ولحظة الاقتناع (Aha! Moment).", deliverable: "مخطط مسار تفعيل PLG وتجربة مجانية فورية" },
    { num: 18, phase: 5, title: "استراتيجيات التسعير لبرمجيات SaaS", desc: "تسعير القيمة (Value Metric)، بناء باقات الاشتراك (Tiered Pricing)، واقتصاديات الوحدة.", deliverable: "هيكل تسعير ثلاثي المستويات لـ SEO GPS مع دراسة COGS" },
    { num: 19, phase: 5, title: "إدارة منتجات الذكاء الاصطناعي (AI PM)", desc: "تخصص Duke على Coursera، إدارة دقة النماذج، تكلفة التوكنز، ومحاذير الهلوسة.", deliverable: "وثيقة مواصفات ميزة AI مع قياس الجدوى وتكلفة الـ API" },
    { num: 20, phase: 5, title: "استراتيجية إطلاق السوق وتسليم المشروع الخامس", desc: "كتابة خطة Go-to-Market شاملة للتوزيع والمبيعات والتواصل مع أصحاب المصلحة.", deliverable: "المشروع 5: استراتيجية تسعير + خطة GTM + ميزة AI لـ SEO GPS" },
    
    { num: 21, phase: 6, title: "بناء وتنسيق معرض الأعمال (Portfolio) على Notion", desc: "صياغة دراسات الحالة بأسلوب سرد قصص المنتجات ودعمها بالأرقام والنتائج والشاشات.", deliverable: "معرض أعمال رقمي منشور على Notion يضم المشاريع الخمسة" },
    { num: 22, phase: 6, title: "إتقان مقابلات حس المنتج (CIRCLES Framework)", desc: "التدرب على تفكيك المشاكل وتصميم المنتجات لشركات التقنية وإجراء محاكاة صوتية مسجلة.", deliverable: "إجابات نموذجية مسجلة لسؤالين كلاسيكيين" },
    { num: 23, phase: 6, title: "إتقان المقابلات السلوكية والتنفيذية (STAR)", desc: "توثيق 5 مواقف قيادية واقعية من خبراتك في Digital Bond وإدارة الأزمات وحل النزاعات.", deliverable: "بنك إجابات STAR متكامل بالأرقام الملموسة" },
    { num: 24, phase: 6, title: "إطلاق حملة التوظيف ومحاكاة المقابلات الحية", desc: "توحيد السيرة الذاتية وملف LinkedIn وبدء التواصل المباشر مع 20 شركة مستهدفة.", deliverable: "المشروع الختامي: سيرة ذاتية وبورتفوليو معتمدان ومقابلات حية" }
  ],

  interviewQuestions: [
    {
      type: "Product Sense (CIRCLES)",
      question: "صمم ميزة ذكاء اصطناعي لمنتج SaaS يخدم المتخصصين التقنيين.",
      modelAnswer: `خطوات الحل باستخدام إطار CIRCLES:
1. فهم السياق (Comprehend): المنصة SaaS للتحليل التقني للمواقع، والهدف زيادة احتفاظ المستخدمين الأسبوعي.
2. تحديد المستخدمين (Customer): مسؤولو الـ SEO في الوكالات الذين يديرون مواقع ضخمة ولديهم فجوة تواصل مع المطورين.
3. الاحتياج (Needs): تحويل الخطأ التقني المكتشف تلقائياً إلى تذكرة برمجية جاهزة للتنفيذ بكود الإصلاح المقترح.
4. الحل (Solution): محرك توليد تذاكر Jira بالذكاء الاصطناعي مع كود الإصلاح (AI Ticket Generator).
5. المقايضات (Trade-offs): خطر الهلوسة البرمجية وتكلفة استهلاك النماذج، ويتم ضبط ذلك بقوالب Few-shot prompting وتطبيق Rate Limits.
6. المقاييس (Metrics): معدل نسخ التوصيات وتصديرها إلى Jira، ونسبة إصلاح المشاكل المكتشفة في غضون 7 أيام.`
    },
    {
      type: "Execution & Metric Drop",
      question: "معدل التحويل (Conversion Rate) في مسار تسجيل منصة دراسة انخفض بنسبة 20% هذا الأسبوع، كيف تتصرف؟",
      modelAnswer: `التشخيص المنهجي مستنداً لتجربة منصة Ajeek في السوق السعودي:
1. التحقق من سلامة البيانات: هل حدث خطأ في إرسال حدث التسجيل عبر GTM؟
2. عزل النطاق (Segmentation): هل الانخفاض قاصر على مستخدمي الموبايل (حيث أغلب زيارات السعودية)؟ هل يقتصر على مدن معينة أو متصفح محدد مثل Safari؟
3. فحص العوامل الداخلية والخارجية: هل أطلق المطورون تحديثاً أثر على خدمة الـ OTP عبر الرسائل النصية؟ هل تزامن ذلك مع عطلة رسمية غيرت سلوك البحث؟
4. الفحص السلوكي المباشر: فتح تسجيلات Microsoft Clarity وتصفية الجلسات على من واجهوا Rage Clicks في صفحة النموذج.
5. خطة العمل: إصلاح الخلل التقني مع المطورين وتحديث الإدارة بتقرير أثر المشكلة وموعد الإطلاق التجريبي.`
    },
    {
      type: "Behavioral (STAR)",
      question: "احكِ لي عن موقف اختلفت فيه بشدة مع قائد المطورين حول ميزة معينة، وكيف حسمت الأمر؟",
      modelAnswer: `تطبيق إطار STAR من واقع العمل في Digital Bond:
- الموقف (Situation): بطء شديد في تحميل صفحات منصة عميل خليجي قبل أسبوعين من موعد الإطلاق الرسمي بسبب كثرة السكربتات.
- المهمة (Task): إقناع قائد المطورين بتأجيل تحميل السكربتات غير الضرورية (Defer JS & Lazy Loading)، بينما رفض هو بحجة ضيق الوقت واحتمال تأخير الإطلاق.
- الإجراء (Action): أجريت اختباراً عملياً أثبت بالأرقام أن زمن التحميل 4.5 ثوانٍ مما سيفقدنا 40% من الزوار، ثم اجتمعت به ثنائياً واقترحت حلاً وسطاً: تطبيق التحسين فقط على أهم صفحتين هبوط حرجتين، وتأجيل باقي الموقع للسبرنت القادم.
- النتيجة (Result): وافق المطور ونفذنا التعديل، انخفض زمن التحميل إلى 1.8 ثانية، وحقق الإطلاق معدل تحويل تجاوز المستهدف بـ 15% دون أي تأخير، وتعززت الثقة المهنية بيننا.`
    }
  ]
};

// State Manager
let appState = {
  activeTab: "overview",
  completedWeeks: [],
  riceItems: [
    { name: "محرك التنبيهات الفورية عبر البريد", reach: 1200, impact: 3, confidence: 1.0, effort: 1.0 },
    { name: "تصدير التقارير بضغطة زر (CSV/PDF)", reach: 800, impact: 2, confidence: 0.8, effort: 0.5 },
    { name: "توليد توصيات الإصلاح بالـ AI", reach: 900, impact: 2, confidence: 0.5, effort: 1.0 },
    { name: "تكامل التذاكر المباشر مع Jira", reach: 400, impact: 2, confidence: 0.8, effort: 1.5 }
  ],
  theme: "light"
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadSavedState();
  renderSkills();
  renderResources(APP_DATA.resources);
  renderWeeks();
  renderInterviews();
  renderRiceTable();
  setupNavigation();
  setupFilters();
  setupRiceCalculator();
  updateDashboardStats();
});

// Theme Handling
function initTheme() {
  const savedTheme = localStorage.getItem("pm_theme") || "light";
  appState.theme = savedTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (toggleBtn) {
    toggleBtn.innerText = savedTheme === "dark" ? "الوضع الفاتح" : "الوضع الداكن";
  }
}

function toggleTheme() {
  appState.theme = appState.theme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", appState.theme);
  localStorage.setItem("pm_theme", appState.theme);
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (toggleBtn) {
    toggleBtn.innerText = appState.theme === "dark" ? "الوضع الفاتح" : "الوضع الداكن";
  }
}

// Navigation & Tab Switching
function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetView = link.getAttribute("data-view");
      switchTab(targetView);
    });
  });
}

function switchTab(viewId) {
  appState.activeTab = viewId;
  
  // Update nav links
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("data-view") === viewId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Update views
  document.querySelectorAll(".view-panel").forEach(panel => {
    panel.classList.remove("active");
  });
  const activePanel = document.getElementById("view-" + viewId);
  if (activePanel) {
    activePanel.classList.add("active");
  }

  // Update Topbar Title
  const titles = {
    overview: "نظرة عامة على لوحة المتابعة",
    skills: "خريطة المهارات وتحليل الفجوات (Gap Analysis)",
    roadmap: "خارطة طريق الـ 6 أشهر والمشاريع الشهرية",
    resources: "دليل المصادر المحققة والروابط الحية",
    schedule: "الجدول الأسبوعي التفصيلي (24 أسبوعاً)",
    tools: "دليل أدوات مدير المنتجات (Jira, Figma, Mixpanel...)",
    projects: "مشاريع معرض الأعمال الخمسة (Portfolio Projects)",
    interviews: "محاكي مقابلات إدارة المنتجات (CIRCLES & STAR)",
    rice: "حاسبة RICE التفاعلية لترتيب أولويات الميزات",
    templates: "مكتبة القوالب المهنية المعيارية (PRD, Stories, Roadmap)",
    mistakes: "أبرز 10 أخطاء شائعة عند التحول وكيفية تجنبها",
    career: "استراتيجية المسار المهني وتوحيد السيرة الذاتية"
  };
  const topTitle = document.getElementById("topbarTitle");
  if (topTitle && titles[viewId]) {
    topTitle.innerText = titles[viewId];
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// State Persistence (Local + Server)
function loadSavedState() {
  const localSaved = localStorage.getItem("pm_completed_weeks");
  if (localSaved) {
    try {
      appState.completedWeeks = JSON.parse(localSaved);
    } catch(e) {}
  }

  // Try fetching from server if running python backend
  fetch("/api/progress")
    .then(res => res.json())
    .then(data => {
      if (data && data.completed_weeks) {
        appState.completedWeeks = data.completed_weeks;
        if (data.rice_items) appState.riceItems = data.rice_items;
        updateDashboardStats();
        renderWeeks();
        renderRiceTable();
      }
    })
    .catch(() => {
      // Standalone/GitHub Pages mode: using localStorage
    });
}

function saveState() {
  localStorage.setItem("pm_completed_weeks", JSON.stringify(appState.completedWeeks));
  updateDashboardStats();

  // Sync to python backend if active
  fetch("/api/progress", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed_weeks: appState.completedWeeks,
      rice_items: appState.riceItems
    })
  }).catch(() => {
    // Silently continue if running statically
  });
}

// Render Skills Matrix
function renderSkills(filter = "all") {
  const container = document.getElementById("skillsContainer");
  if (!container) return;
  container.innerHTML = "";

  const filtered = APP_DATA.skills.filter(s => {
    if (filter === "all") return true;
    if (filter === "gap") return s.level === "gap";
    if (filter === "strong") return s.level === "strong";
    if (filter === "medium") return s.level === "medium";
    return true;
  });

  filtered.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
      <div class="skill-header">
        <div class="skill-title">${skill.title}</div>
        <span class="badge badge-${skill.level}">[${skill.levelText}]</span>
      </div>
      <div class="skill-evidence"><strong>الشواهد من خبرتك:</strong> ${skill.evidence}</div>
      <div class="skill-evidence" style="color: var(--danger);"><strong>الفجوة المحددة:</strong> ${skill.gap}</div>
      <div class="skill-plan"><strong>خطة التطوير:</strong> ${skill.plan}</div>
    `;
    container.appendChild(card);
  });
}

// Render Resources Table
function renderResources(list) {
  const tbody = document.getElementById("resourcesTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  list.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${r.name}</strong></td>
      <td><span class="badge badge-tag">${r.type}</span></td>
      <td>${r.level}</td>
      <td>${r.duration}</td>
      <td>${r.price}</td>
      <td><span class="badge badge-strong">شغال</span></td>
      <td><span class="badge ${r.priority.includes('قصوى') ? 'badge-gap' : 'badge-tag'}">${r.priority}</span></td>
      <td><a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-link-btn">فتح المصدر</a></td>
    `;
    tbody.appendChild(tr);
  });
}

function setupFilters() {
  const searchInput = document.getElementById("resourceSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = APP_DATA.resources.filter(r => 
        r.name.toLowerCase().includes(term) || r.type.toLowerCase().includes(term)
      );
      renderResources(filtered);
    });
  }

  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const cat = chip.getAttribute("data-category");
      if (cat === "all") {
        renderResources(APP_DATA.resources);
      } else {
        const filtered = APP_DATA.resources.filter(r => r.category === cat);
        renderResources(filtered);
      }
    });
  });

  const skillFilters = document.querySelectorAll(".skill-filter-btn");
  skillFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      skillFilters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSkills(btn.getAttribute("data-filter"));
    });
  });
}

// Render Weeks Schedule
function renderWeeks() {
  const container = document.getElementById("weeksContainer");
  if (!container) return;
  container.innerHTML = "";

  APP_DATA.weeks.forEach(w => {
    const isDone = appState.completedWeeks.includes(w.num);
    const card = document.createElement("div");
    card.className = `week-card ${isDone ? 'completed' : ''}`;
    card.innerHTML = `
      <div class="week-card-header">
        <div class="week-toggle">
          <input type="checkbox" class="week-checkbox" id="week-check-${w.num}" ${isDone ? 'checked' : ''} onchange="toggleWeek(${w.num})">
          <span class="week-title">الأسبوع ${w.num}: ${w.title}</span>
        </div>
        <span class="badge badge-tag">المرحلة ${w.phase}</span>
      </div>
      <div class="week-details">
        <div>
          <div class="week-section-title">محور الدراسة والتركيز:</div>
          <div>${w.desc}</div>
        </div>
        <div>
          <div class="week-section-title">المخرج والتطبيق العملي:</div>
          <div style="color: var(--primary); font-weight: 600;">${w.deliverable}</div>
        </div>
        <div>
          <div class="week-section-title">الحالة:</div>
          <div id="week-status-${w.num}">${isDone ? '<span class="badge badge-strong">[مكتمل]</span>' : '<span class="badge badge-medium">[قيد التنفيذ]</span>'}</div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleWeek(weekNum) {
  const idx = appState.completedWeeks.indexOf(weekNum);
  if (idx > -1) {
    appState.completedWeeks.splice(idx, 1);
  } else {
    appState.completedWeeks.push(weekNum);
  }
  saveState();
  renderWeeks();
  showToast("تم تحديث حالة الأسبوع " + weekNum);
}

// Render Interviews Simulator
function renderInterviews() {
  const container = document.getElementById("interviewContainer");
  if (!container) return;
  container.innerHTML = "";

  APP_DATA.interviewQuestions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "qa-card";
    card.innerHTML = `
      <div class="qa-question-box" onclick="toggleQA(${idx})">
        <div>
          <span class="badge badge-tag" style="margin-left: 8px;">${q.type}</span>
          <strong>${q.question}</strong>
        </div>
        <span id="qa-arrow-${idx}" style="font-size: 12px; color: var(--primary); font-weight: 700;">عرض الإجابة النموذجية</span>
      </div>
      <div class="qa-answer-box" id="qa-ans-${idx}">
        <pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${q.modelAnswer}</pre>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleQA(idx) {
  const ansBox = document.getElementById("qa-ans-" + idx);
  const arrow = document.getElementById("qa-arrow-" + idx);
  if (!ansBox) return;
  if (ansBox.style.display === "block") {
    ansBox.style.display = "none";
    arrow.innerText = "عرض الإجابة النموذجية";
  } else {
    ansBox.style.display = "block";
    arrow.innerText = "إخفاء الإجابة";
  }
}

// RICE Calculator
function setupRiceCalculator() {
  const reach = document.getElementById("riceReach");
  const impact = document.getElementById("riceImpact");
  const confidence = document.getElementById("riceConfidence");
  const effort = document.getElementById("riceEffort");

  const calc = () => {
    const r = parseFloat(reach.value) || 0;
    const i = parseFloat(impact.value) || 0;
    const c = parseFloat(confidence.value) || 0;
    const e = parseFloat(effort.value) || 1;

    document.getElementById("valReach").innerText = r;
    document.getElementById("valImpact").innerText = i;
    document.getElementById("valConfidence").innerText = (c * 100) + "%";
    document.getElementById("valEffort").innerText = e + " شهر مهندس";

    const score = Math.round((r * i * c) / (e > 0 ? e : 0.1));
    document.getElementById("riceScoreDisplay").innerText = score;
  };

  [reach, impact, confidence, effort].forEach(el => {
    if (el) el.addEventListener("input", calc);
  });
  calc();
}

function addRiceFeature() {
  const name = document.getElementById("newFeatureName").value.trim();
  if (!name) {
    alert("يرجى إدخال اسم الميزة أولاً.");
    return;
  }
  const r = parseFloat(document.getElementById("riceReach").value) || 0;
  const i = parseFloat(document.getElementById("riceImpact").value) || 0;
  const c = parseFloat(document.getElementById("riceConfidence").value) || 0;
  const e = parseFloat(document.getElementById("riceEffort").value) || 1;
  const score = Math.round((r * i * c) / (e > 0 ? e : 0.1));

  appState.riceItems.push({ name, reach: r, impact: i, confidence: c, effort: e, score });
  appState.riceItems.sort((a, b) => b.score - a.score);
  saveState();
  renderRiceTable();
  document.getElementById("newFeatureName").value = "";
  showToast("تمت إضافة الميزة وترتيب الأولويات بنجاح");
}

function renderRiceTable() {
  const tbody = document.getElementById("riceTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  appState.riceItems.forEach((item, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><strong>${item.name}</strong></td>
      <td>${item.reach}</td>
      <td>${item.impact}</td>
      <td>${(item.confidence * 100)}%</td>
      <td>${item.effort} شهر</td>
      <td style="font-weight: 800; color: var(--primary);">${item.score}</td>
      <td><span class="badge ${idx === 0 ? 'badge-gap' : 'badge-tag'}">${idx === 0 ? 'الأولوية 1 (فوري)' : 'أولوية ' + (idx + 1)}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// Template Copying
function copyTemplate(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  navigator.clipboard.writeText(el.innerText).then(() => {
    showToast("تم نسخ القالب إلى الحافظة بنجاح");
  });
}

// Update Top Stats
function updateDashboardStats() {
  const completed = appState.completedWeeks.length;
  const total = 24;
  const pct = Math.round((completed / total) * 100);

  const pDisplay = document.getElementById("statPercentage");
  if (pDisplay) pDisplay.innerText = pct + "%";

  const cDisplay = document.getElementById("statCompletedWeeks");
  if (cDisplay) cDisplay.innerText = completed + " من 24";

  const pBar = document.getElementById("dashboardProgressBar");
  if (pBar) pBar.style.width = pct + "%";

  // Calculate hours
  const hours = completed * 14;
  const hDisplay = document.getElementById("statHoursInvested");
  if (hDisplay) hDisplay.innerText = hours + " / 336 ساعة";
}

// Toast
function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
