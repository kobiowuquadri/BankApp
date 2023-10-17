const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

//connect to mongodb
const { connectToMongoose } = require("./config/db");

//middlewares
//express json parser middleware
app.use(express.json());


//users Router
const usersRoute = require("./routes/usersRoutes");
app.use("/api/users", usersRoute);

//admins Router
const adminsRoute = require("./routes/adminRoutes");
app.use("/api/admins", adminsRoute);

//account Router
const accountRoute = require("./routes/accountRoutes");
app.use("/api/account", accountRoute);

//account requests Router
const accountRequestRoute = require("./routes/accountRequestRoutes");
app.use("/api/request", accountRequestRoute);


app.get('/', (req, res) => {
  res.send('Hello Welcome to my Bank APP Backend')
})


connectToMongoose()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
