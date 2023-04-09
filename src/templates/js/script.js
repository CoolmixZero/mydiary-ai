async function addTask() {
  let newTask = document.getElementById("newTask").value;
  if (newTask !== "") {
    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: newTask }),
      });
      await displayTasks();
    } catch (err) {
      console.error("Error adding task:", err);
    }
    document.getElementById("newTask").value = "";
  }
}

async function removeTask(index) {
  try {
    const taskListElement = document.getElementById("taskList");
    const taskId = taskListElement.childNodes[index].dataset.taskId;
    await fetch(`/tasks/${taskId}`, { method: "DELETE" });
    await displayTasks();
  } catch (err) {
    console.error("Error removing task:", err);
  }
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
