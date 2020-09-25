import Swiper from "swiper";

let valuesSwiper = new Swiper(".valuesSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: "horizontal",
    autoHeight: true,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
    },
    fadeEffect: {
        crossFade: true
    },

    pagination: {
        el: ".valuesPagination",
        type: "fraction",
        clickable: true,
    },
    navigation: {
        nextEl: ".values-swiper-button-next",
        prevEl: ".values-swiper-button-prev",
    }
});
