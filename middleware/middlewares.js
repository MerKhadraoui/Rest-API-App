const StudentDATA = require("../model/studentModel");
const express = require("express");

const getOneStudent = async (req, res, next) => {
  const student;
  try {
    student = await StudentDATA.findOne({
      userName: req.params.userName,
    });

    if (student == null) {
      // NOt found
      console.log(res.student);
      return res.status(404).json({ message: "Sorry, data NOT FOUND." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.student = student;
  next();
};
// check if the user is above 18 years old
const studentAge = async (req, res, next) => {
  next();
};
//check if the user belongs to our FBW
const studentFBW = async (req, res, next) => {
  next();
};
module.exports = {
  getOneStudent,
  studentAge,
  studentFBW,
};
