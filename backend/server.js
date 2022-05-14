const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const colors = require("colors")


const { errorHandler } = require("./middleware/errorHandler.js");
const connectDB = require("./config/db.js")

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const app_env = process.env.NODE_ENV;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

app.use(errorHandler);

app.listen(PORT, (req, res) => {
  console.log(`Server running in ${app_env} environment on port: ${PORT}`);
});
