import axios from "axios";

const API = axios.create({
  baseURL: "https://mailedit.kro.kr/api",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

  const idToken = localStorage.getItem("idToken");
  idToken && (config.headers.Authorization = idToken);

  return config;
});

export default API;
