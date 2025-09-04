const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursos: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 12
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        800:{
            slidesPerView: 2,
            spaceBetween: 16
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 32
        }
    }
});

new Accordion([".accordion-container", ".accordion-container2"], {})

if (window.SimpleAnime) {
    new SimpleAnime();
}

// variável com o texto que você quer copiar
const textoParaCopiar = "CELLSGRATIS";

// botão
const copyBtn = document.getElementById("cupom");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(textoParaCopiar)
    .then(() => {
      console.log("Texto copiado com sucesso!");

      // força o foco no botão
      copyBtn.focus();

      // feedback visual
      copyBtn.classList.add("copied");
      setTimeout(() => copyBtn.classList.remove("copied"), 1500);
    })
    .catch(err => {
      console.error("Erro ao copiar texto: ", err);
    });
});
