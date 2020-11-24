const Vehiculo = require("../models/vehiculo");
const fetch = require("node-fetch");
const { json } = require("body-parser");

//obtener todos los productos
function getVehiculos(req, res) {
  Vehiculo.find({}, (err, vehiculos) => {
    if (err)
      return res
        .status(200)
        .send({ message: "Error al consultar la base de datos: ", err });
    if (!vehiculos)
      return res.status(404).send({ message: "No existen productos" });

    res.status(200).send({ vehiculos });
  });
}

function saveVehiculo(req, res) {
  console.log("POST /api/v1/vehiculo");
  console.log(req.body);

  let vehiculo = new Vehiculo();
  vehiculo.modelo = req.body.modelo;
  vehiculo.picture = req.body.picture;
  vehiculo.price = req.body.price;
  vehiculo.category = req.body.category;
  vehiculo.description = req.body.description;

  vehiculo.save((err, vehiculoStored) => {
    if (err)
      res
        .status(500)
        .send({ message: "Error al salvar en la base de datos ", err });

    const message = {
      seccion: "Vehículos",
      modelo: vehiculoStored.modelo,
      categoria: vehiculoStored.category,
      precio: vehiculoStored.price
    };
    res.status(200).send({ product: vehiculoStored });
    const sms = JSON.stringify(vehiculoStored.modelo);
    fetch("http://localhost:4000/sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  });
}

module.exports = {
  getVehiculos,
  saveVehiculo,
};
