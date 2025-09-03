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

