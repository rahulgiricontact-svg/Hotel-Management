function BookingSummary({ booking }) {
  return (
    <div className="mt-5 border-t pt-4">
      <h3 className="mb-3 text-lg font-bold">
        Booking Summary
      </h3>

      <div className="space-y-2 text-gray-600">
        <p>
          <strong>Check-in:</strong> {booking.checkIn}
        </p>

        <p>
          <strong>Check-out:</strong> {booking.checkOut}
        </p>

        <p>
          <strong>Nights:</strong> {booking.nights}
        </p>

        <p>
          <strong>Guests:</strong> {booking.guests}
        </p>

        <p>
          <strong>Price per night:</strong> ${booking.price}
        </p>
      </div>

      <div className="mt-4 rounded-lg bg-green-50 p-4">
        <p className="text-xl font-bold text-green-600">
          Total Fare: ${booking.totalPrice}
        </p>
      </div>
    </div>
  );
}

export default BookingSummary;
