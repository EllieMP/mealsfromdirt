const dbConnection = require('../database/connection.js');

class RecipesController {

    // Retrieves a crop by its id
    static async getCRecipeByID(ctx) {
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

    // Changes a crops's name by crop id
    static async updateCropNameByID(ctx){
        try{
            return new Promise((resolve, reject) => {
                const query = `UPDATE MFD_recipes SET recipe_name = ? WHERE recipe_id = ?;`;
                console.log(ctx.params);
                dbConnection.query(
                    {
                        sql: query,
                        values: [ctx.params.recipe_name, ctx.params.recipe_id]
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
                    INSERT INTO MFD_recipess (recipe_name, recipe_description, recipe_instructions ,recipe_image_link)
                    VALUES (?, ?, ?, ?);
                `;
                dbConnection.query(
                    {
                        sql: query,
                        values: [ctx.params.recipe_name, ctx.params.recipe_description, ctx.params.recipe_instructions ,ctx.params.recipe_image_link]
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

module.exports = CropsController;