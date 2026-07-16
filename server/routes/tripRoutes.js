const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  saveTrip,
  getTrips,
  getTripById,
  deleteTrip,
} = require("../controllers/tripController");

// Save Trip
router.post("/", protect, saveTrip);

// Get All Trips
router.get("/", protect, getTrips);

// Get Single Trip
router.get("/:id", protect, getTripById);

// Delete Trip
router.delete("/:id", protect, deleteTrip);

module.exports = router;