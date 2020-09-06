import Swiper from "swiper";

let commentsSwiper = new Swiper(".commentsSlider", {
    slidesPerView: 2,
    spaceBetween: 15,
    direction: "horizontal",
    loop: true,
    adaptiveHeight: false,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 4,
        }
    }
});
