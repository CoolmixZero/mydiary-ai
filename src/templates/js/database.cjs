const { Pool } = require("pg");

class Database {
  constructor() {
    this.pool = new Pool({
      host: "localhost",
      user: "postgres",
      port: 5432,
      password: "admin",
      database: "mydiary.ai",
    });
  }

  async connect() {
    try {
      await this.pool.connect();
      console.log("Connected to PostgreSQL database");
    } catch (err) {
      console.error("Error connecting to PostgreSQL database", err.stack);
      throw err;
    }
  }

  async getTasks() {
    const query = "SELECT * FROM tasks";
    try {
      const res = await this.pool.query(query);
      return res.rows;
    } catch (err) {
      console.error("Error retrieving tasks", err.stack);
      throw err;
    }
  }

  async addTask(task) {
    const query = "INSERT INTO tasks (description) VALUES ($1)";
    try {
      await this.pool.query(query, [task]);
      console.log(`Task '${task}' added to database`);
    } catch (err) {
      console.error("Error adding task", err.stack);
      throw err;
    }
  }

  async removeTask(id) {
    const query = "DELETE FROM tasks WHERE id = $1";
    try {
      await this.pool.query(query, [id]);
      console.log(`Task with id ${id} removed from database`);
    } catch (err) {
      console.error("Error removing task", err.stack);
      throw err;
    }
  }
  async insertUser(username, email, password) {
    const query =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    await this.pool.query(query, [username, email, password]);
  }
}

module.exports = Database;
