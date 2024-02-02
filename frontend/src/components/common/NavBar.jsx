import * as React from 'react';
import { Link, useLocation} from 'react-router-dom';
import {Box} from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import navList from '../../data/english/navbarList.json'


const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const path = location.pathname


  return (
    <Box sx={{display:'flex'}}>
      <BottomNavigation
        sx={{background: '#f3f7fd', marginTop:'20px', marginLeft:'130px'}} 
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        
        {
          navList.map((navItem, index) => (
            <BottomNavigationAction
              key={index}
              label={navItem.label}
              component={Link}
              to={navItem.to}
              selected={navItem.to === path}
              sx={{ color:'#707a86', fontSize:navItem.fontSize}}
            />
          ))
        }
      </BottomNavigation>
    </Box>
  );
}

export default NavBar;