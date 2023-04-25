const recipeController = require('../controllers/recipes_controller.js');
const recipeRouter = require('koa-router')({
    prefix: '/crop_tag' // crops table functions path
});

recipeRouter.get('/:recipe_id', recipeController.getRecipeByID);
recipeRouter.get('/:crop_id', recipeController. getTagsWithCropID);

recipeRouter.post('/new/:crop_id/:crop_biome', recipeController.addRecipe);

module.exports = cropTagsRouter;
