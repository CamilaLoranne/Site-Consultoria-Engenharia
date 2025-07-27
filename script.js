document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");

  // Sticky header ao rolar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  // SLIDER automático para "Nossos Serviços" (mobile only)
  const servicos = document.querySelectorAll('.card-servico');
  let current = 0;
  let sliderInterval;

  // Função para verificar se é mobile
  function isMobile() {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  // Função para exibir o serviço atual no slider
  function showServico(index) {
    servicos.forEach((card, i) => {
      card.style.display = i === index ? 'block' : 'none';
    });
  }

  // Inicia o slider
  function startSlider() {
    if (servicos.length === 0) return;
    clearInterval(sliderInterval); // Limpa o intervalo se já estiver rodando
    showServico(current);
    sliderInterval = setInterval(() => {
      current = (current + 1) % servicos.length;
      showServico(current);
    }, 2000);
  }

  // Para o slider no desktop (mostra todos os cards)
  function stopSlider() {
    clearInterval(sliderInterval);
    servicos.forEach(card => card.style.display = 'inline-block');
  }

  // Gerencia a mudança de comportamento dependendo do tamanho da tela
  function handleResize() {
    if (isMobile()) {
      startSlider();
    } else {
      stopSlider();
    }
  }

  // Inicializa o slider no carregamento e ao redimensionar a janela
  handleResize();
  window.addEventListener('resize', () => {
    clearInterval(sliderInterval); // Limpa o intervalo ao redimensionar
    handleResize();
  });
});
