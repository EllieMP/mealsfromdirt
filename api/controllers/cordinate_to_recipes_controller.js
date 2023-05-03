const dbConnection = require('../database/postgis_connection.js');
const db2Connection = require('../database/connection.js');

class CordinateToRecipesController {
    
    static async getRecipesFromCords(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    SELECT eco_name FROM public.mfd_biomes_world WHERE ST_Intersects(geom, ST_SetSRID(ST_MakePoint($1, $2), 4326));`;
                dbConnection.query(query, [ctx.params.long, ctx.params.lat], (err, res) => {
                    if(err) {
                        ctx.body = err;
                        ctx.status = 500;
                        reject(err);
                    }
                    else if (res.rows.length === 0) {
                        ctx.body = [];
                        ctx.status = 200;
                        resolve();
                    }
                    else {
                        const mariaDBQuery = `
                        SELECT DISTINCT(MFD_recipes.recipe_id), MFD_recipes.recipe_name, MFD_recipes.recipe_description, 
                        MFD_recipes.recipe_instructions, MFD_recipes.recipe_image_link FROM 
                            MFD_crops INNER JOIN MFD_crop_biomes 
                                ON MFD_crops.crop_id = MFD_crop_biomes.crop_id AND MFD_crop_biomes.crop_biome = ?
                            INNER JOIN MFD_crops_in_recipe
                                ON MFD_crops.crop_id = MFD_crops_in_recipe.crop_id
                            INNER JOIN MFD_recipes
                                ON MFD_crops_in_recipe.recipe_id = MFD_recipes.recipe_id;
                            `;
                        db2Connection.query({
                                sql: mariaDBQuery,
                                values: [res.rows[0].eco_name]
                            }, (err, recipesRes) => {
                            if(err) {
                                ctx.body = err;
                                ctx.status = 500;
                                reject(err);
                            }
                            ctx.body = recipesRes;
                            ctx.status = 200;
                            resolve();
                        });
                    }
                });
            });
        } catch(err){
            console.log(`Error in the cord to coord to crops controller: ${err}`);
        }
    }
}

module.exports = CordinateToRecipesController;