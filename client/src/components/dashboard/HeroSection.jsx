function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl text-white p-10 shadow-xl">

      <h1 className="text-5xl font-bold">
        🌍 Plan Your Next Adventure
      </h1>

      <p className="mt-4 text-lg opacity-90 max-w-2xl">
        TripGenie uses AI to generate personalized travel itineraries,
        recommend hotels, estimate budgets, and help you explore the world.
      </p>

      <button
  onClick={() =>
    document
      .getElementById("trip-form")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
>
  ✈️ Start Planning
</button>

    </div>
  );
}

export default HeroSection;