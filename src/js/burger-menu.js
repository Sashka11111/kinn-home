document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".navbar__burger");
  const menu = document.querySelector(".navbar__menu");

  // Перемикаємо видимість меню
  burgerButton.addEventListener("click", () => {
    // Перемикаємо клас active на меню
    menu.classList.toggle("active");
    // Перемикаємо клас open на бургер-іконку
    burgerButton.classList.toggle("open");
  });
});
