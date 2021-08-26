const express = require("express");
const userRouter = express.Router();
const StudentDATA = require("../model/studentModel");
const {
  getAllstudents,
  addStudentData,
} = require("../controllers/dciStudentContoller");

userRouter.route("/").get(getAllstudents).post(addStudentData);

module.exports = userRouter;
