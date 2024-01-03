import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://shop-ivx3.onrender.com',
});

export default axiosInstance;
