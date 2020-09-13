import Swiper from "swiper";

let cardsSwiper = new Swiper(".smallCardsSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: "horizontal",
    autoHeight: true,
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: ".smallCards-swiper-button-next",
        prevEl: ".smallCards-swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        1024: {
            slidesPerView: 2,
        }
    }
});
