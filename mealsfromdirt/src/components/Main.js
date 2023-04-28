import {Fragment, useState} from 'react';
import Box from "@mui/material/Box";
import TopBar from './TopBanner';
import CropMenu from './CropMenu';
import MealMenu from './MealMenu';
import FilterMenu from './FilterMenu';

function Main(){

    const [menuType, setMenuType] = useState({type: 'Crop'});
    const [coordinates, setCoordinates] = useState([0 , 0]) // [ Latitude, Longitude ]

    const whichMenu = (menuType) => {
        if(menuType.type === 'Crop'){
            return <CropMenu />
        }else if(menuType.type === 'Meal'){
            return <MealMenu />
        }
    }

    const MainPage = () => {
        return(
            <Fragment>
                <Box>
                    <TopBar
                        menuType={menuType}
                        setMenuType={setMenuType}
                        coordinates={coordinates}
                        setCoordinates={setCoordinates}
                    />
    
                    <FilterMenu/>
    
                    {whichMenu(menuType)}  
                </Box>
            </Fragment>
        )
    }

    function startingPage(){
        return(
            <Fragment>  
                <Box>
                    <Box>
                        Image
                    </Box>
                    <Box>
                        Search Bar
                    </Box>
                </Box>
            </Fragment>
        )
    }

    return(
        <MainPage />
    )
}

export default Main;