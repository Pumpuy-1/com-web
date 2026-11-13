import axios from "axios";

export const createUserCart = async (token, cart) => {
  // code body
  return axios.post(`${import.meta.env.VITE_API_URL}/user/cart`, cart, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listUserCart = async (token) => {
  // code body
  return axios.get(`${import.meta.env.VITE_API_URL}/user/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const saveAddress = async (token, address) => {
  // code body
  return axios.post(
    `${import.meta.env.VITE_API_URL}/user/address`,
    { address },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const saveOrder = async (token, payload) => {
  // code body
  return axios.post(`${import.meta.env.VITE_API_URL}/user/order`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getOrders = async (token) => {
  // code body
  return axios.get(`${import.meta.env.VITE_API_URL}/user/order`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
