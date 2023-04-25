const dbConnection = require('../database/connection.js');

class CropsInRecipesController {

    static async getCropsForRecipe(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    SELECT * FROM 
                        MFD_recipes INNER JOIN MFD_crops ON 
                        MFD_recipes.crop_id = MFD_crops.crop_id
                        WHERE MFD_recipes.recipe_id = ?
                        ORDER BY crop_name;
                `;
                dbConnection.query({
                        sql: query,
                        values: [ctx.params.recipe_id]
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
            console.log(`Error in the crops in recipe controller: ${err}`);
        }
    }

    static async getRecipesForCrop(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    SELECT * FROM 
                        MFD_recipes INNER JOIN MFD_crops ON 
                        MFD_recipes.crop_id = MFD_crops.crop_id
                        WHERE MFD_crops.crop_id = ?
                        ORDER BY crop_name;
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
            console.log(`Error in the crops in recipe controller: ${err}`);
        }
    }
    
    // Adds a new crop to the database
    static async addCropRecipePair(ctx){
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    INSERT INTO MFD_recipess (recipe_id, crop_id)
                    VALUES (?, ?);
                `;
                dbConnection.query(
                    {
                        sql: query,
                        values: [ctx.params.recipe_id, ctx.params.crop_id]
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
            console.log(`Error in the crops in recipes controller: ${err}`);
        }
    }
}

module.exports = CropsInRecipesController;