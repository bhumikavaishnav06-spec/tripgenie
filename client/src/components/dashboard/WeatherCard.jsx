function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        🌤 Current Weather
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <p>
          <strong>📍 Location:</strong>{" "}
          {weather.city}, {weather.country}
        </p>

        <p>
          <strong>🌡 Temperature:</strong>{" "}
          {weather.temperature}°C
        </p>

        <p>
          <strong>🤗 Feels Like:</strong>{" "}
          {weather.feelsLike}°C
        </p>

        <p>
          <strong>💧 Humidity:</strong>{" "}
          {weather.humidity}%
        </p>

        <p>
          <strong>💨 Wind:</strong>{" "}
          {weather.windSpeed} m/s
        </p>

        <p className="capitalize">
          <strong>☀️ Condition:</strong>{" "}
          {weather.description}
        </p>

      </div>

    </div>
  );
}

export default WeatherCard;