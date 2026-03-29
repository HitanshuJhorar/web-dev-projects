const input = document.querySelector("#task-name");
const form = document.querySelector("form");
const tasklist = document.querySelector(".tasklist");
function randomnumber() {
  return Math.floor(Math.random() * 100) + 1;
}
let identity = [];

let tasks = [
  {
    id: 1,
    title: "Study JS",
    completed: false,
  },
];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let ident = crypto.randomUUID();
  let value = input.value;
  const newtask = {
    id: ident,
    title: value,
    completed: false,
  };

  tasks.push(newtask);

  const taskdiv = document.createElement("div");
  taskdiv.classList.add("task");

  const para = document.createElement("p");
  para.id = ident;
  para.textContent = newtask.title;

  const box = document.createElement("div");
  box.classList.add("box-btn");

  const btn = document.createElement("button");
  btn.classList.add("delete-btn");
  btn.innerText = "❌";

  const check = document.createElement("input");
  check.type = "checkbox";
  check.id = "termsCheckbox";
  box.appendChild(check);
  box.appendChild(btn);

  taskdiv.appendChild(para);
  taskdiv.appendChild(box);

  tasklist.appendChild(taskdiv);
  input.value = "";
  identity.push(ident);
  console.log(tasks);
});

tasklist.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    let taskElement = e.target.closest(".task");
    let iden = taskElement.querySelector("p").id;

    const index = tasks.findIndex((item) => item.id == iden);

    if (index !== -1) {
      tasks.splice(index, 1);
      console.log("Deleted task! Current tasks:", tasks);
    }

    taskElement.remove();
  }
});

tasklist.addEventListener("click", function (e) {
  if (e.target.closest(".box-btn")) {
    let pTag = e.target.closest(".task").querySelector("p");
    let iden = pTag.id;

    tasks.forEach((task) => {
      // Use == to match both strings and numbers
      if (task.id == iden) {
        task.completed = !task.completed; // Toggle the completed status

        // Update the visual styling immediately based on the new status
        if (task.completed) {
          pTag.style.textDecoration = "line-through";
        } else {
          pTag.style.textDecoration = "none";
        }
      }
    });
    console.log("Task marked completed:", tasks);
  }
});

const all = document.querySelector(".all");
const active = document.querySelector(".active");
const cloed = document.querySelector(".completed");

active.addEventListener("click", function (e) {
  e.preventDefault();
  tasks.forEach((task) => {
    const pTag = document.getElementById(task.id);
    if (pTag) {
      const taskDiv = pTag.closest(".task");
      if (task.completed) {
        taskDiv.style.display = 'none';
      } else {
        taskDiv.style.display = '';
      }
    }
  });
});

cloed.addEventListener("click", function (e) {
  e.preventDefault();
  tasks.forEach((task) => {
    const pTag = document.getElementById(task.id);
    if (pTag) {
      const taskDiv = pTag.closest(".task");
      if (!task.completed) {
        taskDiv.style.display = 'none';
      } else {
        taskDiv.style.display = '';
      }
    }
  });
});

all.addEventListener("click", function (e) {
  e.preventDefault();
  tasks.forEach((task) => {
    const pTag = document.getElementById(task.id);
    if (pTag) {
      const taskDiv = pTag.closest(".task");
      taskDiv.style.display = '';
    }
  });
});

