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

// //Password hashed
router.put("/", async (req, res, next) => {
    try {
        const { email, name, password } = req.body;
        // get some parameters in the body
        // check if i got the info i need.
        if (!email || !name || !password) {
            return res.status(400).send("Bad request missing parameters");

        } else {
            console.log('testinga hashsync', email, name, password)
            const hashedPassword = bcrypt.hashSync(String(password), 10);
            //with String the password can also be a number without the ""

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

//Finalize login endpoint-- Sol: https://github.com/Codaisseur/security-42/blob/master/routers/auth.js

router.post("/", async (req, res, next) => { //login request
    try {
        // get email and password from body
        // check if I got them
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("Missing credentials");
        } else {
            const doctorsignup = await Doctor.findOne({ where: { email } });
            console.log('doctor signup', doctorsignup)

            if (!doctorsignup) {
                console.log('testing', doctorsignup)
                return res.status(404).send("User not found");
            } else {
                console.log('testing this shit', password, doctorsignup.password)
                const passwordsMatch = bcrypt.compareSync(password, doctorsignup.password);
                console.log("passwords match?", passwordsMatch);

                if (passwordsMatch) {
                    console.log("testing password")
                    const token = toJWT({ userId: doctorsignup.id }); // => { userId: 2 };
                    console.log("testing token")
                    res.send({ token }); // actually, we have to send back the jwt
                } else {
                    res.status(401).send("Unauthorized");
                }
            }
        }

        // use bcrypt to compare password from request with stored hashed password.
    } catch (e) {
        console.log(e)
    }
    //Tested with http POST :4005/login name="sara" email="hi" password=b
});
module.exports = router 