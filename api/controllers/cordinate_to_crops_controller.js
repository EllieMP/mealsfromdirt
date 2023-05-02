const dbConnection = require('../database/postgis_connection.js');
const db2Connection = require('../database/connection.js');

class cordsToRecipesController {
    
    static async getCropsFromCord(ctx) {
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
                            SELECT * FROM 
                                MFD_crops INNER JOIN MFD_crop_biomes 
                                    ON MFD_crops.crop_id = MFD_crop_biomes.crop_id
                                WHERE MFD_crop_biomes.crop_biome = ?
                                ORDER BY crop_name;
                            `;
                        db2Connection.query({
                                sql: mariaDBQuery,
                                values: [res.rows[0].eco_name]
                            }, (err, cropsRes) => {
                            if(err) {
                                ctx.body = err;
                                ctx.status = 500;
                                reject(err);
                            }
                            console.log(cropsRes);
                            ctx.body = cropsRes;
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

module.exports = cordsToRecipesController;