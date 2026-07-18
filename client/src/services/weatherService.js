import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getWeather = async (city) => {
  const response = await axios.get(`${API_URL}/${city}`);
  return response.data;
};