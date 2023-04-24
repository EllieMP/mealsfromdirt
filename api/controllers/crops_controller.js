const dbConnection = require('../database/connection.js');

class CropsController {

    // Retrieves a crop by its id
    static async getCropByID(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    SELECT * FROM MFD_crops WHERE crop_id = ?;
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
            console.log(`Error in the crop controller: ${err}`);
        }
    }

    // Changes a crops's name by crop id
    static async updateCropNameByID(ctx){
        try{
            return new Promise((resolve, reject) => {
                const query = `UPDATE MFD_crops SET crop_name = ? WHERE crop_id = ?;`;
                console.log(ctx.params);
                dbConnection.query(
                    {
                        sql: query,
                        values: [ctx.params.crop_name, ctx.params.crop_id]
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
            console.log(`Error in the crops controller: ${err}`);
        }
    }
    
    // Adds a new crop to the database
    static async addCrop(ctx){
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    INSERT INTO MFD_crops (crop_name, crop_description, crop_image_link)
                    VALUES (?, ?, ?);
                `;
                dbConnection.query(
                    {
                        sql: query,
                        values: [ctx.params.crop_name, ctx.params.crop_description ,ctx.params.crop_image_link]
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
            console.log(`Error in the crops controller: ${err}`);
        }
    }
}

module.exports = CropsController;