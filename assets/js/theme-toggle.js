document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("theme-select");

  const savedTheme = localStorage.getItem("theme") || "light";

  select.value = savedTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);
  jtd.setTheme(savedTheme);

  select.addEventListener("change", function () {
    const theme = select.value;

    // Update HTML attribute immediately
    document.documentElement.setAttribute("data-theme", theme);

    // Update Just the Docs internal theme
    jtd.setTheme(theme);

    // Persist choice
    localStorage.setItem("theme", theme);
  });
});