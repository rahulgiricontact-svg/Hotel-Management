import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ hotel }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function calculateNights() {
    if (!formData.checkIn || !formData.checkOut) {
      return 0;
    }

    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);

    const difference = checkOut - checkIn;

    const nights = difference / (1000 * 60 * 60 * 24);

    return nights > 0 ? nights : 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nights = calculateNights();

    if (nights <= 0) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    const totalPrice = nights * hotel.price;

    const newBooking = {
      id: Date.now(),
      hotelId: hotel.id,
      hotelName: hotel.name,
      hotelImage: hotel.image,
      price: hotel.price,
      nights: nights,
      totalPrice: totalPrice,
      name: formData.name,
      email: formData.email,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const updatedBookings = [
      ...existingBookings,
      newBooking,
    ];

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    navigate("/bookings");
  }

  const nights = calculateNights();
  const totalPrice = nights * hotel.price;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl rounded-xl bg-white p-6 shadow-md"
    >
      <div className="mb-4">
        <label className="mb-2 block font-semibold">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="w-full rounded-lg border px-4 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-semibold">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="w-full rounded-lg border px-4 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-semibold">
          Check-in
        </label>

        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
          className="w-full rounded-lg border px-4 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-semibold">
          Check-out
        </label>

        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          required
          className="w-full rounded-lg border px-4 py-2"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block font-semibold">
          Number of Guests
        </label>

        <input
          type="number"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          required
          className="w-full rounded-lg border px-4 py-2"
        />
      </div>

      <div className="mb-6 rounded-lg bg-gray-100 p-4">
        <p className="font-semibold">
          {hotel.name}
        </p>

        <p className="text-gray-600">
          ${hotel.price} / night
        </p>

        <p className="mt-2">
          Nights: <strong>{nights}</strong>
        </p>

        <p className="mt-2 text-xl font-bold text-green-600">
          Total: ${totalPrice}
        </p>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
      >
        Confirm Booking
      </button>
    </form>
  );
}

export default BookingForm;
