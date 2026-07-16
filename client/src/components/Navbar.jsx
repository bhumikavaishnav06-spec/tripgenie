import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <div className="text-3xl font-bold text-blue-600">
          🌍 TripGenie
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 text-lg">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Destinations
          </Link>

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            About
          </Link>

        </div>

        {/* Buttons */}
        <div className="space-x-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;