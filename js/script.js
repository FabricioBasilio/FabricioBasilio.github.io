// interatividade do acordeao
const acordeaoHeaders = document.querySelectorAll(".acordeao__item__header");

acordeaoHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const acordeaoItem = header.parentElement;
    const isAcordeaoItemActive = acordeaoItem.classList.contains("active");

    isAcordeaoItemActive
      ? acordeaoItem.classList.remove("active")
      : acordeaoItem.classList.add("active");
  });
});
