function Contact() {
  return (
    <div className="mx-auto max-w-3xl p-8">
      <div className="rounded-xl bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">
          Contact Us
        </h1>

        <p className="mt-3 text-gray-600">
          Have a question or need help with your booking?
          Feel free to contact us.
        </p>

        <div className="mt-6 space-y-3">
          <p>
            📧 <strong>Email:</strong> hotelbooking@example.com
          </p>

          <p>
            📞 <strong>Phone:</strong> +977 9800000000
          </p>

          <p>
            📍 <strong>Address:</strong> Kathmandu, Nepal
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
