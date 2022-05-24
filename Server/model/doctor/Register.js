// Do Schema for Doctor
const mongoose = require('mongoose')

const register = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First Name is required"},
    lastName: {
        type: String,
        trim: true, 
        required: "Last Name is required"
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: "Email is required"
    },
    password: {
        type: String,
        min: 6,
        max:64,
        required: "Password is required"
    },
    gender:{
            type: String,
            required: "Gender is required"
    },
    Condition:{
           type:String,
    },
    Surgeries:{
            type: String,
    },
    Medication:{
            type: String,
    }
})

export default mongoose.model('Doctor', register)
      
