document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const header = document.getElementById("main-header");

  // Toggle do menu mobile (hamburguer)
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Sticky header ao rolar a página
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("sticky");  // adiciona classe sticky
    } else {
      header.classList.remove("sticky");  // remove classe sticky
    }
  });

  // Fecha o menu mobile ao clicar em qualquer link da navegação
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
});
