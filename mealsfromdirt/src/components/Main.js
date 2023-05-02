import {Fragment, useState} from 'react';
import Box from "@mui/material/Box";
import TopBar from './TopBanner';
import CropMenu from './CropMenu';
import MealMenu from './MealMenu';
import Button from '@mui/material/Button';
import FilterMenu from './FilterMenu';
import { Typography } from '@mui/material';
import GeocodingSearchBar from './Search';

function Main(){

    const [menutype, setMenuType] = useState({type: 'Crop'});
    const [coordinates, setCoordinates] = useState(null);
    // const [pageType, setPageType] = useState(true); 
        // true -> initial page :: false -> main page

    const whichMenu = () => {
        if(menutype.type === 'Crop'){
            return <CropMenu />
        }else if(menutype.type === 'Meal'){
            return <MealMenu />
        }
    }

    // const whichPage = () => {
    //     if(pageType){
    //         return <StartingPage />
    //     }else {
    //         return <MainPage />
    //     }
    // }

    const MainPage = () => {
        return(
            <Fragment>
                <Box>
                    <TopBar
                        menutype={menutype}
                        setMenuType={setMenuType}
                        setCoordinates={setCoordinates}
                    />
    
                    {console.log(coordinates)}

                    <FilterMenu/>

    
                    {whichMenu()}  
                </Box>
            </Fragment>
        )
    }

    const StartingPage = () => {
        return(
            <Fragment>  
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        m: 10,
                        border: '1px solid red' 
                    }}
                >
                    <Box>
                        <Typography>
                            <img style={{ height: 360, width: 560 }} src="/mfdLogo.png" alt="Meals From Dirt Logo" />
                        </Typography>  
                    </Box>
                    <Box>
                        <GeocodingSearchBar 
                            coordinates={coordinates}
                            setCoordinates={setCoordinates}
                            // setPageType={setPageType}
                        />
                    </Box>
                </Box>
            </Fragment>
        )
    }

    return(
        <MainPage />
        // <StartingPage />
        // <Box>
        //     {whichPage()}  
        // </Box>
        
    )
}

export default Main;