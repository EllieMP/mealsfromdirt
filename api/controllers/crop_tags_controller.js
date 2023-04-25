const dbConnection = require('../database/connection.js');

class CropTagsController {

    // Retrieves a crop by its id
    static async getCropsWithTag(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                SELECT * FROM 
                    MFD_crops INNER JOIN MFD_crop_tags 
                        ON MFD_crops.crop_id = MFD_crop_tags.crop_id
                    WHERE crop_tag = ?
                    ORDER BY crop_name;
                `;
                dbConnection.query({
                        sql: query,
                        values: [ctx.params.crop_tag]
                    }, (err, res) => {
                    if(err) {
                        ctx.body = err;
                        ctx.status = 500;
                        reject(err);
                    }
                    ctx.body = res;
                    ctx.status = 200;
                    resolve();
                });
            });
        } catch(err){
            console.log(`Error in the crop tag controller: ${err}`);
        }
    }

    static async getTagsWithCropID(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    SELECT crop_tag FROM MFD_crop_tags WHERE crop_id = ?;
                `;
                dbConnection.query({
                        sql: query,
                        values: [ctx.params.crop_id]
                    }, (err, res) => {
                    if(err) {
                        ctx.body = err;
                        ctx.status = 500;
                        reject(err);
                    }
                    ctx.body = res;
                    ctx.status = 200;
                    resolve();
                });
            });
        } catch(err){
            console.log(`Error in the crop tag controller: ${err}`);
        }
    }

    
    // Adds a new crop to the database
    static async addCropBiomePair(ctx){
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    INSERT INTO MFD_crop_tag (crop_id, crop_tag)
                    VALUES (?, ?);
                `;
                dbConnection.query(
                    {
                        sql: query,
                        values: [ctx.params.crop_id, ctx.params.crop_tag]
                    }, (err, res) => {
                        if(err) {
                            ctx.body = err;
                            ctx.status = 500;
                            reject(err);
                        }
                        ctx.body = res;
                        ctx.status = 200;
                        resolve();
                });
            });
        } catch(err){
            console.log(`Error in the crop biome controller: ${err}`);
        }
    }
}

module.exports = CropTagsController;