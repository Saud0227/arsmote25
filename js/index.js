document.getElementById("menu-button").addEventListener("click", (event) => {
    // get nav element
    const nav = document.getElementsByTagName("nav")[0];
    // get header element
    const header = document.getElementsByTagName("header")[0];
    // get attribute active
    const active = nav.getAttribute("active");
    // check if active is true

    if (active === "true") {
        nav.setAttribute("active", "false")
    } else {
        nav.style.top = header.offsetHeight + "px";
        nav.setAttribute("active", "true")
    }



    const icon = document.getElementById("menu-button").children[0];

    icon.innerHTML = active === "true" ? "menu" : "close";
});