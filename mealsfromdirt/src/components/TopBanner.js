import { Fragment, useState} from "react";
import Box from "@mui/material/Box";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import { FormControlLabel} from "@mui/material";
import AboutUs from "./AboutPopUp";
import GeocodingSearchBar from "./Search";

function TopBar(props) { 
    const {menutype} = props;
    const {setMenuType} = props;
    const {setCoordinates} = props;
    const {setInitialPage} = props;
    const {initialpage} = props;
    const [open, setOpen] = useState(false);

    const handleCardSwitch = () => {
        console.log(menutype);
        if(menutype.type === 'Crop'){
            setMenuType({type: 'Meal'})
        }else if(menutype.type === 'Meal'){
            setMenuType({type: 'Crop'})
        }
    }

    const handleAboutOpen = () => {
        setOpen(true);
    }
    const handleAboutClose = () => {
        setOpen(false);
    }

    const showSearch = (
        <GeocodingSearchBar 
            setCoordinates={setCoordinates}
            setInitialPage={setInitialPage}
        />
    );

    const showSlider = (
        <FormControlLabel
            value="bottom"
            control={
                <Switch
                    menutype={menutype}
                    onChange={handleCardSwitch}
                />
            }
            label={menutype.type}
            labelPlacement="bottom"
        />
    );
    

    return(
        <Fragment>
            <Box>
                <AppBar 
                    position="static" 
                    sx={{
                        backgroundColor: 'rgb(50,53,60)'
                    }} 
                >
                    <Toolbar>
                        <Box
                            style={{
                                display: 'flex',
                                width: '90%',
                                alignItems: 'center',
                                // border: '1px solid red', 
                            }}
                        >
                            <Typography
                                variant="h6"
                            >
                               <img style={{ height: 90, width: 140 }} src="/mfdLogo.png" alt="Meals From Dirt Logo" />
                            </Typography>  
                        </Box>

                        {/* Enter Address here */}
                        <Box
                        style={{
                            display: 'flex',
                            width: '100%',
                            // border: '1px solid red', 
                        }}
                        >
                            {!initialpage && showSearch}
                        </Box>
                        {/* Crop/Menu Switch */}
                        <Box
                        style={{
                            display: 'flex',
                            width: '50%',
                            alignItems: 'center',
                            // border: '1px solid red', 
                        }}
                        >
                            <Box style={{flexGrow: 1}}></Box>
                            {!initialpage && showSlider}
                        </Box>
                        {/* About Us Button */}
                        <Box
                            style={{
                                display: 'flex',
                                width: '25%',
                                alignItems: 'center',
                                // border: '1px solid red', 
                            }}
                        >
                            <Box style={{flexGrow: 1}}></Box>
                            <IconButton 
                                onClick={handleAboutOpen}
                                color='primary' 
                            > 
                                <HelpIcon fontSize='large' />
                            </IconButton>
                            <AboutUs
                                open={open}
                                handleAboutClose={handleAboutClose}
                            />
                        </Box>
                        
                    </Toolbar>   
                </AppBar>
            </Box>
        </Fragment>
    )
}

export default TopBar;