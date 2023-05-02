const cordsToRecipesController = require('../controllers/cordinate_to_recipes_controller');
const cordsToRecipesRouter = require('koa-router')({
    prefix: '/cords_to_recipes' // crops table functions path
});

cordsToRecipesRouter.get('/:lat/:long', cordsToRecipesController.getRecipesFromCords);

module.exports = cordsToRecipesRouter;
