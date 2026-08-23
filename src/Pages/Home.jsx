function Home() {
  return (
    <div>
      {/* Welcome */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to Hotel Booking
        </h1>

        <p className="mt-3 text-gray-600">
          Find comfortable hotels and book your perfect stay.
        </p>
      </section>

      {/* Our History */}
      <section className="border-t px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold">
            Our History
          </h2>

          <p className="mt-3 text-gray-600">
            Our hotel booking service started in 2010 with a
            simple goal of helping travelers find comfortable
            and affordable places to stay.
          </p>
        </div>
      </section>

      {/* VIP Guests */}
      <section className="border-t px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold">
            Our VIP Guests
          </h2>

          <p className="mt-3 text-gray-600">
            We are happy to welcome business professionals,
            travelers, and special guests from around the world.
          </p>

          <ul className="mt-4 list-disc pl-6 text-gray-600">
            <li>Alexander Reed — Business Executive</li>
            <li>Isabella Carter — Travel Consultant</li>
            <li>Michael Anderson — Conference Guest</li>
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-t px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold">
            Guest Reviews
          </h2>

          <div className="mt-5 space-y-4">
            <div>
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <p className="text-gray-600">
                "Very comfortable rooms and excellent service."
              </p>
              <p className="font-semibold">— Aarav</p>
            </div>

            <div>
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <p className="text-gray-600">
                "The booking process was simple and convenient."
              </p>
              <p className="font-semibold">— Sophia</p>
            </div>

            <div>
              <p>⭐️⭐️⭐️⭐️</p>
              <p className="text-gray-600">
                "Great hotel choices and friendly staff."
              </p>
              <p className="font-semibold">— Daniel</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
