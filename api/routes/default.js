const cropsRouter = require('./crops_router.js');
const cropTagsRouter = require('./crop_tags_router.js');
const cropBiomeRouter = require('./crop_biome_router.js');
const cropsInRecipeRouter = require('./crops_in_recipe_router.js');
const recipesRouter = require('./recipes_router.js');

const defaultRouter = require('koa-router')({
    prefix: '/api/v1'
});

defaultRouter.get('/', (ctx) => {
    ctx.body = "You have connected to the meals from dirt api!"
});

defaultRouter.use(cropsRouter.routes());
defaultRouter.use(cropTagsRouter.routes());
defaultRouter.use(cropBiomeRouter.routes());
defaultRouter.use(cropsInRecipeRouter.routes());
defaultRouter.use(recipesRouter.routes());

module.exports = api => {
    api.use(
        defaultRouter.routes(), 
        defaultRouter.allowedMethods()
    );
}