import { Link } from "react-router-dom";

function TripCard({ trip, onDelete }) {
  
 const imageUrl = `https://source.unsplash.com/600x400/?${encodeURIComponent(
  trip.destination
)}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

      <img
        src={imageUrl}
        alt={trip.destination}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-blue-600">
          📍 {trip.destination}
        </h2>

        <div className="mt-4 space-y-2 text-gray-600">

          <p>📅 {trip.duration} Days</p>

          <p>💰 {trip.budget}</p>

          <p>👥 {trip.travelers} Travelers</p>

        </div>

        <div className="flex gap-3 mt-6">

          <Link
            to={`/trip/${trip._id}`}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg"
          >
            View
          </Link>

          <button
            onClick={() => onDelete(trip._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-lg"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default TripCard;