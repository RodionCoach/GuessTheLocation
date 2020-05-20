import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_API;

export const http = axios.create({
  baseURL,
});
