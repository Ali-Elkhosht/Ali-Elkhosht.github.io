// =========================
// script.js  (i18n + RTL + Scroll Reveal)
// =========================
// Translations (مختصر: نفس المحتوى السابق)
const translations = {
  en:{
    pageTitle:"Ali Ashraf Elkhosht - Professional Profile",
    profileName:"Ali Ashraf Elkhosht",
    profileSubtitle:"IT Manager | Odoo Functional | Web Developer",
    switchLangButton:"العربية",

    phoneLabel:"Phone:", emailLabel:"Email:", linkedinLabel:"LinkedIn:",
    summaryTitle:"Summary",
    summaryText:"IT Manager with 5+ years of experience leading cross-functional teams and delivering end-to-end Odoo implementations and digital transformation. Strong in business analysis (As-Is/To-Be, Gap Analysis, requirements), UAT, training, and data migration. Professional in Odoo Studio and building websites on Odoo. Experienced with email & domain infrastructure across Microsoft 365, Google Workspace, Zoho, GoDaddy/cPanel/Cloudflare—including DNS (MX, SPF, DKIM, DMARC) and SMTP/IMAP—plus website and hosting configurations. Committed to robust, reliable solutions aligned with business goals and continuous improvement.",

    experienceTitle:"Experience",
    exp1Title:"IT Manager", exp1Company:"Bin Shujaa Co.", exp1Location:"Riyadh, Saudi Arabia",
    exp1DurationLabel:"Duration:", exp1Duration:"October 2024 – Present",
    exp1SkillsLabel:"Key Skills Mentioned:",
    exp1Skills:"Project Manager; Team Leading; Business Cycle Analysis; Requirement Gathering; UAT; Training; Data Migration; Digital Transformation (lead); Odoo Supervision; Odoo Functional; Built the company website; configured & manage corporate email/domain infrastructure.",
    exp2Title:"Senior Information Technology Engineer", exp2Company:"Yama Engineering Systems", exp2Location:"Cairo, Egypt",
    exp2DurationLabel:"Duration:", exp2Duration:"January 2022 – October 2024",
    exp2SkillsLabel:"Key Skills Mentioned:",
    exp2Skills:"Project Manager; Team Leading; Business Cycle Analysis; Requirement Gathering; UAT; Training; Data Migration; Digital Transformation; Odoo Supervision; Odoo Functional; Built the company website; configured & managed corporate email/domain; Linux System Administration; Object-Oriented Programming (OOP).",
    exp3Title:"IT Specialist", exp3Company:"Safeco Group", exp3Location:"Cairo, Egypt",
    exp3DurationLabel:"Duration:", exp3Duration:"May 2021 – January 2022 ",
    exp3SkillsLabel:"Key Skills Mentioned:", exp3Skills:"IT Management, Technology Services.",
    exp4Title:"Full Stack Developer", exp4Company:"Information Technology Institute (ITI)", exp4Location:"Beni Suef, Egypt",
    exp4DurationLabel:"Duration:", exp4Duration:"September 2020 – January 2021 ",
    exp4SkillsLabel:"Key Skills Mentioned:", exp4Skills:"Full-Stack Development, Dotnet.",
    educationTitle:"Education",
    edu1School:"Information Technology Institute (ITI)",
    edu1DegreeLabel:"Degree:", edu1Degree:"Bachelor's degree, Computer Software Engineering",
    edu1DurationLabel:"Duration:", edu1Duration:"September 2020 – January 2021",
    edu1GradeLabel:"Grade:", edu1Grade:"Excellent",
    edu1FocusLabel:"Focus:", edu1Focus:".Net Full Stack web development",
    edu1TrackLabel:"Track:", edu1Track:".NET Full Stack Web Development",
    edu1CoveredLabel:"Covered:",
    edu1Covered:"HTML, CSS, JavaScript, Responsive Web Design, OOP using C#, Visual C# .NET (Framework 4.5), LINQ & Entity Framework, ADO.NET, MS SQL Server Programming, Angular Fundamentals, ASP.NET MVC Core, Web API, Freelancing, Soft Skills (communication, presentation, interviewing).",
    edu1SkillsLabel:"Key Skills Mentioned:", edu1Skills:"AngularJS, C#.",
    edu2School:"El Shorouk Academy", edu2Location:"Egypt",
    edu2DegreeLabel:"Degree:", edu2Degree:"Bachelor's degree, Computer Science",
    edu2DurationLabel:"Duration:", edu2Duration:"September 2014 – June 2018 ",
    edu2CourseworkLabel:"Core Coursework:",
    edu2Coursework:"OOP, Data Structures, System Design, Systems Analysis, Operating Systems, Computer Graphics, Computer Networks, C, C++, C#, Python, JavaScript, and additional Computer Science modules.",
    skillsTitle:"Skills",
    skillsIntro:"Ali possesses a diverse skill set spanning IT management, business analysis, Odoo functional implementation, email/domain infrastructure, and software technologies. Key areas include:",
    skillsCatOdoo:"Odoo Functional & ERP:",
    skillsListOdoo:"Odoo Implementation, Requirement Gathering, Gap Analysis, Business Process Mapping (BPMN), Configuration & Parameterization, Data Migration, UAT, End-User Training, Change Management, Professional in Odoo Studio and building websites using Odoo, Reporting & Dashboards, Multi-company/Multi-currency. Modules: CRM, Sales, Purchase, Inventory, Accounting, Invoicing, HR, Projects, Manufacturing (basic), POS.",
    skillsCatMail:"Email & Domain Infrastructure:",
    skillsListMail:"DNS & Mail Records (A/CNAME/MX/SPF/DKIM/DMARC), SMTP/IMAP/POP, Email routing/relays, Mail flow troubleshooting, Migrations & cutover. Providers: Microsoft 365 (Office 365), Zoho Mail, GoDaddy, Google Workspace, cPanel, Cloudflare.",
    skillsCatWebInfra:"Website & Hosting Configurations:", skillsListWebInfra:"",
    skillsCatBA:"Business Analysis & Delivery:", skillsListBA:"Stakeholder Management, As-Is/To-Be Analysis, Documentation (BRD/SRS), Agile/Scrum, Jira, Risk & Issue Tracking, KPI Design.",
    skillsCatLeadership:"Leadership & Teamwork:", skillsListLeadership:"Team Leading, Task Assignment, Cross-functional Collaboration, Vendor Coordination, Training & Coaching.",
    skillsCatIT:"IT Management & Operations:", skillsListIT:"IT Management, Technology Services, Project Management, Linux System Administration.",
    skillsCatMS:"Microsoft & Web Technologies:", skillsListMS:".NET (ASP.NET, MVC, Core), C#, REST APIs, ASP.NET Web API, AngularJS, Postman API, WordPress.",
    skillsCatOS:"Operating Systems:", skillsListOS:"Microsoft Windows, MacOS, Ubuntu."
  },
  ar:{
    pageTitle:"علي أشرف الخشت - الملف الشخصي المهني",
    profileName:"علي أشرف الخشت",
    profileSubtitle:"مدير تقنية المعلومات | Odoo Functional | مطوّر ويب",
    switchLangButton:"English",
    phoneLabel:"الهاتف:", emailLabel:"البريد الإلكتروني:", linkedinLabel:"لينكدإن:",
    summaryTitle:"الملخص",
    summaryText:"مدير تقنية معلومات بخبرة تفوق 5 سنوات في قيادة الفرق وتنفيذ أودو من البداية للنهاية والتحول الرقمي. متمكن في تحليل الأعمال (As-Is/To-Be، Gap Analysis، جمع المتطلبات)، ‏UAT، التدريب، وترحيل البيانات. محترف في Odoo Studio وبناء مواقع على Odoo. خبرة في بنية الإيميل والدومين عبر Microsoft 365 وGoogle Workspace وZoho وGoDaddy/cPanel/Cloudflare — بما يشمل DNS وSMTP/IMAP — بالإضافة إلى تهيئة المواقع والاستضافة. ملتزم بحلول قوية وموثوقة متسقة مع أهداف الأعمال والتحسين المستمر.",
    experienceTitle:"الخبرة",
    exp1Title:"مدير تقنية المعلومات", exp1Company:"شركة بن شجاع", exp1Location:"الرياض، السعودية",
    exp1DurationLabel:"المدة:", exp1Duration:"أكتوبر 2024 – الآن",
    exp1SkillsLabel:"المهارات المذكورة:",
    exp1Skills:"إدارة المشاريع؛ قيادة الفريق؛ تحليل دورة العمل؛ جمع المتطلبات؛ ‏UAT؛ التدريب؛ ترحيل البيانات؛ التحول الرقمي (بقيادتي)؛ الإشراف على تنفيذ  Odoo؛ ‏Odoo Functional؛ إنشاء موقع الشركة؛ إعداد وإدارة بريد الشركة والدومين.",
    exp2Title:"مهندس تقنية معلومات أول", exp2Company:"ياما للأنظمة الهندسية", exp2Location:"القاهرة، مصر",
    exp2DurationLabel:"المدة:", exp2Duration:"يناير 2022 – أكتوبر 2024",
    exp2SkillsLabel:"المهارات المذكورة:",
    exp2Skills:"إدارة المشاريع؛ قيادة الفريق؛ تحليل دورة العمل؛ جمع المتطلبات؛ ‏UAT؛ التدريب؛ ترحيل البيانات؛ التحول الرقمي؛ الإشراف على Odoo؛ ‏Odoo Functional؛ إنشاء موقع الشركة؛ إعداد وإدارة بريد الشركة والدومين؛ إدارة نظام لينكس؛ البرمجة الشيئية (OOP).",
    exp3Title:"أخصائي تقنية معلومات", exp3Company:"سيفكو ايجيبت", exp3Location:"القاهرة، مصر",
    exp3DurationLabel:"المدة:", exp3Duration:"مايو 2021 – يناير 2022",
    exp3SkillsLabel:"المهارات المذكورة:", exp3Skills:"إدارة تقنية المعلومات، خدمات التقنية.",
    exp4Title:"مطوّر متكامل", exp4Company:"معهد تكنولوجيا المعلومات (ITI)", exp4Location:"عن بُعد - بني سويف، مصر",
    exp4DurationLabel:"المدة:", exp4Duration:"سبتمبر 2020 – يناير 2021 ",
    exp4SkillsLabel:"المهارات المذكورة:", exp4Skills:"تطوير متكامل، .NET.",
    educationTitle:"التعليم",
    edu1School:"معهد تكنولوجيا المعلومات (ITI)",
    edu1DegreeLabel:"الدرجة:", edu1Degree:"بكالوريوس هندسة برمجيات الحاسوب",
    edu1DurationLabel:"المدة:", edu1Duration:"سبتمبر 2020 – يناير 2021",
    edu1GradeLabel:"التقدير:", edu1Grade:"ممتاز",
    edu1FocusLabel:"التركيز:", edu1Focus:"‏.Net Full Stack web development",
    edu1TrackLabel:"المسار:", edu1Track:".NET Full Stack Web Development",
    edu1CoveredLabel:"المحتوى الدراسي:",
    edu1Covered:"HTML، CSS، JavaScript، تصميم مستجيب، OOP بلغة ‎C#‎، ‏Visual C# .NET (Framework 4.5)‏، LINQ وEntity Framework، ‏ADO.NET، برمجة ‏MS SQL Server‏، أساسيات Angular، ‏ASP.NET MVC Core، ‏Web API، ‏Freelancing، والمهارات الناعمة (التواصل، العرض، المقابلات).",
    edu1SkillsLabel:"المهارات المذكورة:", edu1Skills:"AngularJS، ‎C#‎.",
    edu2School:"أكاديمية الشروق", edu2Location:"مصر",
    edu2DegreeLabel:"الدرجة:", edu2Degree:"بكالوريوس علوم الحاسوب",
    edu2DurationLabel:"المدة:", edu2Duration:"سبتمبر 2014 – يونيو 2018",
    edu2CourseworkLabel:"المقررات الأساسية:",
    edu2Coursework:"‏OOP، هياكل البيانات، تصميم الأنظمة، تحليل النظم، أنظمة التشغيل، الرسوميات، الشبكات، ‎C‎، ‎C++‎، ‎C#‎، Python، JavaScript، وغيرها من مقررات علوم الحاسب.",
    skillsTitle:"المهارات",
    skillsIntro:"مجموعة مهارات تشمل إدارة التقنية، تحليل الأعمال، تنفيذ أودو وظيفيًا، بنية الإيميل/الدومين، وتقنيات البرمجيات. من أبرزها:",
    skillsCatOdoo:"تنفيذ Odoo:", skillsListOdoo:"تنفيذ Odoo، جمع المتطلبات، تحليل الفجوة، BPMN، التكوين، ترحيل البيانات، UAT، تدريب المستخدمين، إدارة التغيير، محترف في Odoo Studio وبناء مواقع باستخدام Odoo…",
    skillsCatMail:"بنية الإيميل والدومين:", skillsListMail:"سجلات DNS والبريد … المزودون: Microsoft 365، Zoho Mail، GoDaddy، Google Workspace، cPanel، Cloudflare.",
    skillsCatWebInfra:"تهيئة المواقع والاستضافة", skillsListWebInfra:"",
    skillsCatBA:"تحليل الأعمال والتسليم:", skillsListBA:"إدارة أصحاب المصلحة، تحليل الوضع الحالي والمستقبلي (As-Is/To-Be)، التوثيق (BRD/SRS)، أجايل/سكرم، Jira، تعقّب المخاطر والمشكلات، تصميم مؤشرات الأداء الرئيسية (KPI).",
    skillsCatLeadership:"القيادة والعمل الجماعي:", skillsListLeadership:"قيادة الفرق، توزيع المهام، التعاون بين الفرق، تنسيق المورّدين، التدريب والإرشاد (Coaching).",
    skillsCatIT:"إدارة وعمليات تقنية المعلومات:", skillsListIT:"إدارة تقنية المعلومات، خدمات التكنولوجيا، إدارة المشاريع، إدارة أنظمة لينكس.",
    skillsCatMS:"تقنيات مايكروسوفت والويب:", skillsListMS:".NET (ASP.NET، MVC، Core)، C#، REST APIs، ASP.NET Web API، AngularJS، Postman API، WordPress.",
    skillsCatOS:"أنظمة التشغيل:", skillsListOS:"Windows، ‏MacOS، ‏Ubuntu."
  }
};

document.addEventListener("DOMContentLoaded", ()=>{
  const btn=document.getElementById("lang-toggle");
  let lang=localStorage.getItem("preferredLang")||"en";

  function setLanguage(to){
    lang=to;
    localStorage.setItem("preferredLang",to);
    document.documentElement.lang=to;
    document.documentElement.dir = to==="ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-translate]").forEach(el=>{
      const k=el.getAttribute("data-translate");
      const v=translations[to][k];
      if(v!==undefined) el.textContent=v;
    });
    btn.textContent=translations[to].switchLangButton;
    document.title=translations[to].pageTitle;
  }
  btn.addEventListener("click",()=>setLanguage(lang==="en"?"ar":"en"));
  setLanguage(lang);

  // Scroll reveal: يضيف class .in عند ظهور العناصر
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },{threshold:.15, rootMargin:"40px"});
  document.querySelectorAll('.reveal, .card, .skill-card').forEach(el=>io.observe(el));

  // Year
  const y=document.getElementById('year');
  if(y) y.textContent=new Date().getFullYear();
});
