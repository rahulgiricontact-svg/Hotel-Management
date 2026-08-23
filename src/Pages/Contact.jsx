function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-md">
        {/* Card heading */}
        <div className="bg-blue-600 px-8 py-8 text-white">
          <h1 className="text-3xl font-bold">
            Contact Us
          </h1>

          <p className="mt-3 max-w-2xl text-blue-100">
            Need help with a hotel or booking? Contact our team using
            the details below.
          </p>
        </div>

        {/* Contact details */}
        <div className="grid gap-8 p-8 sm:grid-cols-2 md:p-10">
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="font-semibold text-gray-900">
              Email
            </h2>
            <p className="mt-2 text-gray-600">
              support@hotelbooking.com
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="font-semibold text-gray-900">
              Phone
            </h2>
            <p className="mt-2 text-gray-600">
              +977 98436178291
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="font-semibold text-gray-900">
              Address
            </h2>
            <p className="mt-2 text-gray-600">
              Ranipokhari, Kathmandu, Nepal
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="font-semibold text-gray-900">
              Working hours
            </h2>
            <p className="mt-2 text-gray-600">
              Sunday–Friday, 9:00 AM–6:00 PM
            </p>
          </div>
        </div>

        {/* Card footer */}
        <div className="border-t border-gray-200 bg-gray-50 px-8 py-4">
          <p className="text-sm text-gray-500">
            Our support team usually responds within 24 hours.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Contact;