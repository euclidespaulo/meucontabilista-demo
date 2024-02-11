import * as React from 'react';
import { Link, useLocation} from 'react-router-dom';
import {Box} from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import navList from '../../data/navbarList.json';
import LanguageSelector from '../translation/languageSelector';


const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const path = location.pathname


  return (
    <Box sx={{display:'flex', flexDirection:''}}>
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
              sx={{ 
                    color:'#707a86', 
                    fontSize:navItem.fontSize,
                    justifyContent: index === 3 & 'rigth' 
                  }}
              icon={<img src={navItem.src} height={navItem.height} width={navItem.width} />}
              
          
       
            />
          ))
        }
        <BottomNavigationAction
          component={LanguageSelector}
          sx={{
            color: '#707a86',
            fontSize: '16px', // Adjust the font size as needed
            justifyContent: 'right', // Align to the right
          }}
        />
      </BottomNavigation>
    </Box>
  );
}

export default NavBar;