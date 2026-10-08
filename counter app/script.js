const countContainer = document.querySelector(".count  p")
const incrementButton = document.getElementById("button1")
const decrementButton = document.getElementById("button2")
const resetButton = document.getElementById("resetCounter")

let count = 0;

countContainer.innerText = count;


incrementButton.addEventListener("click",()=>{
    count++;
    countContainer.innerText = count;
})
decrementButton.addEventListener("click",()=>{
    count--;
    countContainer.innerText = count;
} )
resetButton.addEventListener("click",()=>{
    count=0;
    countContainer.innerText = count;
})

