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
    },
    navigation: {
        nextEl: ".values-swiper-button-next",
        prevEl: ".values-swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        1024: {
            autoHeight: false,
            pagination: {
                el: ".valuesPagination",
                type: "fraction",
            },
        }
    }
});
