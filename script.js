document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-mobile");
  const header = document.getElementById("main-header");

  // Toggle do menu mobile
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuToggle.classList.toggle("open");
    menuToggle.innerHTML = menuToggle.classList.contains("open") ? "✕" : "☰";
  });

  // Sticky header ao rolar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  // Fecha o menu mobile ao clicar em um link
  document.querySelectorAll("#nav-mobile a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
      menuToggle.classList.remove("open");
      menuToggle.innerHTML = "☰";
    });
  });

  // Controle do submenu no mobile (Serviços)
  document.querySelectorAll(".submenu-toggle").forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = toggle.closest(".has-submenu");
      parent.classList.toggle("open");

      // Atualiza aria-expanded
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", !expanded);
    });
  });
});
