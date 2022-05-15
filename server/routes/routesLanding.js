const express = require('express');
const routesLanding = express.Router();
//const { getMeteos,getMeteosByMinMass, getMeteosByMass, getMeteosByClass, deleteMeteos, postMeteos, putMeteos } = require("../controllers/landingControllers");
const  { getMeteos, getMeteosByMinMass }  = require("../controllers/landingControllers");
const paginatedResults = require ('../middlewares/paginated');

routesLanding.get('/landing', getMeteos);
routesLanding.get('/landing/mass', getMeteosByMinMass);

module.exports = routesLanding;