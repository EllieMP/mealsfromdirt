import { useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import { Typography } from "@mui/material";

function valueLabelFormat(slider){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov',' Dec'];
    return `${months[slider-1]}`;
}

function FilterMenu(){
    const [expanded, setExpanded] = useState(false);
    const [check, setChecked] = useState([true, true]);
    const [plantSlider, setPlantSlider] = useState([1, 12]);
    const [harvestSlider, setHarvestSlider] = useState([1, 12]);

    const minDistance = 1;

    function handleFilterButton() {
        setExpanded(!expanded);
    };

    function handleFruitsChange() {
        setChecked([!check[0], check[1]]);
    };

    function handleVegetablesChange() {
        setChecked([check[0], !check[1]]);
    };

    const handlePlantSlider = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
      
        if (activeThumb === 0) {
            setPlantSlider([Math.min(newValue[0], plantSlider[1] - minDistance), plantSlider[1]]);
        } else {
            setPlantSlider([plantSlider[0], Math.max(newValue[1], plantSlider[0] + minDistance)]);
        }
    };

    const handleHarvestSlider = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
          }
      
        if (activeThumb === 0) {
            setHarvestSlider([Math.min(newValue[0], harvestSlider[1] - minDistance), harvestSlider[1]]);
        } else {
            setHarvestSlider([harvestSlider[0], Math.max(newValue[1], harvestSlider[0] + minDistance)]);
        }
    };
    
    const filters = (
        <Paper 
            sx={{ 
                m: 1, 
                border: '1px solid black',
            }} 
        >
            <Box 
             sx={{
                display: 'flex',
                flexDirection: 'row'
             }}
            >
                <FormGroup
                    align='left'
                    sx={{
                        mt:3,
                        ml:10
                    }}
                >
                    <FormControlLabel control={<Checkbox checked={check[0]} onChange={handleFruitsChange} />} label="Fruits" />
                    <FormControlLabel control={<Checkbox checked={check[1]} onChange={handleVegetablesChange}/>} label="Vegetables" />
                </FormGroup>
                <Box 
                    sx={{ 
                        ml: 10,
                        mt: 2,
                        width: 300 
                    }}
                >
                    <Typography>
                        Range of Planting
                    </Typography>
                    <Slider
                        getAriaLabel={() => 'Range of Planting Dates'}
                        value={plantSlider}
                        onChange={handlePlantSlider}
                        valueLabelFormat={valueLabelFormat}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={12}
                    />
                    <Typography>
                        Range of Harvest
                    </Typography>
                    <Slider
                        getAriaLabel={() => 'Range of Harvest Dates'}
                        value={harvestSlider}
                        onChange={handleHarvestSlider}
                        valueLabelFormat={valueLabelFormat}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={12}
                    />
                </Box>
            </Box>
        </Paper>
    );

    return(
        <Container
            maxWidth='md'
            align='center'
        >
            <Button 
                variant="contained"
                onClick={handleFilterButton}
                sx={{
                    m: 2
                }}
            >
                Filter
            </Button>
            
            {expanded && filters}
           
        </Container>
    )
}

export default FilterMenu;