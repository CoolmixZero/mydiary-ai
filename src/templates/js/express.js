const express = require("express");
const Database = require("./database.cjs");

const app = express();
app.use(express.static("src/templates"));
const port = 4000;

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
  const str =
    "D:\\GitHub repos\\mydiary-ai\\src\\templates\\js\\src\\templates\\index.html";
  console.log(str.substring(0, str.indexOf("mydiary-ai") + 10));
  res.sendFile(
    `${str.substring(
      0,
      str.indexOf("mydiary-ai") + 10
    )}/src/templates/index.html`
  );
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

app.post("/submit-form", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    await db.insertUser(username, email, password);
    res.status(200).send("Form submitted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

module.exports = app;
