import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ Correct order: Middleware BEFORE routes
app.use(cors()); // Allow cross-origin requests
// ✅ Add User Routes after middleware
// Add Order Routes
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use(express.json()); // ✅ Parse JSON request body
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // Logging middleware



// ✅ Example Route for Debugging
app.post("/api/users/register", (req, res) => {
  console.log("Request Body:", req.body); // Debugging
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  res.json({ message: `User ${name} registered successfully!` });
});

// ✅ Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// ✅ Basic Route
app.get("/", (req, res) => {
  res.send("🚀 Houseplants E-commerce API is running...");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});