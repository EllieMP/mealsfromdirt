const cropBiomeController = require('../controllers/crop_biome_controller');
const cropBiomesRouter = require('koa-router')({
    prefix: '/crop_in_biome' // crops table functions path
});

cropBiomesRouter.get('/:crop_biome', cropBiomeController.getCropsInBiome);
cropBiomesRouter.get('/:crop_id', cropBiomeController.getBiomesOfCrop);

cropBiomesRouter.post('/new/:crop_id/:crop_biome', cropBiomeController.addCropBiomePair);

module.exports = cropBiomesRouter;
