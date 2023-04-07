import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import { FormControlLabel, TextField } from "@mui/material";
import switchConfig from "./configuration";

function TopBar() {
    const [cardSwitch, setCardSwitch] = useState('grey');

    const handleCardSwitch = () => {
        if(cardSwitch === 'grey'){
            setCardSwitch('blue'); 
        }else if(cardSwitch === 'blue'){
            setCardSwitch('grey');
        }
        
        switchConfig.backgroundColor = cardSwitch;
        console.log(switchConfig.backgroundColor);
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

                        <Box>
                            <TextField 
                                id="outlined-basic" 
                                label="Address" 
                                variant="outlined"
                                margin="normal"
                                InputLabelProps={{ style:{ color: 'white' } }}
                            /> 
                        </Box>
                        
                        <FormControlLabel
                            value="bottom"
                            control={
                                <Switch
                                    cardSwitch={cardSwitch}
                                    onChange={handleCardSwitch}
                                />
                            }
                            label={switchConfig.switchLable}
                            labelPlacement="bottom"
                        />
                        
        
                        <IconButton color='primary' > 
                            <HelpIcon fontSize='large' />
                        </IconButton>
                        
                    </Toolbar>   
                </AppBar>
            </Box>
        </Fragment>
    )
}

export default TopBar;