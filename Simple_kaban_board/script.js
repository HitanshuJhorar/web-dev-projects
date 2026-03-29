const todo=document.getElementById("box-to");
const done=document.getElementById("box-do");
const toin=document.getElementById("box-in");
const input=document.querySelector("input");
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const value=input.value;
    
    const taskdiv=document.createElement("div");
    taskdiv.classList.add("task");
    taskdiv.setAttribute("draggable","true")

    const para=document.createElement("p");
    para.innerText=value;

    const button=document.createElement("button");
    button.classList.add("delete-btn")
    button.innerText="❌";
    
    taskdiv.appendChild(para);
    taskdiv.appendChild(button);
     
    taskdiv.addEventListener("dragstart",()=>{
        taskdiv.classList.add("dragging");
    });

    taskdiv.addEventListener("dragend", () => {
        taskdiv.classList.remove("dragging");
    });
    todo.appendChild(taskdiv);

    input.value="";
});

todo.addEventListener("click",function(e){
    if(e.target.classList.contains("delete-btn")){
        e.target.closest(".task").remove();
    }
})
toin.addEventListener("click",function(e){
    if(e.target.classList.contains("delete-btn")){
        e.target.closest(".task").remove();
    }
})
done.addEventListener("click",function(e){
    if(e.target.classList.contains("delete-btn")){
        e.target.closest(".task").remove();
    }
})

const columns = document.querySelectorAll(".to-do, .in-progress, .done");

columns.forEach(column => {
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();

        const dragging = document.querySelector(".dragging");
        if (dragging) {
            const dropZone = e.currentTarget.querySelector(".column");
            dropZone.appendChild(dragging);
        }
    });
});