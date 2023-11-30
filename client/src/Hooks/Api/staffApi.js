import axios from "axios";

export const signInStaff = async (payload) => {
    const response = await axios.post('http://localhost:5000/api/v1/signin-staff', payload, {
       withCredentials: true,
    })
 
    const { token } = response?.data
    const {user} = response?.data
    localStorage.setItem('staffAccessToken', token);
    localStorage.setItem('currentStaff', JSON.stringify(user));
    console.log(response)
    return response
 }

 export const createNewUser = async (payload) => {
    const staffAccessToken = localStorage.getItem('staffAccessToken')

    const response = await axios.post('http://localhost:5000/api/v1/create-user', payload, {
       withCredentials: true,
       headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:`Bearer ${staffAccessToken}`
       }
    })
    console.log(response)
    return response
 }
 
 
 export const depositUser = async (payload) => {
    const staffAccessToken = localStorage.getItem('staffAccessToken')
    console.log(staffAccessToken)
 
    const response = await axios.put('http://localhost:5000/api/v1/credit-user', payload, {
       withCredentials: true,
       headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:`Bearer ${staffAccessToken}`
       }
    })
    console.log(response)
    return response
 }
 