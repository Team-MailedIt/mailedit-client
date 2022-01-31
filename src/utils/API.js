import axios from "axios";
import jwtDecode from "jwt-decode";

const API = axios.create({
  baseURL: "https://api.mailedit.me/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// intercept the request
// API.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("accessToken");
//   accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

//   return config;
// });

// intercept the response
// API.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err) => {
//     // err: when access token is expired
//     const refreshToken = localStorage.getItem("refreshToken");
//     const originalRequest = err.config;

//     if (refreshToken != null) {
//       if (err.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;

//         const params = new URLSearchParams();
//         params.append("refresh", refreshToken);

//         const { data } = await API.post("/token/refresh", params, {
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//         });

//         localStorage.setItem("accessToken", data.access);
//         axios.defaults.headers.common.Authorization = `Bearer ${data.access}`;
//         return API(originalRequest);
//       }
//     }
//     return Promise.reject(err);
//   }
// );

API.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("accessToken");
  accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

  const refreshToken = localStorage.getItem("refreshToken");
  const expiredAt = localStorage.getItem("expiredAt");
  const now = Date.now();
  console.log("now: ", now);
  console.log("dif: ", expiredAt - now);

  // 50초 미만이라면
  if (refreshToken != null) {
    if (expiredAt - now < 50000) {
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

      console.log("토큰 재발급");

      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("expiredAt", jwtDecode(data.access).exp * 1000);

      config.headers["Authorization"] = `Bearer ${data.access}`;
    }
  }

  return config;
});

export default API;
