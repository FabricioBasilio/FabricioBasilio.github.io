const rootHtml = document.documentElement;
const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", changeTheme);

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  if (currentTheme === "dark") rootHtml.setAttribute("data-theme", "light");
  else rootHtml.setAttribute("data-theme", "dark");
    
  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

// interatividade do acordeao
const acordeaoHeaders = document.querySelectorAll(".acordeao__item__header");

acordeaoHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const acordeaoItem = header.parentElement;
    const isAcordeaoItemActive = acordeaoItem.classList.contains("active");

    isAcordeaoItemActive
      ? acordeaoItem.classList.remove("active")
      : acordeaoItem.classList.add("active");
  });
});
