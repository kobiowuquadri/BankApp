const generateAccountNumber = () => {
    const min = 1000000000
    const max = 9999999999

   return Math.floor(Math.random() * max + min)

}

module.exports = generateAccountNumber