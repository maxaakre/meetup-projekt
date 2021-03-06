import axios from "axios";

const api = axios.create({ baseURL: "/api" });

export const setAuthHeader = function(token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
export const clearAuthHeader = function() {
  delete api.defaults.headers.common["Authorization"];
};

export const register = async (newUser) => {
  console.log("POST /register", " - Payload: ", newUser);
  const response = await api.post("/register", newUser);
  // console.log("Response: ", response);
  return response.data;
};

export const login = async (credentials) => {
  console.log("POST api/auth", " - Payload: ", credentials);
  const response = await api.post("/auth", credentials);
  // console.log("Response: ", response);
  return response.data;
};
export const fetchProducts = async () => {
  console.log("GET /products");
  const response = await api.get("/products");
  // console.log("Response: ", response);
  return response.data;
};
export const createProduct = async (newProduct) => {
  console.log("POST /event", " - Payload: ", newProduct);
  const response = await api.post("/event", newProduct);
  // console.log("Response: ", response);
  return response.data.product;
};
