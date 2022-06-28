// const joi = require("@hapi/joi");

// //Register Validation

// const registerValidation = (data) => {
//   const schema = {
//     firstName: joi.string().min(3).required(),
//     lastName: joi.string().min(3).required(),
//     email: joi.string().min(6).required().email(),
//     password: joi.string().min(6).required(),
//     gender: joi.string().required(),
//     schedulesNos: joi.string().min(2).required(),
//   };
// };
// const loggerValidation = (data) => {
//   const schema = {
//     email: joi.string().min(6).required().email(),
//     password: joi.string().min(6).required(),
//   };
// };
// // doctor validation
// const UserValidation = (data) => {
//   const schema = {
//     firstName: joi.string().min(3).required(),
//     lastName: joi.string().min(3).required(),
//     email: joi.string().min(6).required().email(),
//     password: joi.string().min(6).required(),
//     Condition: joi.string().required(),
//     Surgeries: joi.string().required(),
//     Medication: joi.string().required(),
//   };
// };

// module.exports = { loggerValidation, registerValidation, UserValidation };

// // module.exports.registerValidation = registerValidation;
