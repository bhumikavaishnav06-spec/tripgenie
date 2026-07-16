const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const healthRoutes = require("./routes/healthRoutes");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");
const tripRoutes = require("./routes/tripRoutes");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

// =======================
// Connect Database
// =======================
connectDB();

// =======================
// Middleware
// =======================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/trips", tripRoutes);
app.use("/api/weather", weatherRoutes);

// =======================
// Routes
// =======================

// Default Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Welcome to TripGenie Backend",
  });
});

// API Routes
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

// =======================
// Server
// =======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, "127.0.0.1", () => {
  console.log(`🚀 Server is running on http://127.0.0.1:${PORT}`);
});