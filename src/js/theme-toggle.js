document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Перевірка збереженої теми
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  }

  // Зміна теми
  toggleThemeButton.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
  });
});
