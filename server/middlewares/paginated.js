const landings = require('../models/landings');

function paginatedResults() {
    return async (req, res, next) => {
      console.log("aki estamos en el middleware");
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const skipIndex = (page - 1) * limit;
      const results = {};
      
      try {
        console.log("consulta");
        results.results = await landings.find()
          .sort({ _id: 1 })
          .limit(limit)
          .skip(skipIndex)
          .exec();
        res.paginatedResults = results;
        console.log("mio" + results.results.length);
        console.log(req.query);
        res.status(200).send(results.results);
        //res.json(results.results);
        next();
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error Occured" });
      }
    };
}

module.exports = paginatedResults;