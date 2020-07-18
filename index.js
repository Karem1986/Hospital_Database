//Routing
//Express server 
const express = require("express");
const PORT = 4003;
const app = express();
// //our Models to test the express server:
// const Doctor = require("./models").doctor;
// const Nurse = require("./models").nurse;
// const OnDuty = require("./models").OnDuty;
// const Patient = require("./models").patient;
//Import the routes for doctors:
const doctors = require("./routers/doctors")
// Login:
const login = require("./routers/auth");

//Start a simple express server:
// //Gets all doctors
// app.get("/doctors", async (req, res, next) => {
//     try {
//         const doctors = await Doctor.findAll();
//         // console.log('testing doctors', doctors)
//         res.send(doctors);
//     } catch (e) {
//         next(e);
//     }
// }); //test with  http :4003/doctors

// //Get all patients and their doctors 

// app.get("/patients", async (req, res, next) => {
//     try {
//         const patients = await Patient.findAll({ include: [Doctor] });
//         // console.log('testing customers', patients)
//         res.send(patients);
//     } catch (e) {
//         next(e);
//     }
// }); //test with  http :4005/patients
app.use((req, res, next) => {
    console.log(`[${req.method}]:` + JSON.stringify(req.body || req.params || req.query))
    next()
})
//Parser Middleware
// 1.SET UP PARSER MIDDLEWARE-ALWAYS BEFORE ROUTERS: 
const jsonParser = express.json();
app.use(jsonParser);
//2Register routes here
app.use("/doctors", doctors)
//Login
app.use("/login", login)


app.listen(PORT, () => console.log("server running!"));