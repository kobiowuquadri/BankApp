const express = require('express')
const app = express()

// middleware
require('dotenv').config()

const port = process.env.PORT

app.listen(port, ()=> {
    console.log(`Server running on port ${process.env.PORT}`)
})