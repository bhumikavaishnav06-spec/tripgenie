function TripResult({ trip }) {
  if (!trip) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md mt-8 p-8">
      <h2 className="text-2xl font-bold mb-6">
        🌍 Your AI Travel Plan
      </h2>

      <div className="whitespace-pre-wrap text-gray-700 leading-8">
        {trip}
      </div>
    </div>
  );
}

export default TripResult;