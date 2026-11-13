import axios from 'axios'


export const createCategory = async (token, form) => {
    // code body
    return axios.post(`${import.meta.env.VITE_API_URL}/category`, form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const listCategory = async () => {
    // code body
    return axios.get(`${import.meta.env.VITE_API_URL}/category`)
}

export const removeCategory = async (token, id) => {
    // code body
    return axios.delete(`${import.meta.env.VITE_API_URL}/category/`+id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}