const jwt = require('jsonwebtoken')

const isAuthorized = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
      if (err) {
        throw new Error(err)
      }
      req.body.userId = decodedToken.id
      next()
    })
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Unauthorized' })
  }
}



module.exports = isAuthorized
