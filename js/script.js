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

// estado ativo dos links
const menuLinks = document.querySelectorAll(".nav_desktop a");
console.log(menuLinks);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    menuLinks.forEach((i) => i.classList.remove("active"));
    menuLink.classList.add("active");
  });
});

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
