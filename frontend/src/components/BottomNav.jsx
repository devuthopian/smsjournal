import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


import DiscoveryIcon from '../images/discovery-icon.svg';
import StarIcon from '../images/star-icon.svg';
import ProfileIcon from '../images/profile-icon.svg';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Discovery"/>
        <BottomNavigationAction label="Star"/>
        <BottomNavigationAction label="Profile"/>
      </BottomNavigation>
    </Box>
  );
}