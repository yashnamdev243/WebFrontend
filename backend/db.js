import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",         
  password: "root",          //
  database: "shivling_art_db" 
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

export default db;
