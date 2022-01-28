import axios from "axios";

const API = axios.create({
  baseURL: "https://api.mailedit.me/api",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

  return config;
});

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const originalRequest = err.config;
    console.log("err: ", err);
    console.log("originalRequest: ", originalRequest);

    if (err.response.status === 401 && !originalRequest._retry) {
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
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

            originalRequest.headers = { Authorization: res.data.access };
            return axios(originalRequest);
          })
          .catch(() => {
            alert("토큰 재발급 중 오류!");
          });
      }
    }
    return Promise.reject(err);
  }
);

export default API;
