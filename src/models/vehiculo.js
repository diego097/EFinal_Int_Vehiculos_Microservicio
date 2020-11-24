const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VehiculoSchema = Schema({
    modelo: String,
    picture: String,
    price: {type: Number, default: 0},
    category: {type: String, enum:['SUV', 'PICKUP', 'MINI']},
    description: String
})

module.exports = mongoose.model('vehiculo', VehiculoSchema)