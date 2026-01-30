import axios from "axios";

export const baseUrl = "http://localhost:8002/api";

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
