// Home.jsx
import React from 'react';
import { Box, Typography} from "@mui/material";
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
     
      <Box sx={{ width:'100%', height:'444px', background:'red'}} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
        <Box sx={{ background:'blue'}} gridColumn="span 4">
          <Typography>xs=4</Typography>
        </Box>
        <Box sx={{ background:'pink'}} gridColumn="span 4">
          <Typography>xs=4</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Home;
