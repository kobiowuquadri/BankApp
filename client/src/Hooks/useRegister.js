import React from 'react'
import { useState } from 'react'

function useRegister () {
  const [getAPI, useGetApi] = useState(null)

  try {
    useGetApi({
       username:username
    })
  } 
  catch (error) {

  }
}

export default useRegister
