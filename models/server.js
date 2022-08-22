const express = require('express');
const cors = require('cors');
const routes = require('../routes/markers_routes');
const { dbConnection } = require('../database/configDB');


class Server {

    constructor(){
        this.app = express(); 
        this.port = process.env.PORT;
        this.markersPath = '/api/markers';
        //Conectar a base de datos
        this.connetDB();
        //middlewares
        this.middlewares();
        //rutas de la aplicacion
        this.routes();
    }

    async connetDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes(){
     this.app.use(this.markersPath, routes );   
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${ this.port }` );
        });
    }
}



module.exports = Server