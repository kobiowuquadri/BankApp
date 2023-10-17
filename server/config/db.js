const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectToMongoose = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Database');
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  connectToMongoose,
};
