const {Router} =  require('express')
const router = Router()

const {getDatas, createData, getData, updateData, deleteData} = require('../controllers/data.controller')

router.route('/')
    .get(getDatas)
    .post(createData)

router.route('/:id')
    .get(getData)
    .put(updateData)
    .delete(deleteData)


module.exports = router