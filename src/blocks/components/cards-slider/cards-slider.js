import Swiper from "swiper";

let mySwiper = new Swiper(".cardsSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: "horizontal",
    autoHeight: true,
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: ".cards-swiper-button-next",
        prevEl: ".cards-swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        1024: {
            slidesPerView: 2,
        }
    }
});
