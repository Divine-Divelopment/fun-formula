if (document.querySelector(".moreTextButton")) {
    document.querySelector(".moreTextButton").addEventListener("click", function (event) {
        event.target.classList.toggle("opened");
        event.target.previousElementSibling.classList.toggle("opened");
        event.target.classList.contains("opened") ? event.target.innerText = "Свернуть" : event.target.innerText = "Читать далее";
    });
}
