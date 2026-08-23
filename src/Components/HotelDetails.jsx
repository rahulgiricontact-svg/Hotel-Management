import { Link } from "react-router-dom";

function HotelDetails({ hotel }) {
  return (
    <div className="mx-auto max-w-5xl p-8">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="h-96 w-full rounded-xl object-cover"
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold">{hotel.name}</h1>

        <p className="mt-2 text-gray-600">
          📍 {hotel.location}
        </p>

        <p className="mt-2">
          ⭐ {hotel.rating}
        </p>

        <p className="mt-4 text-2xl font-bold text-blue-600">
          ${hotel.price} / night
        </p>

        <p className="mt-6 text-gray-700">
          {hotel.description}
        </p>

        <h2 className="mt-6 text-xl font-bold">
          Amenities
        </h2>

        <ul className="mt-3 flex flex-wrap gap-3">
          {hotel.amenities.map((amenity) => (
            <li
              key={amenity}
              className="rounded-lg bg-gray-100 px-4 py-2"
            >
              {amenity}
            </li>
          ))}
        </ul>

        <Link
          to={`/booking/${hotel.id}`}
          className="mt-8 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default HotelDetails;
