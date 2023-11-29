const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectToDB = require('./Database/db.js')
const adminRouter = require('./Routes/adminRoutes.js')
const userRouter = require('./Routes/UserRoutes.js')
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
app.use(cookieParser());
// Routes
app.use("/api/v1", adminRouter)
app.use('/api/v1', userRouter)
connectToDB()

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
