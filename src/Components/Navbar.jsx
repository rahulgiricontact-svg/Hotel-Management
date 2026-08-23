import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 px-8 py-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo / Brand */}
        <h2 className="text-2xl font-bold">
          Hotel Booking
        </h2>

        {/* Navigation */}
        <ul className="flex items-center gap-8">
          <li>
            <Link to="/" className="hover:text-blue-200">
              Home
            </Link>
          </li>

          <li>
            <Link to="/hotels" className="hover:text-blue-200">
              Hotels
            </Link>
          </li>

          <li>
            <Link to="/bookings" className="hover:text-blue-200">
              My Bookings
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-200">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
