require('dotenv').config();
const express = require("express");
require ('body-parser');
const cors = require('cors');
const morgan = require ('./middlewares/morganConfig');
const paginatedResults = require ('./middlewares/paginated');

const routesLanding = require('./routes/routesLanding');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan(':date[clf] :method :referrer :host :status :param[id] - :response-time ms :body'));
//app.use(paginatedResults());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routesLanding); 
//app.use('/api/astronomy', routerNeas);

app.get("/kaixo", (req, res) => {
    res.json({ message: "Kaixo munduari!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});