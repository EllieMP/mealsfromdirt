const Koa = require('koa');
const defaultRouter = require('./routes/default.js');
const bodyParser = require('koa-bodyparser');
const koajson = require('koa-json');
const config = require('./config.json');

const api = new Koa();
// Using a config file to make storing and managing sensitive information on blue easier.  
const API_PORT = config.apiPort; // Assigned for ssu blue

// Handels requests buy using routes middleware
api.use(async(ctx, next) => {
    await next();
});

api.use(bodyParser());
api.use(koajson());

defaultRouter(api); // Exposing routes to koa api

// Listening for requests on API_PORT
api.listen(API_PORT, ()=>{
    console.log(`API started on port ${API_PORT}`);
});