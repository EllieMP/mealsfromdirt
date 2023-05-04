import {Fragment, useState} from 'react';
import Box from "@mui/material/Box";
import TopBar from './TopBanner';
import CropMenu from './CropMenu';
import MealMenu from './MealMenu';
import FilterMenu from './FilterMenu';
import { Typography } from '@mui/material';
import GeocodingSearchBar from './Search';

function Main(){

    const [menutype, setMenuType] = useState({type: 'Crop'});
    const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
    const [initialpage, setInitialPage] = useState(true);

    const whichMenu = () => {
        if(menutype.type === 'Crop'){
            return <CropMenu coordinates={coordinates} />
        }else if(menutype.type === 'Meal'){
            return <MealMenu coordinates={coordinates} />
        }
    }

    const whichPage = () => {
        if(initialpage){
            return <StartingPage />
        }else {
            return <MainPage />
        }
    }

    const MainPage = () => {
        return(
            <Fragment>
                <Box>
                    <TopBar
                        menutype={menutype}
                        setMenuType={setMenuType}
                        setCoordinates={setCoordinates}
                        initialpage={initialpage}
                        setInitialPage={setInitialPage}
                    />
                    <FilterMenu/>
                    {whichMenu()}  
                </Box>
            </Fragment>
        )
    }

    const StartingPage = () => {
        return(
            <Fragment>  
                <Box>
                    <TopBar
                        menutype={menutype}
                        setMenuType={setMenuType}
                        setCoordinates={setCoordinates}
                        initialpage={initialpage}
                        setInitialPage={setInitialPage}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        m: 3,
                        // border: '1px solid red' 
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '75%',
                            mb: 3,
                            // border: '1px solid red' 
                        }}
                    >
                        <Typography variant='h1' align='left' fontFamily='Arial' fontWeight='Bold'>
                            What Can You Grow In Your Home?
                            {/* <img style={{ height: 360, width: 560 }} src="/mfdLogo.png" alt="Meals From Dirt Logo" /> */}
                        </Typography>  
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '35%',

                        }}
                    >
                        <GeocodingSearchBar 
                            coordinates={coordinates}
                            setCoordinates={setCoordinates}
                            setInitialPage={setInitialPage}
                        />
                    </Box>
                </Box>
            </Fragment>
        )
    }

    return(
        // <MainPage />
        // <StartingPage />
        <Box>
            {whichPage()}  
        </Box>
        
    )
}

export default Main;