import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Welcome */}
      <section className="bg-blue-50 px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-medium text-blue-600">
            Find. Book. Relax.
          </p>

          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Find your perfect place to stay
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover comfortable hotels and enjoy a simple booking
            experience for your next journey.
          </p>

          <Link
            to="/hotels"
            className="mt-7 inline-block rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Explore Hotels
          </Link>
        </div>
      </section>

      {/* Our History */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900">
            Our History
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-gray-600">
            Our hotel booking service started in 2010 with a simple
            goal of helping travelers find comfortable and affordable
            places to stay. We continue to make hotel booking simple,
            reliable, and convenient.
          </p>
        </div>
      </section>

      {/* VIP Guests */}
      <section className="border-t border-gray-200 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900">
            Our VIP Guests
          </h2>

          <p className="mt-2 text-gray-600">
            We have welcomed many special guests over the years.
          </p>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li className="border-t border-gray-300 pt-4">
              <p className="font-semibold text-gray-900">
                Alexander Reed
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Business Executive
              </p>
            </li>

            <li className="border-t border-gray-300 pt-4">
              <p className="font-semibold text-gray-900">
                Isabella Carter
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Travel Consultant
              </p>
            </li>

            <li className="border-t border-gray-300 pt-4">
              <p className="font-semibold text-gray-900">
                Michael Anderson
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Conference Guest
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Guest Reviews */}
      <section className="border-t border-gray-200 bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900">
            Guest Reviews
          </h2>

          <p className="mt-2 text-gray-600">
            Read what our guests say about their experience.
          </p>

          <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
            <div className="border-b border-gray-300 pb-5">
              <p className="text-yellow-500">★★★★★</p>
              <p className="mt-2 text-gray-600">
                “Very comfortable rooms and excellent service.”
              </p>
              <p className="mt-2 font-semibold text-gray-900">
                Aarav
              </p>
            </div>

            <div className="border-b border-gray-300 pb-5">
              <p className="text-yellow-500">★★★★★</p>
              <p className="mt-2 text-gray-600">
                “The booking process was simple and convenient.”
              </p>
              <p className="mt-2 font-semibold text-gray-900">
                Sophia
              </p>
            </div>

            <div className="border-b border-gray-300 pb-5">
              <p className="text-yellow-500">★★★★☆</p>
              <p className="mt-2 text-gray-600">
                “Great hotel choices and friendly staff.”
              </p>
              <p className="mt-2 font-semibold text-gray-900">
                Daniel
              </p>
            </div>

            <div className="border-b border-gray-300 pb-5">
              <p className="text-yellow-500">★★★★★</p>
              <p className="mt-2 text-gray-600">
                “Easy checkout process and multiple payment options.”
              </p>
              <p className="mt-2 font-semibold text-gray-900">
                Rahul giri
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;