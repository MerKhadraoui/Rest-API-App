const express = require("express");
const userRouter = express.Router();
const StudentDATA = require("../model/studentModel");
const {
  getOneStudent,
  studentAge,
  studentFBW,
} = require("../middleware/middlewares");
const {
  getAllstudents,
  addStudentData,
  updateOneStudent,
  udatAttStudentData,
} = require("../controllers/dciStudentContoller");

userRouter.route("/").get(getAllstudents).post(studentAge, addStudentData);
userRouter
  .route("/:userName")
  .put(getOneStudent, studentAge, udatAttStudentData)
  .patch(getOneStudent, updateOneStudent);

module.exports = userRouter;
