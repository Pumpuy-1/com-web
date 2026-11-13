import axios from 'axios'


export const createCategory = async (token, form) => {
    // code body
    return axios.post(`https://com-backend-two.vercel.app/category`, form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const listCategory = async () => {
    // code body
    return axios.get(`https://com-backend-two.vercel.app/category`)
}

export const removeCategory = async (token, id) => {
    // code body
    return axios.delete(`https://com-backend-two.vercel.app/category/`+id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}