const translations = {
  en: {
    greeting: "Hi There,<br/> I am Nahid Hasan<span> Badhan</span>",
    student: "STUDENT",
    connectMe: "Connect Me",
    aboutMe: "About <span>Me</span>",
    technicalSkills: "Technical Skills",
    myEducation: "My <span>Education</span>",
    contact: "Contact",
    email: "badhonhasanhasan@gmail.com",
    navbarHome: "Home",
    navbarAbout: "About",
    navbarSkills: "Skills",
    navbarEducation: "Education",
    navbarContact: "Contact",
    navbarExtra: "Extra",
    aboutMeTitle: "About <span>Me</span>",
    aboutMeContent: "I am Badhan",
    aboutMeTag: "Designer & Engineer",
    aboutMeDescription: "I have completed my graduation in computer science in UESTC. Currently I am pursuing Masters in Industrial Design Engineering in ZJU.CST gave me wings to fly",
    skillsTitle: "Technical Skills",
    educationTitle: "My <span>Education</span>",
    educationQuote: "Education is the backbone of the nation",
    contactTitle: "<span>Contact</span>"
  },
  "zh-CN": {
    greeting: "你好,<br/> 我是 Nahid Hasan<span> Badhan</span>",
    student: "学生",
    connectMe: "联系我",
    aboutMe: "关于 <span>我</span>",
    technicalSkills: "技术技能",
    myEducation: "我的 <span>教育</span>",
    contact: "联系",
    email: "badhonhasanhasan@gmail.com",
    navbarHome: "主页",
    navbarAbout: "关于",
    navbarSkills: "技能",
    navbarEducation: "教育",
    navbarContact: "联系",
    navbarExtra: "额外",
    aboutMeTitle: "关于 <span>我</span>",
    aboutMeContent: "我是 Badhan",
    aboutMeTag: "设计师 & 工程师",
    aboutMeDescription: "我已在电子科技大学完成计算机科学专业毕业，目前在浙江大学攻读工业设计工程硕士学位. CST 给了我飞翔的翅膀。",
    skillsTitle: "技术技能",
    educationTitle: "我的 <span>教育</span>",
    educationQuote: "教育是国家的支柱",
    contactTitle: "<span>联系</span>"
  },
  es: {
    greeting: "Hola,<br/> Soy Nahid Hasan<span> Badhan</span>",
    student: "ESTUDIANTE",
    connectMe: "Conéctame",
    aboutMe: "Sobre <span>Mí</span>",
    technicalSkills: "Habilidades Técnicas",
    myEducation: "Mi <span>Educación</span>",
    contact: "Contacto",
    email: "badhonhasanhasan@gmail.com",
    navbarHome: "Inicio",
    navbarAbout: "Acerca de",
    navbarSkills: "Habilidades",
    navbarEducation: "Educación",
    navbarContact: "Contacto",
    navbarExtra: "Extra",
    aboutMeTitle: "Sobre <span>Mí</span>",
    aboutMeContent: "Soy Badhan",
    aboutMeTag: "Diseñador & Ingeniero",
    aboutMeDescription: "Completé mi graduación en ciencias de la computación en UESTC. Actualmente estoy cursando una maestría en Ingeniería de Diseño Industrial en ZJU. CST me dio alas para volar.",
    skillsTitle: "Habilidades Técnicas",
    educationTitle: "Mi <span>Educación</span>",
    educationQuote: "La educación es la columna vertebral de la nación",
    contactTitle: "<span>Contacto</span>"
  }
  // Add more translations as needed
};

document.getElementById("language-dropdown").addEventListener("change", (e) => {
  const selectedLanguage = e.target.value;
  updateLanguage(selectedLanguage);
});

function updateLanguage(language) {
  document.querySelector(".home .content h2").innerHTML = translations[language].greeting;
  document.querySelector(".home .content p").innerHTML = translations[language].student;
  document.querySelector(".btn span").innerHTML = translations[language].connectMe;
  document.querySelector(".about .heading").innerHTML = translations[language].aboutMe;
  document.querySelector(".skills .heading").innerHTML = translations[language].technicalSkills;
  document.querySelector(".education .heading").innerHTML = translations[language].myEducation;
  document.querySelector(".contact .heading").innerHTML = translations[language].contact;
  document.querySelector(".email-link").innerHTML = translations[language].email;

  // Update navbar
  document.querySelector('a[data-translate="navbarHome"]').innerHTML = translations[language].navbarHome;
  document.querySelector('a[data-translate="navbarAbout"]').innerHTML = translations[language].navbarAbout;
  document.querySelector('a[data-translate="navbarSkills"]').innerHTML = translations[language].navbarSkills;
  document.querySelector('a[data-translate="navbarEducation"]').innerHTML = translations[language].navbarEducation;
  document.querySelector('a[data-translate="navbarContact"]').innerHTML = translations[language].navbarContact;
  document.querySelector('a[data-translate="navbarExtra"]').innerHTML = translations[language].navbarExtra;

  // Update about section
  document.querySelector('h2[data-translate="aboutMeTitle"]').innerHTML = translations[language].aboutMeTitle;
  document.querySelector('h3[data-translate="aboutMeContent"]').innerHTML = translations[language].aboutMeContent;
  document.querySelector('span[data-translate="aboutMeTag"]').innerHTML = translations[language].aboutMeTag;
  document.querySelector('p[data-translate="aboutMeDescription"]').innerHTML = translations[language].aboutMeDescription;

  // Update skills section
  document.querySelector('h2[data-translate="skillsTitle"]').innerHTML = translations[language].skillsTitle;

  // Update education section
  document.querySelector('h1[data-translate="educationTitle"]').innerHTML = translations[language].educationTitle;
  document.querySelector('p[data-translate="educationQuote"]').innerHTML = translations[language].educationQuote;

  // Update contact section
  document.querySelector('h2[data-translate="contactTitle"]').innerHTML = translations[language].contactTitle;
}
