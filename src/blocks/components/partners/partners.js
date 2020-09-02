import Swiper from "swiper";

let partnersSwiper = new Swiper(".partnersSlider", {
    slidesPerView: 4,
    spaceBetween: 15,
    direction: "horizontal",
    loop: false,
    adaptiveHeight: false,

    // Navigation arrows
    navigation: {
        nextEl: ".partners-swiper-button-next",
        prevEl: ".partners-swiper-button-prev",
    },
});
