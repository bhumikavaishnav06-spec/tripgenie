const Trip = require("../models/Trip");

// ==========================
// Save Trip
// ==========================
const saveTrip = async (req, res) => {
  try {
    const {
      destination,
      duration,
      budget,
      travelers,
      itinerary,
    } = req.body;

    const trip = await Trip.create({
      user: req.user,
      destination,
      duration,
      budget,
      travelers,
      itinerary,
    });

    res.status(201).json({
      success: true,
      message: "Trip Saved Successfully",
      trip,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Get All Trips
// ==========================
const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({
      user: req.user,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      trips,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Get Single Trip
// ==========================
const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findOne({
      _id: req.params.id,
      user: req.user,
    });

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    res.status(200).json({
      success: true,
      trip,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Delete Trip
// ==========================
const deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findOne({
      _id: req.params.id,
      user: req.user,
    });

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    await Trip.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Trip Deleted Successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  saveTrip,
  getTrips,
  getTripById,
  deleteTrip,
};