import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || (import.meta.env.MODE === "development" ? `http://${window.location.hostname}:5000/api` : "/api"),
  withCredentials: true,
});
