const express = require('express')
const cors = require('cors')
const connectToDB = require('./Database/db.js')
const router = require('./Routes/UserRoutes.js')
const app = express()
require('dotenv').config()


const port = process.env.PORT

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use(router)

connectToDB()

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
