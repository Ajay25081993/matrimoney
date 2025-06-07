import axios from 'axios';
import { API_URLS } from '../constant/apiurls';
// config


// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: API_URLS.BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // or use sessionStorage if needed
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
