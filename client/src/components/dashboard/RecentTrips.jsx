import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrips } from "../../services/aiService";

function RecentTrips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await getTrips();

        if (response.success) {
          setTrips(response.trips.slice(0, 3));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          🧳 Recent Trips
        </h2>

        <Link
          to="/my-trips"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          View All →
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-500 text-center py-6">
          Loading trips...
        </p>
      ) : trips.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-xl font-semibold">
            No trips yet ✈️
          </h3>

          <p className="text-gray-500 mt-2">
            Generate your first AI trip to see it here.
          </p>
        </div>
      ) : (
        <div className="space-y-5">

          {trips.map((trip) => (

            <Link
              key={trip._id}
              to={`/trip/${trip._id}`}
              className="flex items-center gap-5 border rounded-2xl p-4 hover:shadow-lg hover:border-blue-500 transition duration-300"
            >

              <img
                src={`https://picsum.photos/seed/${encodeURIComponent(
  trip.destination
)}/120/120`}
                alt={trip.destination}
                className="w-24 h-24 rounded-xl object-cover"
              />

              <div className="flex-1">

                <h3 className="text-xl font-semibold text-gray-800">
                  📍 {trip.destination}
                </h3>

                <div className="flex flex-wrap gap-4 mt-2 text-gray-500">

                  <span>📅 {trip.duration} Days</span>

                  <span>💰 {trip.budget}</span>

                  <span>👥 {trip.travelers}</span>

                </div>

              </div>

              <div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                  View
                </button>

              </div>

            </Link>

          ))}

        </div>
      )}

    </div>
  );
}

export default RecentTrips;