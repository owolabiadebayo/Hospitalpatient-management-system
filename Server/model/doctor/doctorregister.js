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
  scheduleNos: { type: String, required: true },
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY);
  return token;
};
const Doctor = mongoose.model("doctor", userSchema);

const validate = (data) => {
  const schema = joi.object({
    firstName: joi.string().required().label("First Name"),
    lastName: joi.string().required().label("Last Name"),
    email: joi.string().required().email().label("Email"),
    password: passwordComplexity().required().label("Password"),
    gender: joi.string().required().label("Gender"),
    scheduleNos: joi.string().required().label("Schedule No"),
  });
  return schema.validate(data);
};
module.exports = { Doctor, validate };

//Task do for login
