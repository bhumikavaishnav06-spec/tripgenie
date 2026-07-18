import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import InputField from "../components/auth/InputField";
import SubmitButton from "../components/auth/SubmitButton";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const API_URL = import.meta.env.VITE_API_URL;

      const response = await axios.post(
        `${API_URL}/auth/register`,
        formData
      );

      toast.success(
        response.data.message || "Registration Successful!"
      );

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Create Account"
        subtitle="Start planning your next adventure"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <InputField
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            type="password"
            name="password"
            placeholder="Create your password"
            value={formData.password}
            onChange={handleChange}
          />

          <SubmitButton
            loading={loading}
            text="Create Account"
          />

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}

export default Register;