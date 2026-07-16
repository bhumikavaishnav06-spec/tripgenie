import { motion } from "framer-motion";

function AuthCard({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600">
          ✈️ TripGenie
        </h1>

        <h2 className="text-2xl font-semibold text-center mt-6">
          {title}
        </h2>

        <p className="text-gray-500 text-center mt-2 mb-6">
          {subtitle}
        </p>

        {children}
      </motion.div>
    </div>
  );
}

export default AuthCard;