function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <div className="text-4xl">
        {icon}
      </div>

      <h2 className="text-gray-500 mt-3">
        {title}
      </h2>

      <h1 className="text-3xl font-bold mt-2">
        {value}
      </h1>

    </div>
  );
}

export default StatsCard;