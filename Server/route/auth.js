const router = require("express").Router();

import { register } from "../controller/Doctors";
import { signin } from "../controller/Doctors";
import { Userregister } from "../controller/User";
import { Usersignin } from "../controller/User";
import { DoctorName } from "../controller/User";
import { Schedule } from "../controller/Doctors";
import { requireLogin } from "../middleware/index";

router.post("/register", register);
router.post("/signin", signin);
router.post("/Userregister", Userregister);
router.post("/Usersignin", Usersignin);
router.get("/doctorname", DoctorName);
router.post("/scheduleappt", requireLogin, Schedule);
router.get("/Alldoctor", requireLogin, DoctorName);

module.exports = router;
