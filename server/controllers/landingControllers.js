require ('mongoose');
const fetch = require('node-fetch');
const db = require('../utils/mongoConfig');
const landings = require('../models/landings');
const API_NASA = process.env.API_NASA;

const getMeteos = async (req, res) => {
    console.log("estamos en meteos");
    //return async (req, res, next) => {
    console.log("aki estamos");
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;
    const results = {};
        console.log(page);
        console.log(limit);
    try {
        console.log("consulta");
        results.results = await landings.find()
        .sort({ _id: 1 })
        .limit(limit)
        .skip(skipIndex)
        .exec();
        res.paginatedResults = results;
        console.log("mio" + results.results);
        res.status(200).send(results.results);
        //next();
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error Occured" });
    }
    /* const query = {}
    console.log(landings);
    landings.find(query)
        .then((land) => res.status(200).send(land))
        .catch((err) => console.log(`Error: ${err}`)); */
    
}
const getMeteosByMinMass2  = async (req, res) => {
    console.log("by min masss:");
    console.log(req.params);
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;
    const results = {};
    let arrayMassMin = [];
    let massMin = parseInt(req.query.minimum_mass);
    let query = { mass: { $gte : massMin }},
        params = { "name" : 1,
        "nametype" : 1,
        "recclass" : 1,
        "mass" : 1, 
        "fall" : 1,
        "year" : 1,
        "geolocation": 1,
        "reclat" : 1,
        "reclong" : 1,
        "_id" : 0 };
    //try {
        console.log("consulta");
        console.log(query);
        console.log(params);
        results.results = await landings.find(query, params)
            .sort({ _id: 1 })
            .limit(limit)
            .skip(skipIndex)
            .exec()
        .then((xMasa) => {
            console.log("results.results.......");
            console.log(xMasa);
            for (let i=0; i<xMasa.length; i++) {
                if (xMasa[i].mass >= massMin) {
                    console.log("+1");
                    //console.log(xMasa);
                    arrayMassMin.push(xMasa[i]);
                }
            }
            console.log("arraylllll");
            //console.log(arrayMassMin);
            res.paginatedResults = results;
            console.log("resultsde paginated");
            console.log(results.length);
/*             for (let i=0; i<res.paginatedResults.length; i++) {
                if (res.paginatedResults[i].mass >= massMin) {
                    console.log("+1");
                    arrayMassMin.push(res.paginatedResults[i]);
                }
            } */
        console.log(arrayMassMin);
        //console.log("mio" + results.results);
        res.status(200).send(arrayMassMin)}
        //next();
        )
     .catch ((e) => {
        console.log(e);
        res.status(500).json({ message: "Error Occured" });
    })
    /* await landings.find(query, params)
        .then((xMasa) => {
            for (let i=0; i<xMasa.length; i++) {
                if (xMasa[i].mass >= massMin) {
                    arrayMassMin.push(xMasa[i]);
                }
            }
            res.status(200).send(arrayMassMin)})
        .catch((err) => console.log(err)); */
}

const getMeteos2 = async (req, res) => {
    console.log("estamos en meteos");
    const query = {}
    console.log(landings);
    landings.find(query)
        .then((land) => res.status(200).send(land))
        .catch((err) => console.log(`Error: ${err}`));
    
}



const getMeteosByMinMass  = async (req, res) => {
    console.log("by min masss:");
    console.log(req.params);
    let arrayMassMin = [];
    let massMin = parseInt(req.query.minimum_mass);
    let query = { mass: { $gte : massMin }},
        params = { "name" : 1,
        "nametype" : 1,
        "recclass" : 1,
        "mass" : 1, 
        "fall" : 1,
        "year" : 1,
        "geolocation": 1,
        "reclat" : 1,
        "reclong" : 1,
        "_id" : 0 };

    await landings.find(query, params)
        .then((xMasa) => {
            for (let i=0; i<xMasa.length; i++) {
                if (xMasa[i].mass >= massMin) {
                    arrayMassMin.push(xMasa[i]);
                }
            }
            res.status(200).send(arrayMassMin)})
        .catch((err) => console.log(err));
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