import MicroModal from "micromodal";

document.querySelector(".js-modal-trigger").addEventListener("click", function (event) {
    event.preventDefault();
    MicroModal.show("modal-2", {
        debugMode: true,
        disableScroll: true,
        onShow: function (modal) { document.querySelector(".js-body").classList.add(modal.id); },
        onClose: function (modal) { document.querySelector(".js-body").classList.remove(modal.id); },
        closeTrigger: "data-custom-close",
        awaitCloseAnimation: true
    });
});
