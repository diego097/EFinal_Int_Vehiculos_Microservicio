const express = require('express')
const Router = express.Router();
const vehiculoCtrl = require('../controllers/vehiculo')


//Metodos
//Router.post("/signup", userCtrl.signUp);

Router.get("/listVehiculo", vehiculoCtrl.getVehiculos);
Router.post("/createVehiculo", vehiculoCtrl.saveVehiculo);


module.exports = Router