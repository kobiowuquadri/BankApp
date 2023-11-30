import axios from "axios"

export const signUpAdmin = async (payload) => {
   const response = await axios.post('http://localhost:5000/api/v1/signup-admin', payload, {
    withCredentials: true,
   })
   console.log(response)  
   return response
}

export const signInAdmin = async (payload) => {
   const response = await axios.post('http://localhost:5000/api/v1/signin-admin', payload, {
      withCredentials: true,
   })

   const { token } = response?.data
   localStorage.setItem('adminAccessToken', token);
   console.log(response)
   return response
}

export const createNewUser = async (payload) => {
   const adminAccessToken = localStorage.getItem('adminAccessToken')
   console.log(adminAccessToken)
   const response = await axios.post('http://localhost:5000/api/v1/create-user', payload, {
      withCredentials: true,
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization:`Bearer ${adminAccessToken}`
      }
   })
   console.log(response)
   return response
}


export const depositUser = async (payload) => {
   const adminAccessToken = localStorage.getItem('adminAccessToken')
   console.log(adminAccessToken)

   const response = await axios.put('http://localhost:5000/api/v1/credit-user', payload, {
      withCredentials: true,
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization:`Bearer ${adminAccessToken}`
      }
   })
   console.log(response)
   return response
}

// export const deleteUserAccount = async (id) => {
//    const adminAccessToken = localStorage.getItem('adminAccessToken');

//    try {
//       const response = await axios.delete(
//          `http://localhost:5000/api/v1/delete-user/${id}`,
//          {
//             withCredentials: true,
//             headers: {
//                Accept: 'application/json',
//                'Content-Type': 'application/json',
//                Authorization: `Bearer ${adminAccessToken}`,
//             },
//          }
//       );

//       console.log(response.data);
//       return response.data;
//    } catch (error) {
//       console.error(error);
//       throw error;
//    }
// };
