function EmptyState() {
  return (
    <div className="mx-auto max-w-xl p-10 text-center">
      <div className="rounded-xl bg-gray-100 p-8">
        <div className="text-5xl">🏨</div>

        <h2 className="mt-4 text-2xl font-bold">
          No bookings yet
        </h2>

        <p className="mt-2 text-gray-600">
          You haven't made any hotel bookings yet.
        </p>
      </div>
    </div>
  );
}

export default EmptyState;
