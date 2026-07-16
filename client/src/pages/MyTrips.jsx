import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import TripsGrid from "../components/dashboard/TripsGrid";
import { getTrips, deleteTrip } from "../services/aiService";
import toast from "react-hot-toast";

function MyTrips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrips = async () => {
    try {
      const response = await getTrips();

      if (response.success) {
        setTrips(response.trips);
      }
    } catch (error) {
      toast.error("Failed to load trips");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await deleteTrip(id);

      if (response.success) {
        toast.success("Trip Deleted");
        fetchTrips();
      }
    } catch (error) {
      toast.error("Failed to delete trip");
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        📂 My Trips
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <TripsGrid trips={trips} onDelete={handleDelete} />
      )}
    </DashboardLayout>
  );
}

export default MyTrips;