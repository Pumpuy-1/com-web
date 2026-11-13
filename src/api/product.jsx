import axios from "axios";

export const createProduct = async (token, form) => {
  // code body
  return axios.post(`${import.meta.env.VITE_API_URL}/product`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listProduct = async (count = 20) => {
  // code body
  return axios.get(`${import.meta.env.VITE_API_URL}/products/` + count);
};

export const readProduct = async (token, id) => {
  // code body
  return axios.get(`${import.meta.env.VITE_API_URL}/product/` + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const deleteProduct = async (token, id) => {
  // code body
  return axios.delete(`${import.meta.env.VITE_API_URL}/product/` + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const updateProduct = async (token, id, form) => {
  // code body
  return axios.put(`${import.meta.env.VITE_API_URL}/product/` + id, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadFiles = async (token, form) => {
  // code
  // console.log('form api frontent', form)
  return axios.post(
    `${import.meta.env.VITE_API_URL}/images`,
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
    `${import.meta.env.VITE_API_URL}/removeimages`,
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
  return axios.post(`${import.meta.env.VITE_API_URL}/search/filters`, arg);
};

export const listProductBy = async (sort, order, limit) => {
  // code body
  return axios.post(`${import.meta.env.VITE_API_URL}/productby`, {
    sort,
    order,
    limit,
  });
};
