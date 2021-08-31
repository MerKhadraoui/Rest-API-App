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

userRouter.route("/").get(getAllstudents).post(addStudentData);
userRouter
  .route("/:userName")
  .put(getOneStudent, udatAttStudentData)
  .patch(getOneStudent, updateOneStudent);

module.exports = userRouter;
