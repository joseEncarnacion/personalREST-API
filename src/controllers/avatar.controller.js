const fs = require('fs-extra')
const avatarControl = {};

const AvatarSh =  require('../models/avatar.Model')

avatarControl.getAvatars = async (req, res) => {
    const Avatars =  await AvatarSh.find()
    res.send(Avatars)
}

avatarControl.createAvatar = async (req, res) => {

    console.log(req.body)
    console.log(req.file)
    const {title, description} = req.body
    const newImages = new AvatarSh({
        title,
        description,
        path : req.file.path
    })
    await newImages.save()


    res.json({
        message: 'Avatar created',
        newImages
    
    })
}

avatarControl.getAvatar = async (req, res) => {
     const avatarone = await AvatarSh.findById(req.params.id)
    res.json({
        message: 'get one',
        avatarone

    })
}

avatarControl.deleteAvatar = async (req, res) => {
   const dAvatar = await AvatarSh.findByIdAndDelete(req.params.id)
   if (dAvatar){
       await fs.unlink(path.resolve(dAvatar.path))
   }
    res.send('Avatar deleted')
}




module.exports = avatarControl