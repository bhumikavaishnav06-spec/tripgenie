import { useEffect, useState } from "react";
import api from "../services/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import Destinations from "../components/Destinations";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await api.get("/health");
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error connecting to backend:", error);
        setMessage("❌ Backend is not running");
      }
    };

    fetchHealth();
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <SearchBox />

      {/* Backend Connection Status */}
      <div className="max-w-4xl mx-auto my-8 px-4">
        <div className="bg-green-100 border border-green-300 rounded-xl p-4 text-center shadow">
          <h2 className="text-xl font-semibold text-green-700">
            {message}
          </h2>
        </div>
      </div>

      <Destinations />

      <Features />

      <Footer />
    </>
  );
}

export default Home;