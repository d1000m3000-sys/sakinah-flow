let currentPage = 'home';
let lang = 'en';

const translations = {
  en: {
    homeBtn: "Start Calm Session",
    explore: "Explore",
    sleep: "Sleep",
    profile: "Profile",
    upgrade: "Upgrade to Premium",
    monthly: "$11.99/month",
    yearly: "$59.99/year",
    trial: "Start 7 Days Free"
  },
  ar: {
    homeBtn: "ابدأ جلسة الآن",
    explore: "استكشاف",
    sleep: "النوم",
    profile: "الحساب",
    upgrade: "ترقية إلى بريميوم",
    monthly: "11.99$ شهري",
    yearly: "59.99$ سنوي",
    trial: "ابدأ 7 أيام مجانًا"
  }
};

function setDirection() {
  const html = document.getElementById('htmlRoot');
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

function toggleLang() {
  lang = lang === 'en' ? 'ar' : 'en';
  setDirection();
  render();
}

function navigate(page) {
  currentPage = page;
  render();
}

function render() {
  const t = translations[lang];
  const content = document.getElementById('content');

  if (currentPage === 'home') {
    content.innerHTML = `
      <div class="card">
        <button>${t.homeBtn}</button>
      </div>
    `;
  }

  if (currentPage === 'explore') {
    content.innerHTML = `<div class="card">${t.explore}</div>`;
  }

  if (currentPage === 'sleep') {
    content.innerHTML = `<div class="card">${t.sleep}</div>`;
  }

  if (currentPage === 'profile') {
    content.innerHTML = `
      <div class="paywall">
        <h2>${t.upgrade}</h2>
        <p>${t.monthly}</p>
        <p>${t.yearly}</p>
        <button>${t.trial}</button>
      </div>
    `;
  }
}

render();
setDirection();
