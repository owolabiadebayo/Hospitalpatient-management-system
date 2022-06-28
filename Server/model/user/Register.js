// // Do Schema for User
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     trim: true,
//     required: "First Name is required",
//   },
//   lastName: {
//     type: String,
//     trim: true,
//     required: "Last Name is required",
//   },
//   email: {
//     type: String,
//     unique: true,
//     trim: true,
//     required: "Email is required",
//   },
//   password: {
//     type: String,
//     min: 6,
//     max: 64,
//     required: "Password is required",
//   },
//   gender: {
//     type: String,
//     required: "Gender is required",
//   },
//   Condition: {
//     type: String,
//   },
//   Surgeries: {
//     type: String,
//   },
//   Medication: {
//     type: String,
//   },
// });
// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY);
//   return token;
// };

// export default mongoose.model("User", userSchema);
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  Conditions: { type: String, required: true },
  Surgeries: { type: String, required: true },
  Medications: { type: String, required: true },
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY);
  return token;
};
const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = joi.object({
    firstName: joi.string().required().label("First Name"),
    lastName: joi.string().required().label("Last Name"),
    email: joi.string().required().email().label("Email"),
    password: passwordComplexity().required().label("Password"),
    gender: joi.string().required().label("Gender"),
    Conditions: joi.string().required().label("Conditions"),
    Surgeries: joi.string().required().label("Surgeries"),
    Medications: joi.string().required().label("Medications"),
  });
  return schema.validate(data);
};
module.exports = { User, validate };

//Task do for login
