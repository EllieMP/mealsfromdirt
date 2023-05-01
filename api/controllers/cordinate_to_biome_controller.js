const dbConnection = require('../database/postgis_connection.js');

class CordinateToBiomeController {

    // Retrieves a crop by its id
    static async getBiomeFromCord(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    SELECT eco_name FROM public.mfd_biomes_world WHERE ST_Intersects(geom, ST_SetSRID(ST_MakePoint($1, $2), 4326));
                `;
                dbConnection.query(query, [ctx.params.long, ctx.params.lat], (err, res) => {
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
            console.log(`Error in the cord to biome controller: ${err}`);
        }
    }
}

module.exports = CordinateToBiomeController;