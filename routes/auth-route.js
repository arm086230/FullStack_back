const express = require('express');
const router = express.Router()
const car = require("../controllers/carcontroller")
const authcontroller = require("../controllers/auth-controller")
const authenticate = require("../middlewares/authenticate")

router.post('/register',authcontroller.register)
router.post('/login', authcontroller.login)
router.get('/me', authenticate, authcontroller.getme)
router.post("/createcar",authenticate,car.createcar)
router.get("/getcar",authenticate,car.getcar)
router.get('/getcar/:id',authenticate,car.getcar1)
router.delete("/deletecar/:id",authenticate,car.deletecar)
router.patch('/updatecar/:id',authenticate,car.updatecar)



module.exports  = router