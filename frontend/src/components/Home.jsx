// Home.jsx
import React from 'react';
import { Box, Stack, Typography} from "@mui/material";


const Home = () => {
  return (
    <Stack sx={{width:'100%'}}>
      <Box sx={{background:'#f3f7fd' }}>
        <Typography sx={{ paddingTop:'120px', width:'100%', height:'444px',fontWeight: 'bold', fontSize: '50px', fontFamily:'fantasy', textAlign: 'center' }}>
          Drive your Business with <br /> Revenue Led planning
        </Typography>
      </Box>
      <Box sx={{ width:'100%', height:'444px', background: '#fff'}} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
       
      </Box>
    </Stack>
  );
}

export default Home;
