import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';


function FilterMenu(){
    function handleFilterButton(){
        // setOpenFilter(!openFilter);
        
    }
    
    const filters = (
        <Paper sx={{ m: 1 }} elevation={4}>
            <Box component="svg" sx={{ 
                width: 100, 
                height: 100,
                border: '1px solid black'
            }}>
            
            </Box>
        </Paper>
    );

    return(
        <Container
            maxWidth='sm'
            align='center'
            sx={{
                border: '1px solid black'
            }}
        >
            <Button 
                variant="contained"
                onClick={handleFilterButton()}
            >
                Filter
            </Button>
            <Collapse 
                
            >
                {filters}
            </Collapse>
        </Container>
    )
}

export default FilterMenu;