import {Fragment, useState} from 'react';
import Box from "@mui/material/Box";
import TopBar from './TopBanner';
import CardBox from './CardMenu';
import Button from '@mui/material/Button';


function Main(){

    return(
        <Fragment>
            <Box>

                <TopBar/>
                
                <Button variant="contained">
                    Filter
                </Button>

                <CardBox/>
                
            </Box>

        </Fragment>
    )
}

export default Main;