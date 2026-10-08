const openPopupButton = document.getElementById("open-popup-button");
const overlay = document.querySelector(".overlay");
const addTaskPopup = document.querySelector(".add-task-popup");
const addForm = document.getElementById("add-form")
const taskContainer = document.getElementById("task-container")


openPopupButton.addEventListener("click", () => {
     overlay.style.display="block";
     addTaskPopup.style.scale="1"
})
addForm.addEventListener("submit" ,(event)=>{
 event.preventDefault();
 const newTaskValue = document.querySelector("#add-form input").value;
 const taskId = crypto.randomUUID()
 localStorage.setItem(taskId,newTaskValue)
  overlay.style.display="none";
     addTaskPopup.style.scale="0"
     window.location.reload();
})

function showTask(){
  const  tasks = { ...localStorage }
  for(task in tasks){
     
    taskContainer.innerHTML += `
    
        <div id='${task}' class="first-section-part2">
            <input value='${tasks[task]}'readonly>
            <div >

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
            </div>
        </div>
    `
  }
  
}
showTask()

const deleteButtons = Array.from(document.querySelectorAll(".first-section-part2 svg:last-child"));

deleteButtons.forEach(button => {
     button.addEventListener ("click",()=> {
     const taskId = button.parentElement.parentElement.id
     localStorage.removeItem(taskId)
     window.location.reload();
     })   
})

const editButtons = Array.from(document.querySelectorAll(".first-section-part2 svg:first-child"));

editButtons.forEach(button=>{
     button.addEventListener("click",()=>{
          const input = button.parentElement.parentElement.firstElementChild;
          input.style.border="1px solid gray";
           input.style.background="white";
           input.style.padding="0.3rem 0.6rem"
          input.style.cursor="text";
          input.readOnly=false;

          input.addEventListener("keydown",(event)=>{
               if(event.key === "Enter"){
                   const taskId = input.parentElement.id;
                   const updateValue = input.value;
                   localStorage.setItem(taskId,updateValue)
                   window.location.reload();
               }
          })
     })
})