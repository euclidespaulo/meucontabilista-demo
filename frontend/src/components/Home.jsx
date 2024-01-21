// Home.jsx
import React from 'react';
import { Box, Typography } from "@mui/material";
import Services from "./Services";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <>
      <Box sx={{ background: '#fff' }}>
        <Typography sx={{ paddingTop:'120px', width:'100%', height:'444px',fontWeight: 'bold', fontSize: '50px', fontFamily:'fantasy', textAlign: 'center' }}>
          Drive your Business with <br /> Revenue Led planning
        </Typography>
      </Box>
      <Box sx={{width:'100%', height:'644px', background: '#f3f7fd' }}>
        <Link activeClass="active" to="services" smooth={true} duration={5}>
          <Services />
        </Link>
      </Box>
    </>
  );
}

export default Home;
