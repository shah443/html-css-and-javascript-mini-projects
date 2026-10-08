const previousButton = document.getElementById("previous-button");
const slideImage = document.getElementById("slide-image");
const nextButton = document.getElementById("next-button");

let count = 1;

nextButton.addEventListener("click" ,() =>{
   if (count === 1) {
    slideImage.src=` https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD2yat-OB9t7RY0SaoJt1EqrURuOeszgMoHx4M1T8dpw&s=10`
    count++;
   }
   else if(count ===2){
    slideImage.src=` https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2Py8fuaUINguqHSEa4iTz01WGg_aQ1YHAPzkgkzHtg&s=10`
    count++;
   }
})
previousButton.addEventListener("click" , ()=>{
   if(count ===3){
    slideImage.src=`  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD2yat-OB9t7RY0SaoJt1EqrURuOeszgMoHx4M1T8dpw&s=10`
    count--;
   }
   else if(count ===2){
    slideImage.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10`
    count--;
   }
   

})




