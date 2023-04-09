let pg = require('pg');
delete pg.native;

const {Client} = require('pg');
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "mydiary.ai"
});
client.connect();

async function addTask() {
    const newTask = document.getElementById("newTask").value;
    if (newTask !== "") {
        const res = await client.query('INSERT INTO tasks (task) VALUES ($1)', [newTask]);
        document.getElementById("newTask").value = "";
        await displayTasks();
    }
}


async function removeTask(id) {
    const res = await client.query('DELETE FROM tasks WHERE id = $1', [id]);
    await displayTasks();
}


async function displayTasks() {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";
    const res = await client.query('SELECT * FROM tasks');
    const tasks = res.rows;
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i].task;
        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");
        span.innerHTML = task;
        button.innerHTML = "Delete";
        button.onclick = function () {
            removeTask(tasks[i].id);
        };
        li.appendChild(span);
        li.appendChild(button);
        taskListElement.appendChild(li);
    }
}
