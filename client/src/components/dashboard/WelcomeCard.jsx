function WelcomeCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h1 className="text-3xl font-bold">
        👋 Welcome, {user?.name}
      </h1>

      <p className="text-gray-500 mt-3">
        Ready to plan your next adventure with AI?
      </p>
    </div>
  );
}

export default WelcomeCard;