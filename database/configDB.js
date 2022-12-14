const mongose = require('mongoose');


const dbConnection = () =>{
    try {
        mongose.connect( process.env.MONGODB_CNN_MARKERS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Base de datos online');

    } catch (error) {
        console.log( error );
        throw new Error('Error iniciando la base de datos')
    }
}


module.exports = {
    dbConnection
}