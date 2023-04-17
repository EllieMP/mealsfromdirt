import { Fragment, useState} from "react";
import Box from "@mui/material/Box";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import { FormControlLabel, TextField} from "@mui/material";
import switchConfig from "./configuration";
import AboutUs from "./AboutPopUp";

function TopBar(props) { 
    const {menuType} = props;
    const {setMenuType} = props;
    const [open, setOpen] = useState(false);

    const handleCardSwitch = () => {
        console.log(menuType);
        if(menuType.type === 'Crop'){
            setMenuType({type: 'Meal'})
        }else if(menuType.type === 'Meal'){
            setMenuType({type: 'Crop'})
        }
    }

    const handleAboutOpen = () => {
        setOpen(true);
    }
    const handleAboutClose = () => {
        setOpen(false);
    }

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
                            align='left'
                            sx={{width:140}}
                        >
                            {/* Possibly change to image of logo instead */}
                            <Typography
                                variant="h6"
                            >
                                MealsFromDirt
                            </Typography>  
                        </Box>

                        {/* Enter Address here */}
                        <Box
                            sx={{ flexGrow: 1 }}
                            align='center'
                        >
                            <TextField 
                                id="outlined-basic" 
                                label="Address" 
                                variant="outlined"
                                margin="normal"
                                InputLabelProps={{ style:{ color: 'white' } }}
                                InputProps={{ style:{ color: 'white' } }}
                            /> 
                        </Box>
                        
                        {/* Crop/Menu Switch */}
                        <FormControlLabel
                            value="bottom"
                            control={
                                <Switch
                                    menuType={menuType}
                                    onChange={handleCardSwitch}
                                />
                            }
                            label={menuType.type}
                            labelPlacement="bottom"
                        />
                        
                        {/* About Us Button */}
                        <Box>
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