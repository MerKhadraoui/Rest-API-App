const express = require("express");
const userRouter = express.Router();
const StudentDATA = require("../model/studentModel");
const {
  getAllstudents,
  addStudentData,
  getOneStudent,
  updateOneStudent,
} = require("../controllers/dciStudentContoller");

userRouter.route("/").get(getAllstudents).post(addStudentData);
userRouter.route("/:userName").get(getOneStudent);
module.exports = userRouter;
