const Doctor = require("./models").doctor
const Nurse = require("./models").nurse
const OnDuty = require("./models").onDuty
const Patient = require("./models").patient


//Get all nurses

const getAllNurses = async () => {
    const allmynurses = await Nurse.findAll();
    // console.log("testing customers:", customers)
    const plainNurses = allmynurses.map(c => c.get({ plain: true }));
    // console.log('testing plainOrders:', plainOrders)//returns orders and their customers
    console.log(plainNurses);


}
//To get all nurses Test in terminal: node queries.js

// getAllNurses();


//get all doctors 
const getAllDoctors = async () => {
    const allmydoctors = await Doctor.findAll();
    // console.log("testing customers:", customers)
    const plainDoctors = allmydoctors.map(c => c.get({ plain: true }));
    // console.log('testing plainOrders:', plainOrders)//returns orders and their customers
    console.log(plainDoctors);

}
// getAllDoctors()

//Get one nurse by Id 
async function getNurseById(key) {
    const nursebyId = await Nurse.findByPk(key)
    return nursebyId ? nursebyId.get({ plain: true }) : "Nurse not found"
}
// getNurseById(1).then(n => console.log("This nurse is ID number:", n))

//get one doctor by Id 
async function getDoctorById(key) {
    const doctorbyId = await Doctor.findByPk(key)
    return doctorbyId ? doctorbyId.get({ plain: true }) : "Doctor not found"
}
// getDoctorById(1).then(d => console.log("This doctor is ID number:", d))

//Get all patients with their doctors 


const getPatientswithDoctors = async () => {
    const results = await Patient.findAll({ include: [Doctor] });

    const plainresults = results.map(p => p.get({ plain: true }));

    console.log(plainresults);
    //Test in terminal: node queries.js
}
getPatientswithDoctors();

