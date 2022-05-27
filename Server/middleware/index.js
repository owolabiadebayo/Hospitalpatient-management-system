import { expressjwt } from "express-jwt";
import Doctor from '../model/doctor/Register';

require("dotenv").config();

export const requireLogin = expressjwt({
    secret: process.env.TOKEN_SECRET,
    algorithms: ["HS256"],
    userProperty: "auth"
}).unless({
    path: [
        "/api/doctorsignin",
        "/api/doctorregister",
    ]
});