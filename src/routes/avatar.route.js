const {Router} = require('express');
const router = Router();

const {getAvatars, createAvatar, getAvatar, deleteAvatar} =require('../controllers/avatar.controller')

const multer = require('../utils/multil.config')

router.route('/avatar')
    .get(getAvatars)
    .post(multer.single('image'), createAvatar)

router.route('/avatar/:id')
    .get(getAvatar)
    .delete(deleteAvatar)

module.exports = router