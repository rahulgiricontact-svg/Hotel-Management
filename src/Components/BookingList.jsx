import { useEffect, useState } from "react";
import BookingSummary from "./BookingSummary";
import EmptyState from "./EmptyState";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(savedBookings);
  }, []);

  function cancelBooking(bookingId) {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== bookingId
    );

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);
  }

  if (bookings.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-6 p-8 md:grid-cols-2">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="overflow-hidden rounded-xl bg-white shadow-md"
        >
          <img
            src={booking.hotelImage}
            alt={booking.hotelName}
            className="h-48 w-full object-cover"
          />

          <div className="p-5">
            <h2 className="text-xl font-bold">
              {booking.hotelName}
            </h2>

            <div className="mt-4 space-y-2 text-gray-600">
              <p>
                <strong>Guest:</strong> {booking.name}
              </p>

              <p>
                <strong>Email:</strong> {booking.email}
              </p>
            </div>

            <BookingSummary booking={booking} />

            <button
              onClick={() => cancelBooking(booking.id)}
              className="mt-5 w-full rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
            >
              Cancel Booking
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingList;
