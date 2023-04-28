const dbConnection = require('../database/connection.js');

class RecipesController {

    // Retrieves a recipe by its id
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
    
    // Adds a new crop to the database
    static async addRecipe(ctx){
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    INSERT INTO MFD_recipess (recipe_name, recipe_description, recipe_instructions, recipe_image_link)
                    VALUES (?, ?, ?, ?);
                `;
                dbConnection.query(
                    {
                        sql: query,
                        values: [ctx.params.recipe_name, ctx.params.recipe_description ,ctx.params.recipe_instructions, ctx.params.recipe_image_link]
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
            console.log(`Error in the recipes controller: ${err}`);
        }
    }
}

module.exports = RecipesController;