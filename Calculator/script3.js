
const display = document.getElementById("display");
const buttons = document.querySelectorAll("#buttons button");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

let value = "";

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        if (button === clear) {
            value = "";
            display.value = "";
        }

        else if (button === equal) {
            value = eval(value);
            display.value = value;
        }

        else {
            value = value + button.innerText;
            display.value = value;
        }

    });

});

