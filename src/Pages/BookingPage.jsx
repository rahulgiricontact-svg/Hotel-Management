import { useParams } from "react-router-dom";
import hotels from "../data/hotels";
import BookingForm from "../Components/BookingForm";

function BookingPage() {
  const { id } = useParams();

  const hotel = hotels.find((hotel) => hotel.id === Number(id));

  if (!hotel) {
    return <h1>Hotel not found</h1>;
  }

  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Book {hotel.name}
      </h1>

      <BookingForm hotel={hotel} />
    </div>
  );
}

export default BookingPage;
