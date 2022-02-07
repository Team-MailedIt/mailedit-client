import axios from "axios";
import jwtDecode from "jwt-decode";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  headers: {
    "Content-Type": "application/json",
  },
});

// intercept request
API.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("accessToken");
  accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

  const refreshToken = localStorage.getItem("refreshToken");
  const expiredAt = localStorage.getItem("expiredAt");
  const now = Date.now();

  // if the token expires within a minute
  if (refreshToken != null) {
    if (expiredAt - now < 60000) {
      const params = new URLSearchParams();
      params.append("refresh", refreshToken);

      const { data } = await axios.post(
        "https://api.mailedit.me/api/token/refresh",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("reissuing tokens");

      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("expiredAt", jwtDecode(data.access).exp * 1000);

      config.headers["Authorization"] = `Bearer ${data.access}`;
    }
  }

  return config;
});

export default API;
