const generateAccctNumber = async () => {
  let accountNumber = Math.floor(Math.random() * 10000000000) + 1
  return accountNumber
}


module.exports = {generateAccctNumber}