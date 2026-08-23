import hotel1 from "../assets/Images/hotel1.jpg";
import hotel2 from "../assets/Images/hotel2.jpg";
import hotel3 from "../assets/Images/hotel3.jpg";
import hotel4 from "../assets/Images/hotel4.jpg";
import hotel5 from "../assets/Images/hotel5.jpg";

const hotels = [
  {
    id: 1,
    name: "Hotel Himalayan",
    location: "Kathmandu, Nepal",
    price: 80,
    rating: 4.5,
    image: hotel1,
    description:
      "A comfortable hotel in the heart of Kathmandu with modern rooms and excellent service.",
    amenities: ["Free Wi-Fi", "Breakfast", "Parking", "Restaurant"],
  },
  {
    id: 2,
    name: "Everest View Hotel",
    location: "Pokhara, Nepal",
    price: 120,
    rating: 4.8,
    image: hotel2,
    description:
      "A beautiful hotel offering relaxing rooms and stunning views of the surrounding mountains.",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Breakfast", "Spa"],
  },
  {
    id: 3,
    name: "Kathmandu Grand Hotel",
    location: "Thamel, Kathmandu",
    price: 95,
    rating: 4.3,
    image: hotel3,
    description:
      "A modern hotel located near popular tourist attractions, restaurants, and shopping areas.",
    amenities: ["Free Wi-Fi", "Restaurant", "Room Service", "Parking"],
  },
  {
    id: 4,
    name: "Pokhara Lakeside Resort",
    location: "Pokhara, Nepal",
    price: 110,
    rating: 4.6,
    image: hotel4,
    description:
      "A peaceful lakeside resort perfect for travelers looking for comfort and relaxation.",
    amenities: ["Free Wi-Fi", "Lake View", "Breakfast", "Garden"],
  },
  {
    id: 5,
    name: "Hotel Annapurna",
    location: "Lalitpur, Nepal",
    price: 75,
    rating: 4.2,
    image: hotel5,
    description:
      "An affordable and comfortable hotel with convenient access to Patan's cultural attractions.",
    amenities: ["Free Wi-Fi", "Breakfast", "Restaurant", "Parking"],
  },
];

export default hotels;
