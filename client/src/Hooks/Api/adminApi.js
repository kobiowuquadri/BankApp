import axios from "axios"

export const signUpAdmin = async (payload) => {
   const response = await axios.post('http://localhost:5000/api/v1/signup-admin', payload, {
    withCredentials: true,
   })

   console.log(response)
   const {token} = response?.data
   localStorage.setItem('adminToken', JSON.stringify(token))
   return response
}

export const signInAdmin = async (payload) => {
   const adminToken = localStorage.getItem('adminToken')
   console.log(adminToken)
   const response = await axios.post('http://localhost:5000/api/v1/signin-admin', payload, {
      withCredentials: true,
      headers:{
         Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization: `Bearer ${JSON.parse(adminToken)}`
       }
   })
   console.log(response)
   return response
}