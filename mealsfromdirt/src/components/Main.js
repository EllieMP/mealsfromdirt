import {Fragment, useState} from 'react';
import Box from "@mui/material/Box";
import TopBar from './TopBanner';
import CropMenu from './CropMenu';
import MealMenu from './MealMenu';
import Button from '@mui/material/Button';


function Main(){

    const [menuType, setMenuType] = useState({type: 'Crop'});

    const whichMenu = (menuType) => {
        if(menuType.type === 'Crop'){
            return <CropMenu />
        }else if(menuType.type === 'Meal'){
            return <MealMenu />
        }
    }

    return(
        <Fragment>
            <Box>

                <TopBar
                    menuType={menuType}
                    setMenuType={setMenuType}
                />
                
                <Button variant="contained">
                    Filter
                </Button>

                
                {whichMenu(menuType)}
                
            </Box>
        </Fragment>
    )
}

export default Main;