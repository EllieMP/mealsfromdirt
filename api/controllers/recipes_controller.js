const dbConnection = require('../database/connection.js');

class RecipesController {

    // Retrieves a crop by its id
    static async getRecipeByID(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    SELECT * FROM MFD_recipes WHERE recipe_id = ?;
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
            console.log(`Error in the recipe controller: ${err}`);
        }
    }

    static async getCropsForRecipe(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    SELECT * FROM 
                        MFD_recipes INNER JOIN MFD_crops_in_recipe
                            ON MFD_recipes.recipe_id = MFD_crops_in_recipe.recipe_id
                        INNER JOIN MFD_crops
                            ON crop_id = MFD_crops.crop_id;
                        WHERE
                            recipe_id = ?;
                        ORDER BY recipe_name;
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
            console.log(`Error in the recipe controller: ${err}`);
        }
    }
}

module.exports = RecipesController;