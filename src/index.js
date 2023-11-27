import "./styles.scss";

document.querySelector(".hamburger").addEventListener("click", (e) => {
    let x = document.querySelector(".nav-menu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
})
