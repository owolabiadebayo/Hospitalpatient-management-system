const router = require("express").Router();
const { Doctor, validate } = require("../model/doctor/doctorregister");
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

    const user = await Doctor.findOne({ email: req.body.email });

    if (user) return res.status(409).send({ message: "User already exixts" });
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new Doctor({ ...req.body, password: hashPassword }).save();

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
