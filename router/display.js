const express = require("express");
const displayRouter = express.Router();
const StudentDATA = require("../model/studentModel");

displayRouter.get("/", (req, res) => {
  res.status(200).json({ messege: "this  display data" });
});
module.exports = displayRouter;
