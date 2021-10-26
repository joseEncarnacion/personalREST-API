const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const app =  express()



// setting 
app.set('port', process.env.PORT || 4005) 


// Meddleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))


// app.use(multer({ storage: storage }).single('image'))

// const storage = multer.diskStorage({
//     destination: path.join(__dirname, 'public/images/uploads'),
//     filename:(req, file, cb, filename) => {
//         cb(null, uuid() + path.extname(file.originalname))
//     }
// }); 
// app.use(multer({ storage: storage }).single('image'))

// const upload = (multer({ storage: storage })).single('image')
// app.use(upload)


// Routes
app.use('/api/data', require('./routes/data.route'))
app.use('/api', require('./routes/avatar.route'))


// stactic routes 
// app.use('/upload', express.static(path.join(__dirname + 'upload')));
// // app.use('./upload', express.static(path.join('upload')));
app.use('./upload', express.static(path.resolve('upload')));



module.exports = app