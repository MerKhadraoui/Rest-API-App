const mongoose = require("mongoose");
const dcitDataSchema = new mongoose.Schema({
  userName: {
    type: String,

    trim: true,

    required: [true, "Name is must"],
  },
  userPass: {
    type: String,

    trim: true,

    required: [true, "Name is must"],
  },
  age: {
    type: Number,
    //required: true,
    required: [true, "Write age please"],
  },
  fbw: {
    type: Number,
    //required: true,
    required: [true, "Write age please"],
  },
  toolStack: Array,
  email: {
    type: String,
    //required: true,
    required: [true, "Enter your email"],
  },
  employeeAddedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
module.exports = mongoose.model("StudentDATA", dcitDataSchema);
