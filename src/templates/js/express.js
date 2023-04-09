const express = require("express");
const Database = require("./database.cjs");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = new Database();
db.connect()
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/tasks", async (req, res) => {
  try {
    const taskList = await db.getTasks();
    res.json(taskList);
  } catch (err) {
    console.error("Error retrieving tasks:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/tasks", async (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task field is required" });
  }
  try {
    await db.addTask(task);
    res.sendStatus(201);
  } catch (err) {
    console.error("Error adding task:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.removeTask(id);
    res.sendStatus(204);
  } catch (err) {
    console.error("Error removing task:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = app;
