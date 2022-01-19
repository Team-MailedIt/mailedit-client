import axios from 'axios';
// import jwtDecode from "jwt-decode";

const API = axios.create({
  baseURL: 'https://api.mailedit.me/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((config) => {
  // 요청을 보내기 전에 헤더에 토큰 값을 붙이기
  const accessToken = localStorage.getItem('accessToken');
  accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

  // 구글 로그인의 경우 id token 값을 헤더에 붙이기
  // const idToken = localStorage.getItem("idToken");
  // idToken && (config.headers.Authorization = idToken);

  //   if (idToken != null) {
  //     config.headers.Authorization = idToken
  //   } else if (accessToken != null) {
  //     config.headers.Authorization = `Bearer ${accessToken}`
  //   } else {

  //   }

  //   // const refreshToken = localStorage.getItem("refreshToken");

  //   // const exp = jwtDecode(accessToken).exp * 1000;
  //   // const now = Date.now();

  //   // if (refreshToken) {
  //   //   const params = new URLSearchParams();
  //   //   params.append("refresh", refreshToken);

  //   //   // 토큰 만료까지 5분 미만의 시간이 남았다면 재발급 요청
  //   //   if (exp - now < 30000) {
  //   //     axios
  //   //       .post("https://mailedit.kro.kr/api/token/refresh", params, {
  //   //         headers: {
  //   //           "Content-Type": "application/x-www-form-urlencoded",
  //   //         },
  //   //       })
  //   //       .then((res) => {
  //   //         localStorage.setItem("accessToken", res.data.access);
  //   //         alert("토큰 재발급됨!");
  //   //       })
  //   //       .catch((err) => {
  //   //         console.log("err: ", err);
  //   //         alert("토큰 재발급 중 오류!");
  //   //       });
  //   //   }
  //   // }
  return config;
});

export default API;
