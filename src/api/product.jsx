import axios from "axios";

export const createProduct = async (token, form) => {
  // code body
  return axios.post(`https://com-backend-two.vercel.app/product`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listProduct = async (count = 20) => {
  // code body
  return axios.get(`https://com-backend-two.vercel.app/products/` + count);
};

export const readProduct = async (token, id) => {
  // code body
  return axios.get(`https://com-backend-two.vercel.app/product/` + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const deleteProduct = async (token, id) => {
  // code body
  return axios.delete(`https://com-backend-two.vercel.app/product/` + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const updateProduct = async (token, id, form) => {
  // code body
  return axios.put(`https://com-backend-two.vercel.app/product/` + id, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadFiles = async (token, form) => {
  // code
  // console.log('form api frontent', form)
  return axios.post(
    `https://com-backend-two.vercel.app/images`,
    {
      image: form,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const removeFiles = async (token, public_id) => {
  // code
  // console.log('form api frontent', form)
  return axios.post(
    `https://com-backend-two.vercel.app/removeimages`,
    {
      public_id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const searchFilters = async (arg) => {
  // code body
  return axios.post(`https://com-backend-two.vercel.app/search/filters`, arg);
};

export const listProductBy = async (sort, order, limit) => {
  // code body
  return axios.post(`https://com-backend-two.vercel.app/productby`, {
    sort,
    order,
    limit,
  });
};
