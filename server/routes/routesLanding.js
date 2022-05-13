const express = require('express');
const routesLanding = express.Router();
//const { getMeteos,getMeteosByMinMass, getMeteosByMass, getMeteosByClass, deleteMeteos, postMeteos, putMeteos } = require("../controllers/landingControllers");
const  {getMeteos}  = require("../controllers/landingControllers");

routesLanding.get('/landing', getMeteos);

module.exports = routesLanding;