// lib/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v3-api-indoor-duration.natagw.my.id/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
