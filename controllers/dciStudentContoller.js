const StudentDATA = require("../model/studentModel");
const express = require("express");
const getAllstudents = async (req, res) => {
  try {
    const students = await StudentDATA.find();

    console.log(employees);
    res.status(200).json(
      students.map((student) => {
        return {
          studentId: student._id,
          studentName: student.userName,
          userPass: student.userPass,
          age: student.age,
          fbw: student.fbw,
          toolStack: student.toolStack,
          studentAddedDate: student.employeeAddedDate,
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
