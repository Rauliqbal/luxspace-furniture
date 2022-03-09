let list = document.querySelector("ul");

function Menu(e) {
    e.name === "menu" ? ((e.name = "close"), list.classList.remove("left-[50rem]")) : ((e.name = "menu"), list.classList.add("left-[50rem]"));
}
