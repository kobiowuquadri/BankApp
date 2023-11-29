
const generateAccctNumber = () => {
    const accountNum = Math.floor(Math.random()  * 10000000000) + 1
    console.log(accountNum)
    return accountNum
}

module.exports = generateAccctNumber