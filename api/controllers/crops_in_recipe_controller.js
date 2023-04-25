const dbConnection = require('../database/connection.js');

class CropsInRecipesController {

    static async getCropsForRecipe(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    SELECT * FROM 
                        MFD_recipes INNER JOIN MFD_crops_in_recipe
                            ON MFD_recipes.recipe_id = MFD_crops_in_recipe.recipe_id
                        INNER JOIN MFD_crops 
                            ON crop_id = MFD_crops.crop_id
                        WHERE recipe_id = ?
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
                        MFD_crops INNER JOIN MFD_crops_in_recipe
                            ON MFD_crops.crop_id = MFD_crops_in_recipe.crop_id
                        INNER JOIN MFD_recipes
                            ON recipe_id = MFD_crops.recipe_id
                        WHERE crop_id = ?
                        ORDER BY recipe_name;
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
                    INSERT INTO MFD_crops_in_recipe (recipe_id, crop_id)
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