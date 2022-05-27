const mongoose = require("mongoose");

const Diagnosis = new mongoose.Schema({
  Diagnosis: {
    type: String,
    required: "Diagnosis is required",
  },
  Prescription: {
    type: String,
    required: "Prescription is required",
  },
});
export default mongoose.model("Diagnosis", Diagnosis);
