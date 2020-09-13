import Swiper from "swiper";

let imageSwiper = new Swiper(".imageSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: "horizontal",
    autoHeight: false,
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev",
    },
});

document.querySelector(".moreTextButton").addEventListener("click", function (event) {
    event.target.classList.toggle("opened");
    event.target.previousElementSibling.classList.toggle("opened");
    event.target.classList.contains("opened")  ? event.target.innerText = "Свернуть" : event.target.innerText = "Читать далее";
});

