// tema escolhido pelo usuario ao carregar
const rootHtml = document.documentElement;
const toggleTheme = document.getElementById("toggleTheme");
const tema = localStorage.getItem("tema");

// quando o usuario acessar pela primeira vez ou se ele nunca clicou para alterar o tema antes

if (tema && tema === "dark") {
  toggleTheme.classList.remove("bi-moon-stars");
  toggleTheme.classList.add("bi-sun");
  rootHtml.setAttribute("data-theme", tema);
} else {
  toggleTheme.classList.remove("bi-sun");
  toggleTheme.classList.add("bi-moon-stars");
  rootHtml.setAttribute("data-theme", tema);
}


// interação do botão de tema

toggleTheme.addEventListener("click", changeTheme);

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  if (currentTheme === "dark") {
    rootHtml.setAttribute("data-theme", "light");
    localStorage.setItem("tema", "light");
  } else {
    rootHtml.setAttribute("data-theme", "dark");
    localStorage.setItem("tema", "dark");
  }

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
