const { Client } = require("pg");

class Database {
  constructor() {
    this.client = new Client({
      host: "localhost",
      user: "postgres",
      port: 5432,
      password: "admin",
      database: "mydiary.ai",
    });
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.client.connect((err) => {
        if (err) {
          console.error("Error connecting to PostgreSQL database", err.stack);
          reject(err);
        } else {
          console.log("Connected to PostgreSQL database");
          resolve();
        }
      });
    });
  }
}

module.exports = Database;
