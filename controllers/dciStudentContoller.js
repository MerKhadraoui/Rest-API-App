const StudentDATA = require("../model/studentModel");
const express = require("express");

const getAllstudents = async (req, res) => {
  try {
    const students = await StudentDATA.find();

    res.status(200).json(
      students.map((student) => {
        return {
          studentId: student._id,
          userName: student.userName,
          userPass: student.userPass,
          age: student.age,
          fbw: student.fbw,
          toolStack: student.toolStack,
          studentAddedDate: student.studantAddedDate,
          // request: {
          //   type: "GET",
          //   url: `http://localhost:5000/employees/${student.userName}`,
          // },
        };
      })
    );
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
};
const addStudentData = async (req, res) => {
  const student = new StudentDATA({
    userName: req.body.userName,
    userPass: req.body.userPass,
    age: req.body.age,
    fbw: req.body.fbw,
    email: req.body.email,
  });
  console.log("this is student" + student);
  try {
    // save

    const newStudent = await student.save();
    console.log("this new data " + student);
    // 201 for Successful Created
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
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
const updateOneStudent = async (req, res) => {
  const { userName, userPass, age, fbw, toolStack, email } = req.body;
  if (userName) {
    res.student.userName = userName;
  }
  if (userPass) {
    res.student.userPass = userPass;
  }
  if (age) {
    res.student.age = age;
  }
  if (fbw) {
    res.student.fbw = fbw;
  }
  if (toolStack) {
    res.student.toolStack = toolStack;
  }
  if (email) {
    res.student.email = email;
  }
  try {
    // save
    await res.student.save();
    // 200 for Successful OK
    res.status(200).json({ message: "data updated", data: res.student });
  } catch (err) {
    // 400 for Bad request
    res.status(400).json({ message: err.message });
  }
};
const udatAttStudentData = async (req, res) => {
  let apdatStuden;
  try {
    apdatStuden = await StudentDATA.updateOne(
      { userName: req.params.userName },
      {
        $set: {
          userPass: req.body.userPass,
          age: req.body.age,
          fbw: req.body.fbw,
          email: req.body.email,
        },
        // $currentDate: {
        //   studantAddedDate: Date.now,
        // },
      }
    );
    console.log(apdatStuden);
    res.status(200).json({ message: "Student Data Got updates" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports = {
  getAllstudents,
  addStudentData,
  getOneStudent,
  updateOneStudent,
  udatAttStudentData,
};
