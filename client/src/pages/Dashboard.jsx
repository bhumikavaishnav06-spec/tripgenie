import DashboardLayout from "../layouts/DashboardLayout";

import HeroSection from "../components/dashboard/HeroSection";
import StatsGrid from "../components/dashboard/StatsGrid";
import TripForm from "../components/dashboard/TripForm";
import RecentTrips from "../components/dashboard/RecentTrips";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <HeroSection />

        <StatsGrid />

        <TripForm />

        <RecentTrips />

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;