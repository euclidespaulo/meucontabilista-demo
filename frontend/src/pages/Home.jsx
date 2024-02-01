import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box, Button, Typography} from "@mui/material";
import Section from '../Components/common/section'
import homepageText from '../data/homepageText.json'

const Home = () => {
  return (
    <Stack direction='column'>
      <Box sx={{ height: '500px', background: '#f3f7fd', }} >
        <Typography sx={{ paddingTop: '120px', marginBottom: '10px', fontWeight: 600, fontSize: '50px', fontFamily: 'Decimal, sans-serif', textAlign: 'center' }}>
          Drive your business with <br /> Revenue-Led Planning
        </Typography>
        <Typography sx={{ color: '#455361', fontSize: '18px', lineHeight: '32px', textAlign: 'center', }}>
          Model effortlessly, forecast collaboratively, storytell effectively
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
          <Link to='/Book'>
            <Button variant="contained" sx={{ color: '#fff', background: '#1d75dd', borderRadius: '6px' }}>
              Book a meeting Today
            </Button>
          </Link>
        </Box>
      </Box>
      {
        homepageText.map((homepageItem, index) => (
            <Section key={index} {...homepageItem}/>
          ))
      }
      
    </Stack>
  );
};

export default Home;
