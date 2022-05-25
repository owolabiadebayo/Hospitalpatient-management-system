import User from '../model/patient/User';
import Logger from '../model/patient/Logger';
import Scheduleappt from '../model/patient/Scheduleappt';
// const {registerVali} = require('../Validation/validation');
const{loggerValidation,registerValidation} = require('../Validation/validation');

import bcrypt from 'bcryptjs';
const jwt = require('jsonwebtoken');



export const register = async (req, res) => {

     //validate the data
        const error = registerValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

    //check if user already exists
        const emailExist = await User.findOne({email: req.body.email});
        if(emailExist) return res.status(400).send('Email already exists');
    
    //hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);


    const { firstName, lastName, email, password,gender,scheduleNos} = req.body;
    console.log(firstName,lastName,email,password,gender,scheduleNos);
    const userdata = new User({
        firstName,
        lastName,
        email,
        password:hashedPassword,
        gender,
        scheduleNos
    }
    )
    try {
         await userdata.save()
        res.send({
            user:userdata._id
        })
    } catch (err){
        res.status(400).send(err)
    }
}


// Do SignIn
export const signin = async (req, res) => {
    //validate the data
    const error= loggerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //check if user already exists
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email or password is wrong');

    //check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Email or password is wrong');

    //create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

    const { email, password} = req.body;
    console.log(email,password);
    const loggerdata = new Logger({
        
        email,
        password:hashedPassword,
        
    }
    )
    try {
        await loggerdata.save()
        res.send({
            user:loggerdata._id
        })
    } catch (err){
        res.status(400).send(err)
    }
}

export const Schedule = async (req, res) => {
    const Scheduledata = new Scheduleappt({
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