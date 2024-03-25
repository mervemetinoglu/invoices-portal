import axios from 'axios';
import {getAuthToken} from '../helpers/authToken';

const API = axios.create({
  baseURL: '',
  headers: {
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

API.interceptors.request.use(
  (config) => {
    const token = getAuthToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete API.defaults.headers.common.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
