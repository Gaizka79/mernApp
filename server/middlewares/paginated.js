const landings = require('../models/landings');

function paginatedResults2() {
  return async (req, res, next) => {
    console.log("aki estamos en el middleware");
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;
    const results = {};
    let sortName = 1;
    let query = {};
    console.log(req.query);
    (req.query.order)==-1 ? sortName=-1 : sortName=1;
    req.query.minimum_mass 
      ? query = { mass: { $gte : `"${req.query.minimum_mass}"` }}
      : "";
    //let query = { mass: { $gte :  `"${massMin}"` }},
    query = { mass: { $gte: 300000 } };
    console.log(query);
    let massMin = parseInt(300000);
      
      console.log("consulta");
      //results.results = await landings.find({ mass: { $gte :  `${massMin}` }})
      results = await landings.find({ mass: { $gte :  `${massMin}` }})
        //.sort({ name: `${sortName}` })
        .limit(limit)
        .skip(skipIndex)
        .exec()
        .then((results) => {
           console.log(results);
           res.status(200).send(results)})
      //res.paginatedResults = results;
      //console.log("mio" + results.results.length);
      //console.log(results.results);
      //res.status(200).send(results.results);
      //res.json(results.results);
      //console.log(json(results.results));
      //next();
        
    .catch ((e) => console.log("mierda de error: " + e));
      
    
  };
}

function paginatedResults() {
    return async (req, res, next) => {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const skipIndex = (page - 1) * limit;
      const results = {};
      let orden = 1;
      (req.query.order)==-1 ? orden=-1 : orden=1;
      let sortName = { name: `${orden}` };
      let sortMass = { mass: `${orden}`};
      let query = {};
      (req.query.order)==-1 ? orden=-1 : orden=1;
      req.query.minimum_mass !=0
        ? (query = { mass: { $gte : `${req.query.minimum_mass}` }}, sort = sortMass)
        : sort = sortName;
      try {
        results.results = await landings.find(query)
          .sort(sort)
          .limit(limit)
          .skip(skipIndex)
          .exec();
        res.paginatedResults = results;
        console.log("mio" + results.results.length);
        console.log(landings.params);
        //console.log(results.results);
        next();
      } catch (e) {
        console.log("Error en paginated.js: ");
        console.log(e);
        res.status(500).json({ message: "Error Occured" });
      }
    };
}

module.exports = paginatedResults;