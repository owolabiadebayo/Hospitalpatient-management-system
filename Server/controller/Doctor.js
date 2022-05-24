import Doctor from '../model/doctor/Register';
import Doctorlogin from '../model/doctor/Login';
// const {registerVali} = require('../Validation/validation');
const{loggerValidation, doctorValidation} = require('../Validation/validation');

import bcrypt from 'bcryptjs';
const jwt = require('jsonwebtoken');



export const doctorregister = async (req, res) => {

     //validate the data
        const error = doctorValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

    //check if user already exists
        const emailExist = await Doctor.findOne({email: req.body.email});
        if(emailExist) return res.status(400).send('Email already exists');
    
    //hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);


    const { firstName, lastName, email,password,gender,Conditon,Surgeries,Medication} = req.body;
    const Doctordata = new Doctor({
        firstName,
        lastName,
        email,
        password:hashedPassword,
        gender,
        Conditon,
        Surgeries,
        Medication,
    }
    )
    try {
         await Doctordata.save()
        res.send({
            user:userdata._id
        })
    } catch (err){
        res.status(400).send(err)
    }
}


// Do SignIn
export const doctorsignin = async (req, res) => {
    //validate the data
    const error= loggerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //check if user already exists
    const user = await Doctor.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email or password is wrong');

    //check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Email or password is wrong');

    //create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

    const { email, password} = req.body;

    const logindata = new Doctorlogin({
        
        email,
        password:hashedPassword,
        
    }
    )
    try {
        await logindata.save()
        res.send({
            user:logindata._id
        })
    } catch (err){
        res.status(400).send(err)
    }
}

export const Schedule = async (req, res) => {
    const Scheduledata = new Schedule({
        doctor:req.body.doctor,
        date:req.body.date,
        Concern:req.body.Concern,
        Symptoms:req.body.Symptoms
    })

    try {
        await Scheduledata.save()
        res.send({
            user:Scheduledata._id})
    } catch (err){
        res.status(400).send(err)
    }
} 


export const Diagnosis = async (req, res) => {
    const Diagnosisdata = new Schedule({
        Diagnosis:req.body.Diagnosis,
        Prescription:req.body.Prescription
        
    })

    try {
        await Diagnosisdata.save()
        res.send({
            user:Diagnosisdata._id})
    } catch (err){
        res.status(400).send(err)
    }
} 


