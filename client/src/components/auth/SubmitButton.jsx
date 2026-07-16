function SubmitButton({ loading, text }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition duration-300 disabled:opacity-50"
    >
      {loading ? "Please wait..." : text}
    </button>
  );
}

export default SubmitButton;