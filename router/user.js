const express = require("express");
const userRouter = express.Router();
const StudentDATA = require("../model/studentModel");

userRouter.get("/", (req, res) => {
  res.status(200).json({ messege: "this  get user data" });
});

module.exports = userRouter;
