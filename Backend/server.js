const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
require("dotenv").config(); // ✅ FIX 1

const app = express();
app.use(cors());
app.use(bodyParser.json());

/* 🔌 DB Connection */
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("Database Connected");
});

/* 🔐 REGISTER API */
app.post("/api/register", async (req, res) => {
  try {
    console.log(req.body);
    const {username, email, password, branch, year } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql =
      "INSERT INTO students (username, email, password,branch, year) VALUES (?, ?, ?, ?, ?)"; // ✅ FIX 2

    db.query(
      sql,
      [username, email, hashedPassword, branch, year],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: "Database error" });
        }

        res.json({ message: "Student registered successfully" });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM students WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err) return res.status(500).json({ message: "DB error" });

    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result[0];

    // 🔐 compare password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // ❗ remove password before sending
    const { password: _, ...userData } = user;

    res.json({
      message: "Login successful",
      user: userData,
    });
  });
});
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});