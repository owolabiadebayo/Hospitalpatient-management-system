const router = require('express').Router();

import { register } from '../controller/User'
import { signin } from '../controller/User'
import {  doctorregister } from '../controller/Doctor'
import {  doctorsignin } from '../controller/Doctor'


router.post('/register', register);
router.post('/signin', signin);
router.post('/doctorregister', doctorregister);
router.post('/doctorsignin', doctorsignin);     

module.exports = router;