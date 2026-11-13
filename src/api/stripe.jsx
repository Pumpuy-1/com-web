import axios from 'axios'


export const payment = async (token) => 
    await axios.post(`https://com-backend-two.vercel.app/user/create-payment-intent`, {}, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})