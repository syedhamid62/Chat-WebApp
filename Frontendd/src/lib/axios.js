import axios from "axios";
console.log(import.meta.env.VITE_BASE_URL)
export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  withCredentials: true,
});