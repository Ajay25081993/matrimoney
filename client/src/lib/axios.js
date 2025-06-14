// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
//   withCredentials: true,
// });

import axios from 'axios';
import { API_URLS } from '../constants/apiUrls';

const axiosInstance = axios.create({
  baseURL: API_URLS.BASE_URL,
  withCredentials:true
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // or use sessionStorage if needed
   console.log(token);
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;