import axios from "axios";

const AI_API = "http://127.0.0.1:5000/api/ai";
const TRIP_API = "http://127.0.0.1:5000/api/trips";

// =======================
// Generate AI Trip
// =======================
export const generateTrip = async (tripData) => {
  const response = await axios.post(
    `${AI_API}/generate`,
    tripData
  );

  return response.data;
};

// =======================
// Save Trip
// =======================
export const saveTrip = async (tripData) => {
  const token = localStorage.getItem("token");

  const response = await axios.post(
    TRIP_API,
    tripData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// =======================
// Get All Trips
// =======================
export const getTrips = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    TRIP_API,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// =======================
// Get Single Trip
// =======================
export const getTripById = async (id) => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `${TRIP_API}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// =======================
// Delete Trip
// =======================
export const deleteTrip = async (id) => {
  const token = localStorage.getItem("token");

  const response = await axios.delete(
    `${TRIP_API}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};