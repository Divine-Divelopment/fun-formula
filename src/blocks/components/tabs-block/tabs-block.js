class TabList {
    constructor(buttonsContainer, tabs) {
        this.buttonsContainer = buttonsContainer;
        this.tabs = tabs;

        this.buttonsContainer.addEventListener("click", event => {
            const index = event.target.closest(".button").dataset.value;
            this.openTab(index);
        });
    }

    openTab(index) {
        this.tabs.querySelector(".animate").style.display = "none";
        this.tabs.querySelector(".animate").classList.remove("animate");
        this.tabs.querySelector(`.tab--${index}`).style.display = "block";
        setTimeout(()=>{
            this.tabs.querySelector(`.tab--${index}`).classList.add("animate");
        },100);
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const buttonsContainer = document.querySelector(".buttons");
    const tabs             = document.querySelector(".tabs");

    const tabList = new TabList(buttonsContainer, tabs);
});
