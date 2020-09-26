import MicroModal from "micromodal";

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

let forms = document.querySelectorAll(".callBackForm");

for(var i = 0; i < forms.length; i++) {
    let thisForm = forms[i];
    thisForm.addEventListener("submit", (event) => {
        event.preventDefault();
        MicroModal.show("thanksModal-1", {
            debugMode: false,
            disableScroll: true,
            awaitCloseAnimation: true
        });
        setTimeout(()=>{
            MicroModal.close("thanksModal-1");
        },5000);
    });
}
