document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("theme-select");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  select.value = savedTheme;
  jtd.setTheme(savedTheme);

  // On change
  select.addEventListener("change", function () {
    const theme = select.value;
    jtd.setTheme(theme);
    localStorage.setItem("theme", theme);
  });
});