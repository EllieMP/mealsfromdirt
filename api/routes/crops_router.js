const cropsController = require('../controllers/crops_controller');
const cropsRouter = require('koa-router')({
    prefix: '/crops' // crops table functions path
});

cropsRouter.get('/:crop_id', cropsController.getCropByID);

cropsRouter.put('/update/:crop_id/:crop_name', cropsController.updateCropNameByID);

module.exports = cropsRouter;
