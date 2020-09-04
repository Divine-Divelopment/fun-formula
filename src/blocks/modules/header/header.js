document.getElementById("openModal").addEventListener("click", function () {
    document.getElementById("navigationMenu").classList.add("opened");
});

document.getElementById("closeMenu").addEventListener("click", function () {
    document.getElementById("navigationMenu").classList.remove("opened");
});

document.getElementById("toggleSearch").addEventListener("click", function () {
    document.getElementById("searchBlock").classList.toggle("opened");
});
