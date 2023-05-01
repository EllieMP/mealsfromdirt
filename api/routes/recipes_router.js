const recipesController = require('../controllers/recipes_controller.js');
const recipesRouter = require('koa-router')({
    prefix: '/recipe' // crops table functions path
});

recipesRouter.get('/:recipe_id', recipesController.getRecipeByID);
recipesRouter.get('/:recipe_id', recipesController.getRecipeByBiome);

recipesRouter.post('/new/:recipe_name/:recipe_description/:recipe_instructions/:recipe_image_link', recipesController.addRecipe);

module.exports = recipesRouter;
