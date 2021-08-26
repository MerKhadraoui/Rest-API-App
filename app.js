const express = require("express");
const app = express();
const morgan = require("morgan");
const userRouter = require("./router/user");
const displayRouter = require("./router/display");
//  Development mode info
app.use(morgan("dev"));
// to process the json data
app.use(express.json());

//connecting my monogDB with express
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("DB is connected 😎"))
  .catch((err) => {
    console.log(`There was a problem ${err.message}`);
  });

app.use("/user", userRouter);
app.use("/display", displayRouter);
app.get("/", (req, res) => {
  res.status(200).send("Welcome to our app");
});
module.exports = app;
