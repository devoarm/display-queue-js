const axios = require("axios").default;
const apiUrl = localStorage.getItem("apiUrl") || ''
const token = localStorage.getItem("token") || ''
const http = axios.create({
  baseURL:  apiUrl,
  timeout: 1000,
  headers: { Authorization: `Bearer ${token}` },
});

export default http;
