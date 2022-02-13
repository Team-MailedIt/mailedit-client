import axios from 'axios';
import jwtDecode from 'jwt-decode';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});

// intercept request
API.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem('accessToken');
  accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);

  const refreshToken = localStorage.getItem('refreshToken');
  const accessExpiredAt = localStorage.getItem('accessExpiredAt');
  const refreshExpiredAt = localStorage.getItem('refreshExpiredAt');

  const now = Date.now();

  // if expiredAt exists in local storage
  const expiredAt = localStorage.getItem('expiredAt');
  if (expiredAt != null) {
    window.location.href = '/';
    alert('다시 로그인해 주세요.');

    localStorage.clear();
  }

  if (refreshToken != null) {
    // if the refresh token expires within a minute
    if (refreshExpiredAt - now < 60000) {
      localStorage.clear();
      window.location.href = '/';
      alert('다시 로그인해 주세요.');
    }

    // if the access token expires within a minute
    if (accessExpiredAt - now < 60000) {
      const params = new URLSearchParams();
      params.append('refresh', refreshToken);

      const { data } = await axios.post(
        'https://api.mailedit.me/api/token/refresh',
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      localStorage.setItem('accessToken', data.access);
      localStorage.setItem(
        'accessExpiredAt',
        jwtDecode(data.access).exp * 1000
      );

      config.headers['Authorization'] = `Bearer ${data.access}`;
    }
  }

  return config;
});

export default API;
