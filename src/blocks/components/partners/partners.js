import Swiper from "swiper";

let partnersSwiper = new Swiper(".partnersSlider", {
    slidesPerView: 4,
    spaceBetween: 15,
    direction: "horizontal",
    loop: true,
    adaptiveHeight: false,
    autoplay: {
        delay: 5000,
    },
});
