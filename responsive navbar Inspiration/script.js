
const navElement = document.getElementsByTagName("nav")[0];
const icon = document.querySelector(".icon");
const closeIcon = document.querySelector("nav svg");

icon.addEventListener("click", () => {
    navElement.style.right = "0";

    setTimeout(()=>{
        icon.style.display = "none";
    }, 1000)
})

closeIcon.addEventListener("click", () => {
    navElement.style.right = "-30rem";

    setTimeout(()=>{
        icon.style.display = "block";
    }, 1000)
})