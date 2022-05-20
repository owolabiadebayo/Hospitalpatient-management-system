import User from '../model/User';
const {registerValidation} = require('../Validation/validation');
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
        const savedUser = await userdata.save()
        res.send({
            user:userdata._id
        })
    } catch (err){
        res.status(400).send(err)
    }
}


// Do SignIn