const translations = {
  en: {
    SHOP: "SHOP",
    STYLE_QUIZ: "STYLE QUIZ",
    ABOUT_US: "ABOUT US",
    STORIES: "STORIES",
    ALL_COLLECTIONS: "ALL COLLECTIONS",
    ELEVATE_YOUR_EVERYDAY: "Elevate Your Everyday",
    SHOP_NOW: "Shop Now",
    INTRO_TEXT: "If your happy place is at the dinner table, we totally get that. That’s why we created products to help you find slow moments in a fast world.",
    SHOP_ALL: "Shop All",
    READ_STORIES: "Read Stories",
    MAPLE_BOARD_COLLECTION: "Maple Board Collection",
    MAPLE_BOARD_SHORT: "Maple Board - Short",
    MAPLE_BOARD_LONG: "Maple Board - Long",
    MAPLE_BOARD_WIDE: "Maple Board - Wide",
    PRICE: "$98.00",
    THE_ESSENTIALS: "The Essentials",
    ESSENTIALS_SUBTITLE: "We believe minimalism means more. More space, more time, more meaningful moments.",
    OUR_DESIGN_STORY: "Our Design Story",
    DESIGN_STORY_DESCRIPTION: "We believe in thoughtful, intentional living. So we promise not to clutter your cabinets with one-off pieces you’ll rarely use. Our collection only includes items you’ll reach for every day. Because mindful living should be simple, not stressful.",
    YOUR_TABLE_YOUR_TIME: "Your Table Your Time",
    YOUR_TABLE_DESCRIPTION: "Our modern lives keep us in constant motion. But what keeps us moving isn’t always what moves us. Our time at the table is our pause button. Meals can become moments and moments can become memories. So grab a plate, pull up a seat, and stay a while.",
    NEWSLETTER_TITLE: "Sign up to our newsletter",
    NEWSLETTER_TEXT: "Receive special offers and first look at new products.",
    SUBSCRIBE: "Subscribe",
    EMAIL_PLACEHOLDER: "Enter your email",
    KINN_MOMENTS: "#KinnMoments",
    CHANGE_THEME: "Change Theme",
    ENGLISH: "English",
    UKRAINIAN: "Українська",
    COPYRIGHT: "&copy; 2021 Kinn Home",
    CONTACT: "Need to get in touch? Just email us at ",
    EXPLORE: "Explore",
    SHOP: "Shop",
    STYLE_QUIZ: "Style Quiz",
    ABOUT_US: "About Us",
    STORIES: "Stories",
    HELP: "Help",
    FAQS: "FAQs + Shipping",
    CONTACT: "Contact",
    TERMS: "Terms",
    TRADE: "Trade",
  },
  uk: {
    SHOP: "МАГАЗИН",
    STYLE_QUIZ: "СТИЛЬНИЙ ТЕСТ",
    ABOUT_US: "ПРО НАС",
    STORIES: "ІСТОРІЇ",
    ALL_COLLECTIONS: "ВСІ КОЛЕКЦІЇ",
    ELEVATE_YOUR_EVERYDAY: "Підніміть свою буденність",
    SHOP_NOW: "Купити зараз",
    INTRO_TEXT: "Якщо ваш щасливий простір — це обідній стіл, ми вас розуміємо. Саме тому ми створили продукти, які допоможуть знайти повільні моменти у швидкому світі.",
    SHOP_ALL: "Переглянути все",
    READ_STORIES: "Читати історії",
    MAPLE_BOARD_COLLECTION: "Колекція кленових дощок",
    MAPLE_BOARD_SHORT: "Кленова дошка - коротка",
    MAPLE_BOARD_LONG: "Кленова дошка - довга",
    MAPLE_BOARD_WIDE: "Кленова дошка - широка",
    PRICE: "₴98.00",
    THE_ESSENTIALS: "Необхідне",
    ESSENTIALS_SUBTITLE: "Ми віримо, що мінімалізм означає більше. Більше простору, більше часу, більше змістовних моментів.",
    OUR_DESIGN_STORY: "Історія нашого дизайну",
    DESIGN_STORY_DESCRIPTION: "Ми віримо в осмислене, навмисне життя. Тому ми обіцяємо не заповнювати ваші шафи речами, які ви рідко використовуєте. У нашій колекції є лише ті предмети, які ви будете використовувати щодня.",
    YOUR_TABLE_YOUR_TIME: "Ваш стіл, ваш час",
    YOUR_TABLE_DESCRIPTION: "Наші сучасні життя змушують нас постійно рухатися. Але те, що нас рухає, не завжди нас надихає. Наш час за столом — це наша пауза.",
    NEWSLETTER_TITLE: "Підпишіться на нашу розсилку",
    NEWSLETTER_TEXT: "Отримуйте спеціальні пропозиції та перші погляди на нові продукти.",
    SUBSCRIBE: "Підписатися",
    EMAIL_PLACEHOLDER: "Введіть вашу електронну пошту",
    KINN_MOMENTS: "#МоментиKinn",
    CHANGE_THEME: "Змінити тему",
    ENGLISH: "Англійська",
    UKRAINIAN: "Українська",
    COPYRIGHT: "&copy; 2021 Kinn Home",
    CONTACT: "Потрібно зв'язатися? Напишіть нам на ",
    EXPLORE: "Досліджуйте",
    SHOP: "Магазин",
    STYLE_QUIZ: "Стильний тест",
    ABOUT_US: "Про нас",
    STORIES: "Історії",
    HELP: "Допомога",
    FAQS: "Питання та доставка",
    CONTACT: "Контакти",
    TERMS: "Умови",
    TRADE: "Співпраця",
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    const translation = translations[lang] && translations[lang][key];

    if (translation) {
      if (el.tagName === "INPUT" && el.type === "text" || el.type === "email") {
        el.placeholder = translation;
      } else {
        el.textContent = translation;
      }
    } else {
      console.warn(`No translation found for key "${key}" in language "${lang}"`);
    }
  });
}

document.querySelectorAll(".language-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    localStorage.setItem("selectedLanguage", lang);
    setLanguage(lang);
  });
});

const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
setLanguage(savedLanguage);
