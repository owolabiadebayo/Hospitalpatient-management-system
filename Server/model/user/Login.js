// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
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
// });
// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY);
//   return token;
// };
// export default mongoose.model("UserLogin", userSchema);
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: "Email is required",
  },
  password: {
    type: String,
    min: 6,
    max: 64,
    required: "Password is required",
  },
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY);
  return token;
};

export default mongoose.model("UserLogin", userSchema);
