function ProfileStats({ totalTrips, countries }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white rounded-2xl shadow-md p-6 text-center">

        <h2 className="text-gray-500">
          Trips Planned
        </h2>

        <h1 className="text-4xl font-bold text-blue-600 mt-3">
          {totalTrips}
        </h1>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 text-center">

        <h2 className="text-gray-500">
          Countries
        </h2>

        <h1 className="text-4xl font-bold text-green-600 mt-3">
          {countries}
        </h1>

      </div>

    </div>
  );
}

export default ProfileStats;