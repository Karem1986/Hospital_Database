const { Router } = require('express') //Router class from express
const router = new Router()
//Import our model 
const Doctors = require("../models").doctor


//Register a GET route that gets all my doctors 

router.get("/", async (req, res, next) => {
    try {
        const doctorsall = await Doctors.findAll()
        res.json(doctorsall)

    } catch (e) {
        next(e)
        //throw e--> ask Johan 
    }
})





//EXPORT THE ROUTER
module.exports = router;