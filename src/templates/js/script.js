let taskList = [];

async function addTask() {
  let newTask = document.getElementById("newTask").value;
  if (newTask !== "") {
    taskList.push(newTask);
    document.getElementById("newTask").value = "";
    await displayTasks();
  }
}

async function removeTask(index) {
  taskList.splice(index, 1);
  await displayTasks();
}

async function displayTasks() {
  let taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    let task = taskList[i];
    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");
    span.innerHTML = task;
    button.innerHTML = "Delete";
    button.onclick = function () {
      removeTask(i);
    };
    li.appendChild(span);
    li.appendChild(button);
    taskListElement.appendChild(li);
  }
}
