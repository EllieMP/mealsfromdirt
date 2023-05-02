const recipesController = require('../controllers/recipes_controller.js');
const recipesRouter = require('koa-router')({
    prefix: '/recipe' // crops table functions path
});

recipesRouter.get('/:recipe_id', recipesController.getRecipeByID);
recipesRouter.get('/:recipe_id', recipesController.getCropsForRecipe);

module.exports = recipesRouter;
