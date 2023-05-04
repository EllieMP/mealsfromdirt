import {Fragment, useState} from 'react';

import Box from "@mui/material/Box";
import TopBar from './TopBanner';
import CropMenu from './CropMenu';
import MealMenu from './MealMenu';
import FilterMenu from './FilterMenu';
import { Typography } from '@mui/material';
import GeocodingSearchBar from './Search';
import Typical from "react-typical";

function Main(){

    const [menutype, setMenuType] = useState({type: 'Crop'});
    const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
    const [initialpage, setInitialPage] = useState(true); // true -> initial page :: false -> main page

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
                <Box
                    sx= {{
                        height: '100vh',
                        backgroundSize: 'cover', 
                        backgroundImage: 'url(https://agrilife.org/texasaglaw/files/2017/08/sveta-fedarava-142756.jpg)'
                    }}
                >
                    <TopBar
                        menutype={menutype}
                        setMenuType={setMenuType}
                        setCoordinates={setCoordinates}
                        initialpage={initialpage}
                        setInitialPage={setInitialPage}
                    />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '60%',
                        m: 3
                    }}
                >   
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '70%',
                            m: 3
                        }}
                    >
                        <Typography variant='h3' align='center' fontFamily='American Typewriter' fontWeight='Bold'>
                            Look Up and Discover {' '}
                        <Typical
                            steps={['Crops!', 1000, '', 1000, 'Meals!', 1000, '', 1000, 'Agriculture!', 1000, '', 1000]}
                            loop={5}
                            wrapper="b"
                        />
                        </Typography>
                        <Typography variant='h6' align='center' fontFamily='American Typewriter' fontWeight='Bold'>
                            Do you know what grows in your area?
                        </Typography>  
                    <Box
                        sx={{
                            display: 'flex',
                            width: '35%',
                            m: 3
                        }}
                    >
                        <GeocodingSearchBar 
                            coordinates={coordinates}
                            setCoordinates={setCoordinates}
                            setInitialPage={setInitialPage}
                        />
                    </Box>
                </Box>
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