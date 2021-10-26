const app = require('./app')
require('dotenv').config()
require('./database')


const mainPort = async () =>{
    await app.listen(app.set('port'));
    console.log('Server on port', app.set('port'))

}

mainPort()