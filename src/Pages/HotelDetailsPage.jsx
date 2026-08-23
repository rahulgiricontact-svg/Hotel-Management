import { useParams } from "react-router-dom";
import hotels from "../data/hotels";
import HotelDetails from "../Components/HotelDetails";

function HotelDetailsPage() {
  const { id } = useParams();

  const hotel = hotels.find((hotel) => hotel.id === Number(id));

  if (!hotel) {
    return <h1>Hotel not found</h1>;
  }

  return <HotelDetails hotel={hotel} />;
}

export default HotelDetailsPage;
