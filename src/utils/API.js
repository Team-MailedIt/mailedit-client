import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

const API = axios.create({
  baseURL: "https://api.mailedit.me/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

// intercept the response
API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    // err: when access token is expired
    const originalRequest = err.config;

    if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");

      const params = new URLSearchParams();
      params.append("refresh", refreshToken);

      axios
        .post("https://api.mailedit.me/api/token/refresh", params, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => {
          API.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.access}`;

          localStorage.setItem("accessToken", res.data.access);

          originalRequest.headers = {
            Authorization: `Bearer ${res.data.access}`,
          };

          // retry the request
          return API(originalRequest);
        });
    }
    return Promise.reject(err);
  }
);

export default API;
