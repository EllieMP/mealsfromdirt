const cropTagsController = require('../controllers/crop_tags_controller.js');
const cropTagsRouter = require('koa-router')({
    prefix: '/crop_tag' // crops table functions path
});

cropTagsRouter.get('/:crop_tag', cropTagsController.getCropsWithTag);
cropTagsRouter.get('/:crop_id', cropTagsController. getTagsWithCropID);

cropTagsRouter.post('/new/:crop_id/:crop_biome', cropTagsController.addCropBiomePair);

module.exports = cropTagsRouter;
