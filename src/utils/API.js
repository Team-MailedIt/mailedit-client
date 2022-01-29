import axios from "axios";

const API = axios.create({
  baseURL: "https://api.mailedit.me/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// intercept the request
API.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

// intercept the response
API.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    // err: when access token is expired
    const originalRequest = err.config;

    if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");

      const params = new URLSearchParams();
      params.append("refresh", refreshToken);

      const { data } = await API.post("/token/refresh", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      localStorage.setItem("accessToken", data.access);
      axios.defaults.headers.common.Authorization = `Bearer ${data.access}`;
      return API(originalRequest);
    }
    return Promise.reject(err);
  }
);

export default API;
