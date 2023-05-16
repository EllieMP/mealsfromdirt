import { Fragment, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import CropCard from './CropCard';

/**
 * 
 * @param {*} props Contains props passed to component
 * @prop coordinates Contains the useState reoresenting the coordinates of the user's address
 * @returns 
 */
function CropMenu(props){
    const { coordinates } = props;

    const [cropCardInfo, setCropInfo] = useState([]);
    
    useEffect(() => {
        const fetchCropData = async () => {
            const result = await fetch(`http://localhost:3307/api/v1/cords_to_crops/${coordinates.lat}/${coordinates.lng}`);
            result.json().then(json => {
                setCropInfo(json);
            })
        }
        fetchCropData();
    }, []);

    if (cropCardInfo != undefined && cropCardInfo.length != 0) {
        return(
            <Fragment>
                <Container
                    maxWidth="md"
                    sx={{
                        alignItems: 'center',
                        border: '1px solid black',
                        backgroundColor: 'grey'
                        
                    }}
                >
                    <Grid container>
                    {
                            cropCardInfo.map((cropCardInfo, idx) => 
                            <Grid item key={cropCardInfo.crop_id}>
                                <CropCard cropName={cropCardInfo.crop_name} 
                                          cropImgURL={cropCardInfo.crop_image_link} 
                                          cropDesc={cropCardInfo.crop_description} 
                                          cropResources='https://plants.usda.gov/home'
                                          cropPlantMonth={cropCardInfo.crop_plant_month}
                                          cropHarvestMonth={cropCardInfo.crop_harvest_month}
                                          />
                            </Grid>)
                    }
                    </Grid>
                    
                </Container>
            </Fragment>
        )
    }
    else {
        return(
            <Fragment>
                <Container
                    maxWidth="md"
                    sx={{
                        alignItems: 'center',
                        border: '1px solid black',
                        backgroundColor: 'grey'
                        
                    }}
                >
                    Loading your results...
                </Container>
            </Fragment>
        )
    }
}
//<CropCard cropName='Cucumber' cropImgURL={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVzELdzmAcJPzFiCzY2RQdZ36CRkY8G09wg&usqp=CAU'} cropDesc='Description of cucumber' cropResources='Cucumber resources' />

export default CropMenu;