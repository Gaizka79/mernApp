require ('mongoose');
//const fetch = require('node-fetch');
//const db = require('../utils/mongoConfig');
const landings = require('../models/landings');
//const API_NASA = process.env.API_NASA;

const getMeteos = async (req, res) => {
    console.log("estamos en meteos");
    res.send(res.paginatedResults.results);
}

const getMeteosByMinMass  = async (req, res) => {
    console.log("by min masss:");
    res.send(res.paginatedResults.results);
}

const getMeteosByMass = async (req, res) => {
    let masa = req.params.mass;
    console.log(masa);
    let query = { mass: masa },
        params = { "name" : 1, 
        "mass" : 1, 
        "_id" : 0 };
    await landings.find(query, params)
        .then((xMasa) => res.status(200).send(xMasa))
        .catch((err) => res.send(err));
};

const landingControllers = {
    getMeteos,
    getMeteosByMinMass
};

module.exports = landingControllers;
/*
///convierte String en Numero
     /* const toNumber = async() => {
         await landings.updateMany(
             { 'mass': { $type: 2 } },
         [{ $set: { 'mass': { $toDouble: '$mass' } } }]
             )
     }
     toNumber() 
*/