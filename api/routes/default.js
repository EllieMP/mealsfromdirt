const cropsRouter = require('./crops_router.js');

const defaultRouter = require('koa-router')({
    prefix: '/api/v1'
});

defaultRouter.get('/', (ctx) => {
    ctx.body = "You have connected to the meals from dirt api!"
});

defaultRouter.use(cropsRouter.routes());

module.exports = api => {
    api.use(
        defaultRouter.routes(), 
        defaultRouter.allowedMethods()
    );
}