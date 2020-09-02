import Swiper from "swiper";

let mainSwiper = new Swiper(".mainSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: "horizontal",
    effect: "fade",
    autoHeight: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    fadeEffect: {
        crossFade: true
    },

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    },
});
