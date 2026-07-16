import { useEffect, useState } from "react";
import StatsCard from "./StatsCard";
import { getTrips } from "../../services/aiService";

function StatsGrid() {
  const [stats, setStats] = useState({
    totalTrips: 0,
    countries: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getTrips();

        if (response.success) {
          const trips = response.trips;

          const uniqueCountries = [
            ...new Set(
              trips.map((trip) =>
                trip.destination.toLowerCase().trim()
              )
            ),
          ];

          setStats({
            totalTrips: trips.length,
            countries: uniqueCountries.length,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      <StatsCard
        title="Trips Planned"
        value={stats.totalTrips}
        icon="✈️"
      />

      <StatsCard
        title="Countries"
        value={stats.countries}
        icon="🌍"
      />

      <StatsCard
        title="Saved Trips"
        value={stats.totalTrips}
        icon="❤️"
      />
    </div>
  );
}

export default StatsGrid;