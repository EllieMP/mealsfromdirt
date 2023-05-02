const cordsToCropsController = require('../controllers/cordinate_to_crops_controller');
const cordsToCropsRouter = require('koa-router')({
    prefix: '/cords_to_crops' // crops table functions path
});

cordsToCropsRouter.get('/:lat/:long', cordsToCropsController.getCropsFromCord);

module.exports = cordsToCropsRouter;
