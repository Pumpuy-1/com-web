import axios from "axios";

// https://ecom2026-web.vercel.app/api/admin/orders

export const getOrdersAdmin = async (token) => {
  // code body
  return axios.get(`${import.meta.env.VITE_API_URL}/admin/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const changeOrderStatus = async (token, orderId, orderStatus) => {
  // code body
  return axios.put(
    `${import.meta.env.VITE_API_URL}/admin/order-status`,
    {
      orderId,
      orderStatus,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};


export const getListAllUsers = async (token) => {
  // code body
  return axios.get(`${import.meta.env.VITE_API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const changeUserStatus = async (token,value) => {
  // code body
  return axios.post(`${import.meta.env.VITE_API_URL}/change-status`,value, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const changeUserRole = async (token,value) => {
  // code body
  return axios.post(`${import.meta.env.VITE_API_URL}/change-role`,value, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
