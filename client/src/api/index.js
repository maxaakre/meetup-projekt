import axios from "axios";

const api = axios.create({ baseURL: "/api/users" });

export const setAuthHeader = function(token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
export const clearAuthHeader = function() {
  delete api.defaults.headers.common["Authorization"];
};

export const register = async (newUser) => {
  console.log("POST /api/users", " - Payload: ", newUser);
  const response = await api.post("/users", newUser);
  console.log("Response: ", response);
  return response.data;
};

export const login = async (credentials) => {
  console.log("POST /api/users", " - Payload: ", credentials);
  const response = await api.post("/auth", credentials);
  console.log("Response: ", response);
  return response.data;
};
