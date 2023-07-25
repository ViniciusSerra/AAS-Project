import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

api.interceptors.request.use(request => {
  const token = localStorage.getItem('user-token');
  if (token) {
    request.headers.Authorization = `Token ${token}`;
  }
  return request;
});

export default api;
