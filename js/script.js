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
        // when window width is >= 320px
        300: {
            slidesPerView: 1,
            spaceBetween: 12
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        // when window width is >= 640px
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

