const StudentDATA = require("../model/studentModel");
const express = require("express");

const getOneStudent = async (req, res, next) => {
  // let student;
  try {
    student = await StudentDATA.findOne({
      userName: req.params.userName,
    });

    if (student == null) {
      // NOt found
      // console.log(res.student);
      return res.status(404).json({ message: "Sorry, data NOT FOUND." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.student = student;
  next();
};
// Fore the /:userName Endpoint
// check if the user is above 18 years old
const studentAge = async (req, res, next) => {
  let ageStudent;
  try {
    ageStudent = await StudentDATA.find();
    let arr = ageStudent.map((elem) => {
      if (elem.age < 18) {
        return res.status(404).json({
          message:
            "We can not validate your user. we don't accept pp that are below 18 years of age",
        });
      }
    });
    res.ageStudent = ageStudent;
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
  res.ageStudent = ageStudent;
  next();
};
//check if the user belongs to our FBW
const studentFBW = async (req, res, next) => {
  let fbwStudent;
  try {
    fbwStudent = await StudentDATA.find();
    let arr = fbwStudent.map((elem) => {
      if (!elem.fbw == 48) {
        return res.status(404).json({
          message:
            "We can not validate your user. They are not a member of FBW48",
        });
      }
    });
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
  res.fbwStudent = fbwStudent;
  next();
  next();
};
// // fore the /display/:name Endpoint
// const firstCharacter = async (req, res, next) => {
//   next();
// };
// const sortArr = async (req, res, next) => {
//   next();
// };
// const stringToInt = async (req, res, next) => {
//   next();
// };
module.exports = {
  getOneStudent,
  studentAge,
  studentFBW,
  // firstCharacter,
  // stringToInt,
  // sortArr,
};
