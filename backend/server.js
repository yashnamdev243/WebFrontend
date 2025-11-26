// server.js
import express from "express";
import mysql from "mysql2";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("✅ Serving uploads from:", path.join(__dirname, "uploads"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


import contactRoutes from "./routes/contactRoutes.js";

app.use("/api/contacts", contactRoutes);

// ✅ MySQL Connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "shivling_art_db",
// });
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

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Error:", err);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

// Multer storage for review images
const reviewStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/reviews";
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const productStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/products";
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadProduct = multer({ storage: productStorage });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/slides";
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } }); // ✅ 10MB
// const uploadReview = multer({ storage: reviewStorage, limits: { fileSize: 10 * 1024 * 1024 } });
const uploadReview = multer({ storage: reviewStorage });




// ---------------- CONTACTS ----------------
// ✅ POST: Save contact form
app.post("/api/contacts", (req, res) => {
  const { name, email, contact, message } = req.body;

  if (!name || !email || !contact || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query =
    "INSERT INTO contacts (name, email, contact, message) VALUES (?, ?, ?, ?)";

  db.query(query, [name, email, contact, message], (err, result) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ error: "Failed to save message" });
    }
    console.log("✅ Contact saved:", result);
    res.status(200).json({ success: true, message: "Message saved successfully" });
  });
});

// ✅ GET: Fetch all contacts
app.get("/api/contacts", (req, res) => {
  db.query("SELECT * FROM contacts ORDER BY id DESC", (err, results) => {
    if (err) {
      console.error("❌ Fetch error:", err);
      return res.status(500).json({ error: "Failed to fetch contacts" });
    }
    res.json(results);
  });
});
// DELETE a contact by id
app.delete("/api/contacts/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM contacts WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ error: "Failed to delete contact" });
    }
    res.json({ success: true, message: "Contact deleted successfully" });
  });
});


// ---------------- PRODUCTS ----------------

// ✅ POST - Add Product
app.post("/api/products", uploadProduct.single("image"), (req, res) => {
  const { name, category } = req.body;
  const imagePath = req.file ? `/uploads/products/${req.file.filename}` : null;

  const sql = "INSERT INTO products (name, category, image) VALUES (?, ?, ?)";
  db.query(sql, [name, category, imagePath], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Product added successfully" });
  });
});

// ✅ GET - Fetch all products
app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM products ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});


app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM products WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Product deleted successfully" });
  });
});
// ---------------- PRODUCTS ----------------

// GET - Fetch single product by ID
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM products WHERE id = ?";
  db.query(sql, [id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (rows.length === 0) return res.status(404).json({ error: "Product not found" });
    res.json(rows[0]);
  });
});

// UPDATE product
app.put("/api/products/:id", uploadProduct.single("image"), (req, res) => {
  const { id } = req.params;
  const { name, category } = req.body;

  let sql, params;

  if (req.file) {
    const imagePath = `/uploads/products/${req.file.filename}`;
    sql = "UPDATE products SET name = ?, category = ?, image = ? WHERE id = ?";
    params = [name, category, imagePath, id];
  } else {
    sql = "UPDATE products SET name = ?, category = ? WHERE id = ?";
    params = [name, category, id];
  }

  db.query(sql, params, (err, result) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ error: "Failed to update product" });
    }
    res.json({ success: true, message: "Product updated successfully" });
  });
});

// ---------------- REVIEWS ----------------
// app.get("/api/reviews", (req, res) => {
//   db.query("SELECT * FROM reviews ORDER BY id DESC", (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(result);
//   });
// });

// POST review with image
app.post("/api/reviews", uploadReview.single("image"), (req, res) => {
  const { name, review, rating } = req.body;
  // const imagePath = req.file ? `/uploads/reviews/${req.file.filename}` : "/default-avatar.jpg";
    const imagePath = req.file ? `/uploads/reviews/${req.file.filename}` : "/uploads/default-avatar.jpg";


  const sql = "INSERT INTO reviews (name, review, rating, image) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, review, rating || 5, imagePath], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Review added successfully" });
  });
});
// GET all reviews
app.get("/api/reviews", (req, res) => {
  db.query("SELECT * FROM reviews ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// UPDATE review reply
app.put("/api/reviews/:id", (req, res) => {
  const { id } = req.params;
  const { reply } = req.body;

  if (reply === undefined) {
    return res.status(400).json({ error: "Reply is required" });
  }

  const sql = "UPDATE reviews SET reply = ? WHERE id = ?";
  db.query(sql, [reply, id], (err, result) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ error: "Failed to update reply" });
    }
    res.json({ success: true, message: "Reply saved successfully" });
  });
});

// DELETE a review
app.delete("/api/reviews/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM reviews WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ error: "Failed to delete review" });
    }
    res.json({ success: true, message: "Review deleted successfully" });
  });
});




// ---------------- SLIDES ----------------
app.get("/api/slides", (req, res) => {
  db.query("SELECT * FROM slides ORDER BY `order` ASC", (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});
app.post("/api/slides", upload.single("image"), (req, res) => {
  const { order } = req.body;
  const imagePath = req.file ? `/uploads/slides/${req.file.filename}` : null;
  const sql = "INSERT INTO slides (src, `order`) VALUES (?, ?)";
  db.query(sql, [imagePath, order || 0], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Slide added successfully" });
  });
});
// ---------------- SLIDES ----------------
app.delete("/api/slides/:id", (req, res) => {
  const { id } = req.params;

  // First, get the slide to delete its image file
  db.query("SELECT src FROM slides WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.length > 0 && result[0].src) {
      const imagePath = path.join(__dirname, result[0].src);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

    // Delete slide from database
    db.query("DELETE FROM slides WHERE id = ?", [id], (err2) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.json({ message: "Slide deleted successfully" });
    });
  });
});

// UPDATE slide
app.put("/api/slides/:id", upload.single("image"), (req, res) => {
  const { id } = req.params;
  const { order } = req.body;

  let sql, params;

  if (req.file) {
    const imagePath = `/uploads/slides/${req.file.filename}`;
    sql = "UPDATE slides SET src = ?, `order` = ? WHERE id = ?";
    params = [imagePath, order || 0, id];
  } else {
    sql = "UPDATE slides SET `order` = ? WHERE id = ?";
    params = [order || 0, id];
  }

  db.query(sql, params, (err, result) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ error: "Failed to update slide" });
    }
    res.json({ success: true, message: "Slide updated successfully" });
  });
});


// ---------------- START SERVER ----------------
app.listen(5000, () => {
  console.log("🚀 Server running on http://namdevshivlingart.vercel.app");
});

