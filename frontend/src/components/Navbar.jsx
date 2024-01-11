import * as React from 'react';
import { Link, useLocation} from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import LoginIcon from '@mui/icons-material/Login';

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const path = location.pathname

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Meucontabilista" icon={<HomeIcon />} component={Link} to="" selected={"" === path} />
        <BottomNavigationAction label="Services" icon={<WorkIcon />} component={Link} to="/Services" selected={"/Services" === path}/>
        <BottomNavigationAction label="Contact" icon={<ContactsIcon />} component={Link} to="/Contact" selected={"/Contact" === path}/>
        <BottomNavigationAction label="Login" icon={<LoginIcon />} component={Link} to="/Login" selected={"/Login" === path}/>
      </BottomNavigation>
    </Box>
  );
}