// Connect to MongoDB
const mongoose = require("mongoose");

const connectDb = () => {
  // console.log("Connecting to MongoDB");
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("DB Error:" + err));
};

module.exports = { connectDb };
