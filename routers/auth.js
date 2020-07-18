const { Router } = require('express')
const { toJWT } = require('../auth/jwt')
const bcrypt = require("bcrypt");
const Doctor = require("../models").doctor;

const router = new Router()

//TESTING LOGIN 
// router.post('/', async (req, res, next) => {
//     console.log('testing')
//     // Here goes the login logic.
//     try {
//         //Check for email and password in the json body, allow anybody
//         //to login and receive a jwt:
//         const { email, password } = req.body
//         // console.log('hi')
//         if (!email || !password) {
//             res.status(400).send("Please supply a valid email and password")
//         } else {
//             res.send({
//                 jwt: toJWT({ userId: 1 }),
//             })
//         }
//     } catch (e) {
//         next(e)
//     }
// })

//Password hashed
router.post("/", async (req, res, next) => {
    try {
        const { email, name, password } = req.body;
        // get some parameters in the body
        // check if i got the info i need.
        if (!email || !name || !password) {
            return res.status(400).send("Bad request missing parameters");

        } else {
            console.log('testinga hashsync', email, name, password)
            const hashedPassword = bcrypt.hashSync(password, 10);

            const doctorLogin = await Doctor.create({
                name,
                email,
                password: hashedPassword,
            });
            delete doctorLogin.dataValues["password"];
            res.send(doctorLogin);
        }
        // proceed and create user.

        // send back 200 and the email.
    } catch (e) {
        next(e);
    }
});

module.exports = router 