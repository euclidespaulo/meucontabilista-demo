import * as React from 'react';
import { Link, useLocation} from 'react-router-dom';
import {Box} from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const path = location.pathname

  return (
    <Box sx={{margin:'0', background: '#fff'}}>
      <BottomNavigation
      sx={{background: '#fff'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction sx={{color: '#707a86', fontFamily:'sans-serif', fontWeight: 'bold', fontSize:'90px'}} label="Meucontabilista"  component={Link} to="" selected={"" === path} />
        <BottomNavigationAction sx={{color: '#707a86', fontSize:20}} label="Services"  component={Link} to="/Services" selected={"/Services" === path}/>
        <BottomNavigationAction sx={{color: '#707a86',fontSize:20}} label="Book"  component={Link} to="/Book" selected={"/Book" === path}/>
      </BottomNavigation>
    </Box>
  );
}

export default Navbar;