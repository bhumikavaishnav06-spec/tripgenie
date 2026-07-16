import DashboardNavbar from "../components/dashboard/DashboardNavbar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50">
      <DashboardNavbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
  {children}
</main>
        
    </div>
  );
}

export default DashboardLayout;