import React, { useState, useEffect } from 'react'

function AccountNumberGenerator() {
    const [accountNumber, setAccountNumber] = useState('');

    useEffect(() => {
      const fetchAccountNumber = async () => {
        const response = await fetch('http://localhost:5000/generateacctnumber', {
          method: 'POST',
        });
  
        const data = await response.json();
  
        setAccountNumber(data.accountNumber);
      };
  
      fetchAccountNumber();
    }, []);

  return (
    <div>
    <h1>Your account number is:</h1>
    <p>{accountNumber}</p>
  </div>
  )
}

export default AccountNumberGenerator