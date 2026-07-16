const destinations = [
  "Paris",
  "Bali",
  "Dubai",
  "Tokyo",
  "Maldives",
  "London",
];

function Destinations() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Popular Destinations
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {destinations.map((city) => (
          <div
            key={city}
            className="bg-blue-100 rounded-xl px-8 py-6 shadow hover:bg-blue-500 hover:text-white transition"
          >
            📍 {city}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;