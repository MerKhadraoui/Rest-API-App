const express = require("express");
const { modelName } = require("../model/studentModel");
const displayRouter = express.Router();
const StudentDATA = require("../model/studentModel");
const {
  getAllstudents,
  getOneStudent,
} = require("../controllers/dciStudentContoller");
displayRouter.get("/", (req, res) => {
  res.status(200).json({ messege: "this  display data" });
});
//displayRouter.route("/:userName").get(getOneStudent);
module.exports = displayRouter;
