import axios from "axios";

// https://ecom2026-web.vercel.app/api/admin/orders

export const getOrdersAdmin = async (token) => {
  // code body
  return axios.get(`https://com-backend-two.vercel.app/admin/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const changeOrderStatus = async (token, orderId, orderStatus) => {
  // code body
  return axios.put(
    `https://com-backend-two.vercel.app/admin/order-status`,
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
  return axios.get(`https://com-backend-two.vercel.app/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const changeUserStatus = async (token,value) => {
  // code body
  return axios.post(`https://com-backend-two.vercel.app/change-status`,value, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const changeUserRole = async (token,value) => {
  // code body
  return axios.post(`https://com-backend-two.vercel.app/change-role`,value, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
