const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB is connected on ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(
      "MongoDB is not connected! exiting the server".red.underline.bold
    );
    process.exit(1);
  }
};

module.exports = connectDB;
