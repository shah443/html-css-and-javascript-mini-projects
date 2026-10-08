const button = document.querySelector("button")
const img = document.querySelector("img")
  let buttonSwitch =0;
 button.addEventListener("click",()=>{
     if(buttonSwitch ===0){
        img.src="./images/bulb on.jpg"
        buttonSwitch=1;
    }else{
        img.src="./images/bulb off.jpg"
        buttonSwitch=0;
    }

 })
