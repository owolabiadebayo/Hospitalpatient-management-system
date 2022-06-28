// import User from "../model/user/Register";
// import UserLogin from "../model/user/Login";

// const {
//   loggerValidation,
//   UserValidation,
// } = require("../Validation/validation");

// import bcrypt from "bcryptjs";
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// export const Userregister = async (req, res) => {
//   //validate the data
//   const error = UserValidation(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   //check if user already exists
//   const emailExist = await User.findOne({ email: req.body.email });
//   if (emailExist) return res.status(400).send("Email already exists");

//   //hash the password
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(req.body.password, salt);

//   const {
//     firstName,
//     lastName,
//     email,
//     password,
//     gender,
//     Conditon,
//     Surgeries,
//     Medication,
//   } = req.body;
//   const Userdata = new User({
//     firstName,
//     lastName,
//     email,
//     password: hashedPassword,
//     gender,
//     Conditon,
//     Surgeries,
//     Medication,
//   });
//   try {
//     await Userdata.save();
//     res.send({
//       user: Userdata._id,
//     });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// };

// // Do SignIn
// export const Usersignin = async (req, res) => {
//   //validate the data
//   const error = loggerValidation(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   //check if user already exists
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) return res.status(400).send("Email does not exist");

//   //check if password is correct
//   const validPass = await bcrypt.compare(req.body.password, user.password);
//   if (!validPass) return res.status(400).send("password is wrong");

//   //create and assign a token
//   const token = jwt.sign({ _id: user._id }, process.env.JWTPRIVATEKEY);
//   res.header("Authorization", token).send(token);
//   const { email, password } = req.body;
//   const logindata = new UserLogin({
//     email,
//     password: hashedPassword,
//   });
//   try {
//     await logindata.save();
//     res.send({
//       user: logindata._id,
//     });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// };

// export const Schedule = async (req, res) => {
//   const Scheduledata = new Schedule({
//     doctor: req.body.doctor,
//     date: req.body.date,
//     Concern: req.body.Concern,
//     Symptoms: req.body.Symptoms,
//   });

//   try {
//     await Scheduledata.save();
//     res.send({
//       user: Scheduledata._id,
//     });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// };
const router = require("express").Router();
const { User, validate } = require("../model/user/Register");
// import Scheduleappt from "../model/doctor/Scheduleappt";

// const {
//   loggerValidation,
//   registerValidation,
// } = require("../Validation/validation");

import bcrypt from "bcryptjs";
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });

    if (user) return res.status(409).send({ message: "User already exixts" });
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new User({ ...req.body, password: hashPassword }).save();

    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
});

// Do SignIn

// export const Schedule = async (req, res) => {
//   const Scheduledata = new Scheduleappt({
//     doctorName: req.body.doctorName,
//     date: req.body.date,
//     Concern: req.body.Concern,
//     Symptoms: req.body.Symptoms,
//   });
//   try {
//     await Scheduledata.save();
//     res.send({
//       user: Scheduledata._id,
//     });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// };
// export const Diagnosis = async (req, res) => {
//   const Diagnosisdata = new Schedule({
//     Diagnosis: req.body.Diagnosis,
//     Prescription: req.body.Prescription,
//   });

//   try {
//     await Diagnosisdata.save();
//     res.send({
//       user: Diagnosisdata._id,
//     });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// };

// export const DoctorName = async (req, res) => {
//   const Name = await Doctor.find(req.params._id)
//     .select("firstName lastName")
//     .exec();
//   res.json(Name);
// };

// export const AllDoctor = async (req, res) => {
//   const Doctor = await Doctor.find().select("-email -password").exec();
//   res.json(Doctor);
// };
module.exports = router;
