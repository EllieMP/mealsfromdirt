import { Paper, InputBase, Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import Access from './Info';

// '1801 E Cotati Ave, Rohnert Park, CA';
function GeocodingSearchBar(props) {
  const {setCoordinates} = props;
  const {setPageType} = props;
  const [address, setAddress] = useState('');

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();

    const apiKey = Access.key;
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const latitude = data.results[0].geometry.location.lat;
        const longitude = data.results[0].geometry.location.lng;
        setCoordinates({lat: latitude, lng: longitude});
        setPageType(false);
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
  }

  return (
    <Box 
      align='center' 
      sx={{
        flexGrow: 1, 
      }} 
      >
      <Paper
        elevation={3}
        sx={{ 
          display: 'flex', 
          width: 225, 
          backgroundColor: 'rgb(50,53,60)',
          alignItems: 'center', 
          justifyContent: 'center'
        }}
      >
        <form onSubmit={handleSearch}>
          <InputBase 
            type='text'
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ 'aria-label': 'search google maps', style:{ color: 'white' } }}
            value = {address}
            onChange={handleAddressChange}
          /> 
          <IconButton type="submit" sx={{ p: '10px' }} >
            <SearchIcon sx={{ color: grey[100] }} />
          </IconButton>
        </form>
      </Paper>
    </Box>
  );
}

export default GeocodingSearchBar;