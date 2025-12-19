const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function loadTasks(){
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  list.innerHTML = "";
  tasks.forEach((t,i)=>{
    list.innerHTML += `<li>${t} 
      <button onclick="removeTask(${i})">X</button></li>`;
  });
}

function addTask(){
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value="";
  loadTasks();
}

function removeTask(i){
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(i,1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

loadTasks();
