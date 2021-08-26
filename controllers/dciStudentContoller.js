const StudentDATA = require("../model/studentModel");
const express = require("express");
const addStudentData = async (req, res) => {
  const student = new StudentDATA({
    userName: req.body.userName,
    userPass: req.body.userPass,
    age: req.body.age,
    fbw: req.body.fbw,
    toolStack: req.body.toolStack,
    email: req.body.email,
  });
  try {
    // save
    console.log(student);
    const newStudent = await student.save();
    // 201 for Successful Created
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
const getAllstudents = async (req, res) => {
  try {
    const students = await StudentDATA.find();

    res.status(200).json(
      students.map((student) => {
        return {
          studentId: student._id,
          studentName: student.userName,
          userPass: student.userPass,
          age: student.age,
          fbw: student.fbw,
          toolStack: student.toolStack,
          studentAddedDate: student.studantAddedDate,
          request: {
            type: "GET",
            url: `http://localhost:5000/employees/${student.userName}`,
          },
        };
      })
    );
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
};
module.exports = { getAllstudents, addStudentData };
