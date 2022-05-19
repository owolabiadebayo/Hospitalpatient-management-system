const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First Name is required"},
    lastName: {
        type: String,
        trim: true,
        required: "Last Name is required"},
    email: {
        type: String,
        trim: true,
        unique: true,
        required: "Email is required"},
    password: {
        type: String,
        trim: true,
        min: 6,
        max:64,
        required: "Password is required"},
    gender:{
        type: String,
        required: "Gender is required"
    },
    scheduleNos:{
        type:Number,
    }
})

export default mongoose.model("User", userSchema);
