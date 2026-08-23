import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />

      <div className="hotel-card-content">
        <h2>{hotel.name}</h2>
        <p>{hotel.location}</p>
        <p>⭐ {hotel.rating}</p>
        <p>${hotel.price} / night</p>

        <Link
          to={`/hotels/${hotel.id}`}
          className="mt-3 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default HotelCard;
