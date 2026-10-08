const form = document.getElementById("student-form");
const parentDiv = document.getElementById("card-container");

form.addEventListener("submit", (event) => {
    event.preventDefault();

  const studentName = document.getElementById("student-name").value;
  const studentCourse = document.getElementById("student-course").value;
  const studentbatch = document.getElementById("student-batch").value;

  cardCreate(studentName, studentCourse, studentbatch);
})

function cardCreate(name,course,batch) {
    const div = document.createElement("div");
    div.classList.add("student-card");

    const h2 = document.createElement("h2");
    h2.innerText = "student card" ;
    
    const p1 = document.createElement("p");
    p1.innerText = name;

    const p2 = document.createElement("p")
    p2.innerText = course;

    const p3 = document.createElement("p")
    p3.innerText = batch;

    const button = document.createElement("button")
    button.innerText = "remove button"; 
    
    button.addEventListener("click" ,() =>{
      parentDiv.removeChild(div)
       })  
       div.appendChild(h2);
       div.appendChild(p1);
       div.appendChild(p2);
       div.appendChild(p3);
       div.appendChild(button);
       
       parentDiv.appendChild(div);
} 
