const mongoose = require('mongoose')
const {Schema, model} = mongoose


const dataSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        min: 2
    },
    apellido: {
        type: String,
        require: true

    },
    telefono: {
        type:Number,
        required: true
    }, 
    email: { type: String , required: true},
    direccion: {
        type: String,
        required: true
    },
    fecha_Nacimiento: {
        type: Date,
        required : true
    }

})


module.exports = model('data', dataSchema)