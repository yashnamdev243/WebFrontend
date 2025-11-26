// import express from "express";
// import db from "../db.js"; // make sure db.js exports mysql2 connection

// const router = express.Router();

// // Save new contact (frontend se form submit hoga)
// router.post("/", async (req, res) => {
//   const { name, contact, message } = req.body;

//   if (!name || !contact || !message) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   try {
//     await db
//       .promise()
//       .query("INSERT INTO contacts (name, contact, message) VALUES (?, ?, ?)", [
//         name,
//         contact,
//         message,
//       ]);

//     res.json({ success: true, message: "Message saved successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to save message" });
//   }
// });

// // Fetch all contacts (Admin panel yahi call karega)
// router.get("/", async (req, res) => {
//   try {
//     const [rows] = await db
//       .promise()
//       .query("SELECT * FROM contacts ORDER BY id DESC");
//     res.json(rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch contacts" });
//   }
// });

// export default router;

// import express from "express";
// import { saveContactMessage } from "../controllers/contactController.js";

// const router = express.Router();

// router.post("/", saveContactMessage);

// export default router;

// import express from "express";
// import db from "../db.js"; // your MySQL connection

// const router = express.Router();

// // POST contact form data
// router.post("/", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // save into database
//     await db.query(
//       "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)",
//       [name, email, message]
//     );

//     res.json({ success: true, message: "Message sent successfully" });
//   } catch (error) {
//     console.error("Error saving contact:", error);
//     res.status(500).json({ error: "Failed to save message" });
//   }
// });

// export default router;

import express from "express";
import mysql from "mysql2";

const router = express.Router();


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});

// ✅ POST /api/contacts — Save contact message
router.post("/", (req, res) => {
  const { name, email, contact, message } = req.body;

  if (!name || !email || !contact || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql =
    "INSERT INTO contacts (name, email, contact, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, contact, message], (err, result) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ error: "Failed to save message" });
    }
    res.status(200).json({ success: true, message: "Message saved successfully" });
  });
});

// ✅ GET /api/contacts — Fetch all contacts
router.get("/", (req, res) => {
  db.query("SELECT * FROM contacts ORDER BY id DESC", (err, results) => {
    if (err) {
      console.error("❌ Fetch error:", err);
      return res.status(500).json({ error: "Failed to fetch contacts" });
    }
    res.json(results);
  });
});

export default router;


