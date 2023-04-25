const cropsInRecipeController = require('../controllers/crops_in_recipe_controller.js');
const cropsInRecipeRouter = require('koa-router')({
    prefix: '/crop_in_biome' // crops table functions path
});

cropsInRecipeRouter.get('/:recipe_id', cropsInRecipeController.getCropsForRecipe);
cropsInRecipeRouter.get('/:crop_id', cropsInRecipeController.getRecipesForCrop);

cropsInRecipeRouter.post('/new/:recipe_id/:crop_id', cropsInRecipeController.addCropRecipePair);

module.exports = cropsInRecipeRouter;
