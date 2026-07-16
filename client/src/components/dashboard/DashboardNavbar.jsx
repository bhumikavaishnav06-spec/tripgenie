import { Link, useNavigate, useLocation } from "react-router-dom";

function DashboardNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/dashboard"
          className="text-3xl font-bold text-blue-600"
        >
          ✈️ TripGenie
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
 <Link
  to="/profile"
  className={isActive("/profile")}
>
  Profile
</Link>
          <Link
            to="/dashboard"
            className={isActive("/dashboard")}
          >
            Dashboard
          </Link>

          <Link
            to="/my-trips"
            className={isActive("/my-trips")}
          >


            
            My Trips
          </Link>

          <span className="text-gray-500">
            Hello,
            <span className="font-semibold text-black ml-1">
              {user?.name}
            </span>
          </span>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default DashboardNavbar;