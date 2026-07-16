import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import ReactMarkdown from "react-markdown";
import toast from "react-hot-toast";

import { getTripById } from "../services/aiService";
import { getWeather } from "../services/weatherService";
import WeatherCard from "../components/dashboard/WeatherCard";

function TripDetails() {
  const { id } = useParams();

  const [trip, setTrip] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        setLoading(true);

        const response = await getTripById(id);

        if (response.success) {
          setTrip(response.trip);

          // Fetch weather
          try {
            const weatherResponse = await getWeather(
              response.trip.destination
            );

            if (weatherResponse.success) {
              setWeather(weatherResponse.weather);
            }
          } catch (weatherError) {
  console.error("Weather Error:", weatherError);
  console.log(weatherError.response?.data);
}
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to load trip");
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            Loading Trip...
          </h2>
        </div>
      </DashboardLayout>
    );
  }

  if (!trip) {
    return (
      <DashboardLayout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-red-500">
            Trip not found
          </h2>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Hero Card */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-8 shadow-xl">

          <h1 className="text-4xl font-bold">
            📍 {trip.destination}
          </h1>

          <div className="flex flex-wrap gap-6 mt-6 text-lg">

            <span>📅 {trip.duration} Days</span>

            <span>💰 {trip.budget}</span>

            <span>👥 {trip.travelers} Travelers</span>

          </div>

        </div>

        {/* Weather */}
        <WeatherCard weather={weather} />

        {/* AI Itinerary */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-8">
            🤖 AI Travel Itinerary
          </h2>

          <div className="prose max-w-none leading-8">
            <ReactMarkdown>
              {trip.itinerary}
            </ReactMarkdown>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default TripDetails;