import mongoose from "mongoose";

const BRregSchema = new mongoose.Schema({
  email: Number,
  qualifications: String,
  surname: String,
  firstname: String,
  locality: String,
  status: String,
  grade: String,
  attended: String,
  school: String,
  number: String
});

const BRreg = mongoose.model("BRreg", BRregSchema);

export default BRreg;
const mongoose = require("mongoose");

const brregSchema = new mongoose.Schema({
  email: String,
  qualification: String,
  surname: String,
  firstname: String,
  locality: String,
  status: String,
  grade: String,
  attended: String,
  school: String,
  contact: Number,
  amen: String
});

const BRregModel = mongoose.model("BRreg", brregSchema);
module.exports = BRregModel;
