import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';


function FilterMenu(props){
    const [expanded, setExpanded] = useState(false);
    
    function handleFilterButton() {
        setExpanded(!expanded);
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
                    sx={{m:1}}
                >
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Fruits" />
                    <FormControlLabel control={<Checkbox defaultChecked/>} label="Vegetables" />
                </FormGroup>
                <Box 
                    sx={{ 
                        ml: 10,
                        mt: 2,
                        width: 300 
                    }}
                >
                    <Slider
                        aria-label="Growth Rate"
                        defaultValue={30}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={110}
                    />
                    <Slider
                        aria-label="TBD"
                        defaultValue={30}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={110}
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