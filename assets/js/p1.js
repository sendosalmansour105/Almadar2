// p.js
(() => {
  'use strict';

  // عناصر الصفحة
  const projects = document.getElementById('title-projects');
  const all = document.getElementById('title-all');
  const kitchen = document.getElementById('title-kitchen');
  const bedroom = document.getElementById('title-bedroom');
  const bathroom = document.getElementById('title-bathroom');
  const halls = document.getElementById('title-halls');
    const restaurant = document.getElementById('title-restaurant');
  const woman = document.getElementById('title-woman');
  const man = document.getElementById('title-man');


  const sport = document.getElementById('title-sport');
  const cabinet = document.getElementById('title-cabinets');



  // الترجمات
  const translations = {
    en: {
      projects: "Our Projects",
      all:"Show All",
      kitchen: "Kitchens",
      bedroom: "Bedrooms",
      bathroom: "Bathrooms",
      halls: "Halls",
        restaurant: "Restaurants",
      woman: "Women Majlis",
      man: "men Majlis",
      sport: "Sport Clubs",
      cabinet: "Cabinets",
     
    
    },
    ar: {
      projects: "مشاريعنا",
      all:"الكل",
      kitchen: "المطابخ",
      bedroom: "غرف النوم",
      bathroom: "الحمامات",
      halls: "الصالات",
       restaurant: "مطاعم ",
      woman: " مجالس حريم ",
       man: " مجالس رجال ",
      sport: "نوادي رياضية",
      cabinet: "ملابس",

    
    }
  };

  // دالة تطبيق اللغة
  function applyPLanguage() {
    const lang = localStorage.getItem('lang') || 'ar';
    const T = translations[lang];

    if (projects) projects.textContent = T.projects;
    if (all) all.textContent = T.all;
    if (kitchen) kitchen.textContent = T.kitchen;
    if (bedroom) bedroom.textContent = T.bedroom;
    if (bathroom) bathroom.textContent = T.bathroom;
    if (halls) halls.textContent = T.halls;
    if (restaurant) restaurant.textContent = T.restaurant;
    if (woman) woman.textContent = T.woman;
    if (man) man.textContent = T.man;
    if (sport) sport.textContent = T.sport;
    if (cabinet) cabinet.textContent = T.cabinet;
 

    // اتجاه الصفحة
    document.documentElement.lang = lang;
    document.body.dir = (lang === "ar") ? "rtl" : "ltr";
    if (lang === 'ar') {
    body.classList.add('rtl', 'arabicFont');
    body.dir = 'rtl';
  } else {
    body.classList.remove('rtl', 'arabicFont');
    body.dir = 'ltr';
  }
  }

  // نفّذ عند تحميل الصفحة
  document.addEventListener('DOMContentLoaded', applyPLanguage);
})();


// show items .................................................................................


// const observe = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show-items')
//     }
//     else {
//       entry.target.classList.remove('show-items')
//     }
//   })
// })

// const scrollscale = document.querySelectorAll('.scroll-scale')
// scrollscale.forEach((el) => observe.observe(el))

// filter ----------------------------------


const filterButton = document.querySelectorAll(".filter_button button")
const filterableCard = document.querySelectorAll(".filterable_cards .card")

const filterCard = e => {

    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    

    filterableCard.forEach(card =>{
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
             card.classList.remove("hide");
        }
    } )
}

filterButton.forEach(button => button.addEventListener("click" ,  filterCard))

//p1 language ---------------------------------------



// // استدعاء الترجمة من script.js (تأكد أن ملف script.js محمّل قبل هذا الملف)
// let currentLang = localStorage.getItem('lang') || 'en';

// // دالة لتطبيق اللغة على صفحة p.html
// function applyPLanguage() {
//   if (typeof translations === "undefined") {
//     console.error("translations object not found! تأكد أنك مستدعي script.js قبل p.js");
//     return;
//   }

//   let lang = currentLang;

//   // مثال: لو عندك عناصر بصفحة p.html
//   const pTitle = document.getElementById('title-projects');
 

//   if (pTitle && pContent) {
//     if (lang === "ar") {
//       pTitle.textContent = "هذه صفحة P";
     
//       document.body.classList.add("rtl");
//       document.documentElement.lang = "ar";
//     } else {
//       pTitle.textContent = "This is P Page";
    
//       document.body.classList.remove("rtl");
//       document.documentElement.lang = "en";
//     }
//   }
// }

// // نفذ عند تحميل الصفحة
// window.addEventListener("DOMContentLoaded", applyPLanguage);















