const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());


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

app.post("/api/register", async (req, res) => {
  try {
    console.log(req.body);
    const {username, email, password, branch, year } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql =
      "INSERT INTO students (username, email, password,branch, year) VALUES (?, ?, ?, ?, ?)";

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

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err) return res.status(500).json({ message: "DB error" });

    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result[0];

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid password" });
    }

    //  remove password before sending
    const { password: _, ...userData } = user;

    res.json({
      message: "Login successful",
      user: userData,
    });
  });
});
 
// To render the all clubs on the home page

app.get("/api/clubs", (req, res) => {
    
    const sql = "SELECT * FROM clubs";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    console.log("DB RESULT:", result); 

    res.json(result);
  })

});


// To update the student_clubs that which student joined which club.

app.post("/api/join-club",(req,res)=>{
          
      const {student_id,club_id} = req.body;

      const sql = `
    INSERT INTO student_clubs (student_id, club_id)
    VALUES (?, ?)
  `;
     
  db.query(sql,[student_id,club_id],(err,result)=>{
        if (err) {
      return res.status(500).json({ message: "DB error" });
    }

    res.json({ message: "Joined successfully" });
  });

});

// To give the clubs joined by the logged in student.

app.get("/api/my-clubs/:student_id", (req, res) => {

  const student_id = req.params.student_id; 

  const sql = `
    SELECT clubs.*
    FROM clubs
    JOIN student_clubs 
    ON clubs.id = student_clubs.club_id
    WHERE student_clubs.student_id = ?
  `;

  db.query(sql, [student_id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    res.json(result);
  });
});

 // To display the events
 app.get("/api/events",(req,res)=>{
    
  const sql = "SELECT * FROM events ";

  
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    console.log("DB RESULT:", result); 

    res.json(result);
  })


 });
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});


  