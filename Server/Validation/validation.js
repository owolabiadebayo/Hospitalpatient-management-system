const joi = require('@hapi/joi')

//Register Validation

const registerValidation = (data) => {
    const schema = {
        firstName: joi.string().min(3).required(),
        lastName: joi.string().min(3).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required(),
        gender:joi.string().required(),
        schedulesNos:joi.string().min(2).required()
    }
}

module.exports.registerValidation = registerValidation;