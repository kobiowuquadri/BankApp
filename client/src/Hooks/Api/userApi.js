import axios from "axios";

export const signInCustomer = async (payload) => {
    const response = await axios.post('http://localhost:5000/api/v1/signin-customer', payload, {
       withCredentials: true,
    })
 
    const { token } = response?.data
    const {user} = response?.data
    localStorage.setItem('customerAccessToken', token);
    localStorage.setItem('currentUser', JSON.stringify(user));
    console.log(response)
    return response
 }

 export const transferMoney = async (payload) => {

    const response = await axios.put('http://localhost:5000/api/v1/tranfer-funds', payload, {
       withCredentials: true,
    })
    console.log(response)
    return response
 }

