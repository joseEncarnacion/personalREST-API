const dataControler = {}

const Datos = require('../models/data.Model')



dataControler.getDatas = async (req,res) => {
    const datas =  await Datos.find()
    res.send(datas)
}


dataControler.createData = async (req,res) => {
    const {nombre, apellido, direccion, email, fecha_Nacimiento, telefono} = req.body

    const dataSchema = new Datos({
        nombre, 
        apellido, 
        direccion, 
        email, 
        fecha_Nacimiento, 
        telefono
    })
        await dataSchema.save()
    res.send({message: 'data creada'})
}


dataControler.getData = async (req,res) => {
    const dato = await Datos.findById(req.params.id)
    res.json({massage: 'data'})

}


dataControler.updateData = async (req,res) => {
    const {nombre, apellido, direccion, email, fecha_Nacimiento, telefono} = req.body

    await Datos.findByIdAndUpdate(req.params.id, {
        nombre, 
        apellido, 
        direccion, 
        email, 
        fecha_Nacimiento, 
        telefono
    })

    res.json({message: 'data actualizada'})
}


dataControler.deleteData = async (req,res) => {
    await Datos.findByIdAndDelete(req.params.id)
    res.json({massage: 'data eliminada'})
}



module.exports = dataControler