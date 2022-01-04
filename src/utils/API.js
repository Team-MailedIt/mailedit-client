import axios from "axios";

export const API = axios.create({
  baseURL: REACT_APP_API_PATH,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = token && `Bearer ${token}`;
  return config;
});
