// Tela de carregamento
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const main = document.querySelector("main");
  
    setTimeout(() => {
      loader.style.display = "none";
      main.style.display = "block";
    }, 2000);
  });
  
  // Carrossel automático
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }
  

  