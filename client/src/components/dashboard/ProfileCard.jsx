function ProfileCard({ user }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <div className="flex flex-col items-center">

        <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white text-5xl font-bold">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <h2 className="text-3xl font-bold mt-5">
          {user?.name}
        </h2>

        <p className="text-gray-500 mt-2">
          {user?.email}
        </p>

      </div>

    </div>
  );
}

export default ProfileCard;