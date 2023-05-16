import { Paper, InputBase, Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import Access from './Info';


/**
 * 
 * @param {*} props Contains props passed to component
 * @prop setCoordinates Contains coordinate useState modified
 * @prop setInitalPage Contains the inital page useState modified
 * @returns GeocodingSearchBar react component
 */
function GeocodingSearchBar(props) {
  const {setCoordinates} = props;
  const {setInitialPage} = props;
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
        setInitialPage(false);

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
        // border: '1px solid red',
      }} 
    >
      <Paper
        component='form'
        onSubmit={handleSearch}
        elevation={3}
        sx={{ 
          display: 'flex', 
          // width: '100%', 
          backgroundColor: 'rgb(50,53,60)',
          // alignItems: 'center', 
          // justifyContent: 'center',
          // flexDirection: 'column',
          // border: '1px solid red',
        }}
      >
        {/* <form 
          onSubmit={handleSearch}
        > */}
          <Box
            sx={{ ml: 1 }}
            style={{ 
              // flex: 1,
              display: 'flex', 
              width: '100%',
              alignItems: 'center',
              // border: '1px solid red',
            }}
          >
            <InputBase 
              type='text'
              placeholder="Search Google Maps"
              inputProps={{ 
                'aria-label': 'search google maps', 
                style:{ 
                  display: 'flex',
                  color: 'white', 
                  width: '100%',
                  // border: '1px solid red'
                } 
              }}
              value = {address}
              onChange={handleAddressChange}
            /> 
          </Box>
          {/* <Box style={{flexGrow: 1}}></Box> */}
          <Box
            style={{
              display: 'flex',
              width: '12%',
              alignItems: 'center',
              // border: '1px solid red'
            }}
          >
            <IconButton type="submit" sx={{ p: '10px' }} >
              <SearchIcon sx={{ color: grey[100] }} />
            </IconButton>
          </Box>
        {/* </form> */}
      </Paper>
    </Box>
  );
}

export default GeocodingSearchBar;