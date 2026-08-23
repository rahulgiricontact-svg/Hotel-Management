import { useState } from "react";
import SearchInput from "../Components/SearchInput";
import HotelList from "../Components/HotelList";
import hotels from "../data/hotels";

function Hotels() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Our Hotels</h1>

      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <HotelList hotels={filteredHotels} />
    </div>
  );
}

export default Hotels;
