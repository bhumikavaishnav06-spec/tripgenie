const features = [
  {
    title: "AI Itinerary",
    description: "Generate smart travel plans instantly.",
    icon: "🤖",
  },
  {
    title: "Live Weather",
    description: "Get real-time weather updates.",
    icon: "🌤️",
  },
  {
    title: "Google Maps",
    description: "Discover attractions nearby.",
    icon: "🗺️",
  },
  {
    title: "Budget Planner",
    description: "Estimate your travel expenses.",
    icon: "💰",
  },
];

function Features() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">
        Why Choose TripGenie?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>

            <h3 className="text-xl font-semibold">{feature.title}</h3>

            <p className="mt-3 text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;