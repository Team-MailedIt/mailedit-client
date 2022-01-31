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
  accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

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

    console.log("무한루프?");
    if (err.response.status === 401 && !originalRequest._retry) {
      console.log("무한루프!");
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

// API.interceptors.request.use(async (config) => {
//   const refreshToken = localStorage.getItem("refreshToken");
//   const expiredAt = localStorage.getItem("expiredAt");
//   const accessToken = localStorage.getItem("accessToken");
//   const now = Date.now();
//   console.log("sth went wrong...");
//   accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

//   if (expiredAt - now < 0 && refreshToken) {
//     const params = new URLSearchParams();
//     params.append("refresh", refreshToken);

//     const { data } = await API.post("/token/refresh", params, {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });

//     console.log("토큰 재발급");

//     localStorage.setItem("accessToken", data.access);
//     config.headers["Authorization"] = `Bearer ${data.access}`;
//   }

//   return config;
// });

export default API;
