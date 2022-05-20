const router = require('express').Router();

import { register } from '../controller/User'


router.post('/register', register);

module.exports = router;