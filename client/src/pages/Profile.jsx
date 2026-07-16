import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ProfileCard from "../components/dashboard/ProfileCard";
import ProfileStats from "../components/dashboard/ProfileStats";
import { getTrips } from "../services/aiService";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    totalTrips: 0,
    countries: 0,
  });

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await getTrips();

        if (response.success) {
          const trips = response.trips;

          const uniqueCountries = [
            ...new Set(
              trips.map((trip) =>
                trip.destination.toLowerCase()
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

    fetchTrips();
  }, []);

  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        👤 My Profile
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        <ProfileCard user={user} />

        <div className="lg:col-span-2">
          <ProfileStats
            totalTrips={stats.totalTrips}
            countries={stats.countries}
          />
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Profile;