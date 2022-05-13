require ('mongoose');
const fetch = require('node-fetch');
const db = require('../utils/mongoConfig');
const landings = require('../models/landings');
const API_NASA = process.env.API_NASA;

const getMeteos = (req, res) => {
    console.log("estamos en meteos");
    const query = {}
    console.log(landings);
    landings.find(query)
        .then((land) => res.status(200).send(land))
        .catch((err) => console.log(`Error: ${err}`));
    
}

const landingControllers = {
    getMeteos
};
module.exports = landingControllers;