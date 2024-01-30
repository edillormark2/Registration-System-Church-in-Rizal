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
