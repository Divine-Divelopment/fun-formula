import MicroModal from "micromodal";

document.querySelector(".openModal").addEventListener("click", function (event) {
    event.preventDefault();
    MicroModal.show("modal-1", {
        debugMode: false,
        disableScroll: true,
        awaitCloseAnimation: true
    });
});
