const Marker = require("../models/marker");


const titleExists = async( title = '' ) => {
    const foundTitle = await Marker.findOne({ title });
    if( foundTitle ) throw new Error( `El titulo: ${ title } ya esta registrado` );
}

const urlExists = async( url = '' ) =>{
    const foundUrl = await Marker.findOne({ url });
    if( foundUrl ) throw new Error(`La Url: ${ url } ya esta registrada`);
}

const markerExistsById = async( id ) =>{
    const markerExists = await Marker.findById(id);
    if( !markerExists ) throw new Error('El ID no existe');
}



module.exports = { 
    titleExists,
    urlExists,
    markerExistsById
}