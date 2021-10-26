const mongoose =  require('mongoose')
const {Schema, model} = mongoose


const imgSchema = new Schema({
    title: {type: String},
    description: {type: String}, 
    path: {type: String},
    created: {type: Date, default: Date.now()}
})


module.exports = model('Avatars', imgSchema )