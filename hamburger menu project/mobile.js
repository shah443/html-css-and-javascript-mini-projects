const hamburgerIcon = document.querySelector("header > svg");
const mobileNavbar = document.getElementById("mobile-navbar");
const mobileNavbarCloseIcon = document.querySelector("#mobile-navbar > svg");

hamburgerIcon.addEventListener("click",()=>{
    mobileNavbar.style.right = "0";
})

mobileNavbarCloseIcon.addEventListener("click",()=>{
     mobileNavbar.style.right = "-150%";
})

console.log(mobileNavbarCloseIcon)