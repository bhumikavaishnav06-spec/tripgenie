import { useState } from "react";
import { generateTrip, saveTrip } from "../../services/aiService";
import LoadingSpinner from "./LoadingSpinner";
import TripResult from "./TripResult";
import toast from "react-hot-toast";

function TripForm() {
  const [tripData, setTripData] = useState({
    destination: "",
    duration: "",
    budget: "",
    travelers: "",
  });

  const [trip, setTrip] = useState("");
  const [generatedTrip, setGeneratedTrip] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setTripData({
      ...tripData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await generateTrip(tripData);

      if (response.success) {
        setTrip(response.trip);

        setGeneratedTrip({
          ...tripData,
          itinerary: response.trip,
        });

        toast.success("Trip Generated Successfully ✈️");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to generate trip"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSaveTrip = async () => {
    try {
      const response = await saveTrip(generatedTrip);

      if (response.success) {
        toast.success("Trip Saved Successfully 🎉");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to save trip"
      );
    }
  };

  return (
    <>
      <div
  id="trip-form"
  className="bg-white rounded-2xl shadow-md p-8 mt-8"
>
        <h2 className="text-2xl font-bold mb-6">
          ✈️ Plan Your Trip
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={tripData.destination}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <input
            type="number"
            name="duration"
            placeholder="Duration (Days)"
            value={tripData.duration}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <select
            name="budget"
            value={tripData.budget}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          >
            <option value="">Select Budget</option>
            <option value="Budget">Budget</option>
            <option value="Moderate">Moderate</option>
            <option value="Luxury">Luxury</option>
          </select>

          <input
            type="number"
            name="travelers"
            placeholder="Number of Travelers"
            value={tripData.travelers}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
          >
            ✨ Generate AI Trip
          </button>
        </form>
      </div>

      {loading && <LoadingSpinner />}

      {!loading && trip && (
        <>
          <TripResult trip={trip} />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleSaveTrip}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl shadow-lg transition"
            >
              💾 Save Trip
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default TripForm;