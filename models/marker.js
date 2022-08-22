const { Schema, model } = require('mongoose');


const MarkerSchema = Schema({
    title:{
        type: String,
        require: [ true, 'El titulo es obligatorio'],
        unique: true 
    },
    url:{
        type: String,
        require: [ true, 'La URL es obligatoria'],
        unique: true 
    },
    description:{
        type: String
    }

});

MarkerSchema.methods.toJSON= function(){
    const { __v, _id, ...marker} = this.toObject();
    marker.mid = _id;
    return marker;
}


module.exports = model( 'Marker', MarkerSchema );