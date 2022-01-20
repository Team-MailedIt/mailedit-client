import axios from "axios";
import jwtDecode from "jwt-decode";

const API = axios.create({
  baseURL: "https://api.mailedit.me/api",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);
  //   const refreshToken = localStorage.getItem("refreshToken");

  //   if (refreshToken) {
  //     const exp = jwtDecode(accessToken).exp * 1000;
  //     const now = new Date();

  //     const params = new URLSearchParams();
  //     params.append("refresh", refreshToken);

  //     // 토큰 만료까지 5분 미만의 시간이 남았다면 재발급 요청
  //     if (exp - now < 1795000) {
  //       axios
  //         .post("https://api.mailedit.me/api/token/refresh", params, {
  //           headers: {
  //             "Content-Type": "application/x-www-form-urlencoded",
  //           },
  //         })
  //         .then((res) => {
  //           console.log("변경 토큰: ", res.data.access);

  //           API.defaults.headers.common[
  //             "Authorization"
  //           ] = `Bearer ${res.data.access}`;

  //           localStorage.setItem("accessToken", res.data.access);

  //           alert("토큰 재발급됨!");
  //         })
  //         .catch(() => {
  //           alert("토큰 재발급 중 오류!");
  //         });
  //     }
  //   }

  return config;
});

API.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err.response.status === 401) {
      const accessToken = localStorage.getItem("accessToken");
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

            alert("토큰 재발급됨! 아직은 요청 다시 시도해야 됨...!");
          })
          .catch(() => {
            alert("토큰 재발급 중 오류!");
          });
      }
    }
  }
);

export default API;
