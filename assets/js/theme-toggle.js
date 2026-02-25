document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("theme-select");

  const savedTheme = localStorage.getItem("theme") || "light";
  select.value = savedTheme;
  jtd.setTheme(savedTheme);

  select.addEventListener("change", function () {
    const theme = select.value;
    jtd.setTheme(theme);
    localStorage.setItem("theme", theme);
  });
});