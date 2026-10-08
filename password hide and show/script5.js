const password = document.getElementById("password");
const password2 = document.getElementById("password-toggle");

let count = 1;

password2.addEventListener("click", () => {

    if (count === 1) {
        password.type = "text";
        count = 2;
    }
    else {
        password.type = "password";
        count = 1;
    }

});