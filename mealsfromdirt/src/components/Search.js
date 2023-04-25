import { useState } from "react";
import { Box, TextField } from "@mui/material";

const addressURL = 'https://maps.googleapis.com/maps/api/geocode/json'
const apiKey = 'tbd';
const apiURL = 'https://maps.googleapis.com/maps/api/js?key=';
const apiAccess = apiURL.concat(apiKey);

function geocode(){
    var location = '1801 E Cotati Ave, Rohnert Park, CA';
    // var geocoder = new google.maps.Geocoder();

    // geocoder.geocode({ 'address': address }, function(results, status) {
    //     if (status == 'OK') {
    //     var lat = results[0].geometry.location.lat();
    //     var lng = results[0].geometry.location.lng();
    //     // Do something with the latitude and longitude
    //     } else {
    //     alert('Geocode was not successful for the following reason: ' + status);
    //     }
    // });
}


function Search(){
    return(
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
    )
}

export default Search;