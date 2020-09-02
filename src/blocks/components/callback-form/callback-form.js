(function () {
    var elem = document.body;
    var img = new Image();
    img.onload = function () {
        return false;
    };
    img.onerror = function () {
        elem.classList.add("noWebp");
    };
    img.src = "/img/callback1.webp";
})();
