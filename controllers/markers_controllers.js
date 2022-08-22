const { response, request } = require('express');
const  Marker = require('../models/marker');



const markersGet = async(req = request, res = response) => {

    const [ markers, total ] = await Promise.all([
        Marker.find(),
        Marker.countDocuments()
    ])
    res.status(200).json({
        ok:true,
        total,
        markers,
    })
}

const markersPut = async(req = request, res) => {

    const { id } = req.params;
    const marker = await Marker.findByIdAndUpdate( id, req.body );
    res.status(200).json( marker )
}

const markersPost = async(req = request, res) => {

    const { title, url, description } = req.body;
    const marker = new Marker({ title, url, description });
    marker.save();

    res.status(200).json({
        ok:true,
        msg:"post Api desde el controlador",
        marker
    })
}
const markersDelete = async(req = request, res) => {

    const { id } = req.params;
    const marker = await Marker.findByIdAndDelete( id );
    res.status(200).json({
        ok:true,
        marker,
        id
    })
}


module.exports = {
    markersGet,
    markersPut,
    markersPost,
    markersDelete
}