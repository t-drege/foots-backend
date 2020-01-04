//PACKAGE
const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const blacklist = require('express-jwt-blacklist');
const cors = require('cors');

//CONFIG
const config = require('./config');

//ROUTING
/*const userRouter = require('./routes/users');
const giftRouter = require('./routes/gift');
const childRouter = require('./routes/child');

const authenticationRouter = require('./routes/authentication');



let corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
};

//CORS CONFIG
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Routing initialize
app.use('/', authenticationRouter);
app.use(express.static(__dirname));
app.use('/', express.static(__dirname +'/uploads/*'));
app.use('/api/*', expressJwt({secret: config.TOKEN_SECRET, isRevoked: blacklist.isRevoked }));
app.use('/api/user', userRouter);
app.use('/api/gift', giftRouter);
app.use('/api/child', childRouter);

*/

//Ex framework
let app = express();
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.send(401, 'invalid token...');
    }
});

let port = process.env.PORT || 8080;
app.listen(port);

let sequelize = new Sequelize('street_f', 'postgres', 'totomax', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,//passer a true pour voir les différentes requêtes effectuées par l'ORM
});

let ok = module.exports = app;
ok.sequelize = sequelize;
