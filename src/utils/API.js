import axios from "axios";

const API = axios.create({
  baseURL: "https://mailedit.kro.kr/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// API.interceptors.request.use((config) => {
//   // 요청을 보내기 전에 헤더에 토큰 값을 붙이기
//   const accessToken = localStorage.getItem("accessToken");
//   accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

//   const idToken = localStorage.getItem("idToken");
//   idToken && (config.headers.Authorization = idToken);

//   // const refreshToken = localStorage.getItem("refreshToken");
//   // const expiredAt = parseInt(localStorage.getItem("expiredAt"));

//   // const exp = expiredAt * 1000; // 13자리(밀리 초 단위로 변환)
//   // const now = Date.now(); // 13자리

//   // if (1795000 < exp - now < 1795001) {
//   //   API.post("/token/refresh", JSON.stringify({ request: refreshToken }));
//   //   console.log("확인");
//   // }

//   return config;
// });

API.interceptors.response.use((config) => {
  // 요청을 보내기 전에 access token의 만료 시간과 가까운지 확인
  const refreshToken = localStorage.getItem("refreshToken");
  const expiredAt = parseInt(localStorage.getItem("expiredAt"));

  const exp = expiredAt * 1000; // 13자리
  const now = Date.now(); // 13자리

  // 1800000: 30분
  // 만료 시간과 현재 시간의 차이가 5분(300000) 미만이면 토큰 재발급 요청
  if (refreshToken) {
    const params = new URLSearchParams();
    params.append("refresh", refreshToken);

    // 만료 시간과의 차이가 5초 ~ 5.001초 만큼 남았다면
    if (exp - now < 30000) {
      API.post("/token/refresh", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((res) => {
          localStorage.setItem("accessToken", res.data.access);
          console.log(res);
          // localStorage.setItem("expiredAt", jwtDecode(res.data.access).exp);
          alert("토큰 재발급됨!");
        })
        .catch((err) => {
          console.log("err: ", err);
          alert("토큰 재발급 중 오류!");
        });
      console.log("확인");
    }
  }

  return config;
});

export default API;
