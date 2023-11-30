

const generateAccctNumber = async () => {
    let accountNumber;
  
    while (!accountNumber) {
      accountNumber = Math.floor(Math.random() * 10000000000) + 1;
  
      // Check if the generated account number already exists in the database
      const existingUser = await userModel.findOne({ accountNumber: accountNumber });
  
      if (!existingUser) {
        // If the account number is unique, break out of the loop
        break;
      }
    }
  
    return accountNumber;
  };