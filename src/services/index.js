import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getOrders = async () => {
  const response = await axios.get(API_URL + "/orders");
  return response;
};

export const addOrders = async (products, totalPrice) => {
  const response = await axios.post(API_URL + "/orders", { products, totalPrice });
  return response;
};

export const getProducts = async () => {
  const response = await axios.get(API_URL + "/products");
  return response.data;
};

export const addProduct = async (name, price) => {
  const response = await axios.post(API_URL + "/products", { name, price });
  return response.data;
};
