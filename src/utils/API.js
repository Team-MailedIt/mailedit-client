import axios from "axios";
import jwtDecode from "jwt-decode";

const API = axios.create({
  baseURL: "https://mailedit.kro.kr/api",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  // 요청을 보내기 전에 헤더에 토큰 값을 붙이기
  const accessToken = localStorage.getItem("accessToken");
  accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

  const idToken = localStorage.getItem("idToken");
  idToken && (config.headers.Authorization = idToken);

  return config;
});

API.interceptors.request.use((config) => {
  // 요청을 보내기 전에 access token의 만료 시간과 가까운지 확인
  const refreshToken = localStorage.getItem("refreshToken");
  const expiredAt = localStorage.getItem("exp");

  const exp = new Date(expiredAt);
  const now = new Date(Date.now());

  // 만료 시간과 현재 시간의 차이가 5분 미만이면 토큰 재발급 요청
  if (exp - now < 300000) {
    API.post("/token/refresh", JSON.stringify({ request: refreshToken })).then(
      (res) => {
        localStorage.setItem("accessToken", res.access);
      }
    );
  }

  return config;
});

export default API;
