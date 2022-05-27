const router = require('express').Router();

import { register } from '../controller/User'
import { signin } from '../controller/User'
import {  doctorregister } from '../controller/Doctor'
import {  doctorsignin } from '../controller/Doctor'
import {DoctorName} from '../controller/Doctor'
import {Schedule} from '../controller/User'
import {requireLogin} from '../middleware/index'


router.post('/register', register);
router.post('/signin', signin);
router.post('/doctorregister', doctorregister);
router.post('/doctorsignin',doctorsignin, );
router.get('/doctorname', DoctorName);
router.post('/scheduleappt',requireLogin, Schedule);     
router.get('/Alldoctor', requireLogin, DoctorName);


module.exports = router;