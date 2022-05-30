const mongoose = require('mongoose');

const Schedule = new mongoose.Schema({
    doctorName: {
        type: String,
        required: "Doctor Name Required"
    },
    date: {
        type:  String,
    },
    Concern: {
        type: String,
        required: "Concern is required"
    },
    Symptoms: {
        type: String,
        required: "Symptoms is required"
    },
})

export default mongoose.model("Scheduleappt", Schedule)