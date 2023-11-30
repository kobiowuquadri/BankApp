import axios from "axios";

export const signInCustomer = async (payload) => {
    const response = await axios.post('http://localhost:5000/api/v1/signin-customer', payload, {
       withCredentials: true,
    })
 
    const { token } = response?.data
    localStorage.setItem('customerAccessToken', token);
    console.log(response?.data)
    return response
 }