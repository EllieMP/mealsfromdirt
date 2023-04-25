const dbConnection = require('../database/connection.js');

class CropBiomeController {

    // Retrieves a crop by its id
    static async getCropsInBiome(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    SELECT * FROM 
                        MFD_crops INNER JOIN MFD_crop_biomes ON 
                        MFD_recipes.crop_id = MFD_crop_biomes.crop_id
                        WHERE MFD_crop_biomes.crop_biome = ?
                        ORDER BY crop_name;
                `;
                dbConnection.query({
                        sql: query,
                        values: [ctx.params.crop_biome]
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
            console.log(`Error in the crop controller: ${err}`);
        }
    }

    static async getBiomesOfCrop(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    SELECT crop_biome FROM MFD_crop_biomes WHERE crop_id = ?;
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
            console.log(`Error in the crop biome controller: ${err}`);
        }
    }
    

    
    // Adds a new crop to the database
    static async addCropBiomePair(ctx){
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    INSERT INTO MFD_crop_biome (crop_id, crop_biome)
                    VALUES (?, ?);
                `;
                dbConnection.query(
                    {
                        sql: query,
                        values: [ctx.params.crop_id, ctx.params.crop_biome]
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

module.exports = CropBiomeController;