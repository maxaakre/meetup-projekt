import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
  methods: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default {
  getMeetItems() {
    return apiClient.get("/api/meets");
  },
};
