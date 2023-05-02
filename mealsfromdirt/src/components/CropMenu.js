import { Fragment, useState } from "react";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import CropCard from './CropCard';

function CropMenu(props){
    const { cropCardInfo } = props;
    console.log(cropCardInfo);
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
                                <CropCard cropName={cropCardInfo.crop_name} cropImgURL={cropCardInfo.crop_image_link} cropDesc={cropCardInfo.crop_description} cropResources='Sample Recource'/>
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
                    <CropCard cropName='No crops found' cropImgURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdTLhSBuvDTmljJS06iWMY4o-j1OokyZvug&usqp=CAU' cropDesc='No crops found :(' cropResources=''/>
                </Container>
            </Fragment>
        )
    }
}
//<CropCard cropName='Cucumber' cropImgURL={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVzELdzmAcJPzFiCzY2RQdZ36CRkY8G09wg&usqp=CAU'} cropDesc='Description of cucumber' cropResources='Cucumber resources' />

export default CropMenu;