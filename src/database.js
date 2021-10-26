const mongoose = require('mongoose')

const  URI = process.env.DB_URI;


const main = async () =>{
    try {
        await mongoose.connect(URI, () => console.log('Database conected')) 
        
    } catch (err) {
        console.log(err)
    }
}

main()