const StudentDATA = require("../model/studentModel");
const express = require("express");

const getOneStudent = async (req, res, next) => {
  let student;
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

const studentAge = async (req, res, next) => {
  let student;
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

const studentFBW = async (req, res, next) => {
  let student;
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
module.exports = {
  getOneStudent,
  studentAge,
  studentFBW,
};
