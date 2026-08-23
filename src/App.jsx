import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelDetailsPage from "./Pages/HotelDetailsPage";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Hotels from "./Pages/Hotels";
import BookingPage from "./Pages/BookingPage";
import Bookings from "./Pages/Bookings";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetailsPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
