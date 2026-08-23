import BookingList from "../Components/BookingList";

function Bookings() {
  return (
    <div>
      <h1 className="p-8 text-3xl font-bold">
        My Bookings
      </h1>

      <BookingList />
    </div>
  );
}

export default Bookings;
