import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography'

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%', mt:3, textAlign:'center', color:'white' }}>
      <Typography variant="body1" color="white">© 2024 All Rights Reserved</Typography>

      <BottomNavigation
      sx={{background:'transparent'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon sx={{color:'white'}} />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon sx={{color:'white'}} />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon sx={{color:'white'}} />} />
      </BottomNavigation>
    </Box>
  );
}
