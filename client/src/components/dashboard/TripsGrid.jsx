import TripCard from "./TripCard";

function TripsGrid({ trips, onDelete }) {
  if (trips.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">
          No trips saved yet ✈️
        </h2>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trips.map((trip) => (
        <TripCard
          key={trip._id}
          trip={trip}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TripsGrid;