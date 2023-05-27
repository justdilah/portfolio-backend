const express = require("express");
const serverless = require("serverless-http");

const cors = require('cors');

const PORT = 3001;

const app = express();
const router = express.Router();

const {experiences} = require('./experiences.js');

const {competitions} = require('./competition.js');

const {projects} = require('./projects.js');

var whitelist = ['https://dilah-portfolio.onrender.com', 'http://localhost:3000']
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));

router.get("/",(req, res) => {
    res.send('App is running..');
});

router.get("/projects", (req, res) => {
    res.json(projects);
});

router.get("/project/:Name",(req, res) => {
    var titleOfProject = req.params.Name
    var data = projects.find(obj => obj.Name == titleOfProject);
    res.json(data);
});

router.get("/experiences",(req, res) => {
    res.json(experiences);
});

router.get("/experience/:Name",(req, res) => {
    var titleOfProject = req.params.Name
    var data = experiences.find(obj => obj.CompanyName == titleOfProject);
    res.json(data);
});

router.get("/competitions",(req, res) => {
    res.json(competitions);
});

router.get("/competition/:Name",(req, res) => {
    var titleOfProject = req.params.Name
    var data = competitions.find(obj => obj.Name == titleOfProject);
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.use('/.netlify/functions/api',router);
module.exports.handler = serverless(app);



