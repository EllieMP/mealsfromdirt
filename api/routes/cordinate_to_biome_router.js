const cordToBiomeController = require('../controllers/cordinate_to_biome_controller');
const cordToBiomeRouter = require('koa-router')({
    prefix: '/cord_to_biome' // crops table functions path
});

cordToBiomeRouter.get('/:lat/:long', cordToBiomeController.getBiomeFromCord);

module.exports = cordToBiomeRouter;
