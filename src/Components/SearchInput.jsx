function SearchInput({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-center gap-2">
      <input
        type="text"
        placeholder="Search for hotels..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-9 rounded-lg border px-4 py-2"
      />

      <button className="mt-9 rounded-lg bg-blue-600 px-5 py-2 text-white">
        Search
      </button>
    </div>
  );
}

export default SearchInput;
