function SearchBox() {
  return (
    <div className="-mt-12 relative z-20">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6 flex gap-4">

        <input
          type="text"
          placeholder="Where do you want to travel?"
          className="flex-1 border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-600 text-white px-8 rounded-xl hover:bg-blue-700 transition">
          Plan Trip 🚀
        </button>

      </div>
    </div>
  );
}

export default SearchBox;