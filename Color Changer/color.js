const box = document.querySelector(".box")
const buttons = Array.from(document.querySelectorAll("button"))


// console.log(container)

buttons.forEach((button) =>{
    button.addEventListener("click",() => {
        
        if(button.id === "red"){
           box.style.backgroundColor ="red"; 
        }
        else if(button.id === "brown"){
            box.style.backgroundColor = "brown";
        }
        else if(button.id === "green" ){
            box.style.backgroundColor="green";
        }

    })
    
})