const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function loadTasks(){
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  list.innerHTML = "";
  tasks.forEach((t,i)=>{
    list.innerHTML += `
      <li class="${t.done ? 'completed' : ''}">
        <span>
          <span class="badge">${i+1}</span>
          ${t.text}
        </span>
        <div>
          <button onclick="toggle(${i})">✔</button>
          <button class="delete" onclick="removeTask(${i})">X</button>
        </div>
      </li>`;
  });
}

function addTask(){
  if(input.value.trim()==="") return alert("Escribe algo");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({text:input.value, done:false});
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value="";
  loadTasks();
}

function toggle(i){
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks[i].done = !tasks[i].done;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function removeTask(i){
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(i,1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

loadTasks();
