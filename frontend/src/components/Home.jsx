import React from 'react';
import { Box, Stack, Button, Typography, Grid} from "@mui/material";
import { Link } from 'react-router-dom';


const titleStyle = {fontWeight:'bold', fontSize: '32px', fontFamily: 'Untitled sans, sans-serif'};
const descriptionStyle = {marginTop:'16px', fontSize: '16px', fontFamily: 'Untitled sans, sans-serif'};

const Home = () => {
  return (
    <Stack direction='column'>
      <Box sx={{height:'500px', background: '#f3f7fd', }} > 
        <Typography sx={{ paddingTop:'120px', marginBottom:'10px', fontWeight:600, fontSize: '50px', fontFamily: 'Decimal, sans-serif', textAlign: 'center' }}>
          Drive your business with <br/> Revenue-Led Planning
        </Typography>
        <Typography sx={{ color:'#455361', fontSize: '18px', lineHeight:'32px', textAlign: 'center', }}>Model effortlessly, forecast collaboratively, storytell effectively</Typography>
        <Box sx={{display:'flex', justifyContent:'center', marginTop:'32px'}}>
        <Link to='/Book'>
          <Button variant="contained" sx={{color:'#fff', background:'#1d75dd', borderRadius:'6px'}}>
            Book a meeting Today 
          </Button>
        </Link> 
        </Box>
      </Box>
      <Grid container sx={{ paddingLeft:'50px', paddingRight:'50px', height:'450px', background: '#fff', alignItems:'center'}}>
        <Grid item xs={12} sm={6}>
          <Typography sx={titleStyle}>The modern way to build and automate your financial models business plans </Typography>
          <Typography sx={descriptionStyle}> Stop struggling with spreadsheets, wrangling CSVs, and digging through outdated files. Start sharing live reports that drive better decisions, in minutes. </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src='/Sheet1.svg' alt='jjk' width='100%'/>
        </Grid>
      </Grid>
      <Grid container sx={{ paddingLeft:'50px', paddingRight:'50px', height:'450px', background: '#f3f7fd', alignItems:'center'}}>
        <Grid item xs={12} sm={6}>
          <Typography sx={titleStyle}>Automate and unite data in seconds</Typography>
          <Typography sx={descriptionStyle}> 
            Pull financial data directly from your accounting system, and combine it with operational data from your CRM and data warehouse to build fully integrated models.
            <br/> Consolidate data from multiple sources and business entities into a single view, with the ability to drill down into granular detail when you need.
            <br/> Automatically track the performance of your model against actual data, and compare model versions (e.g. Budget) against actuals and re-forecasts.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src='/Chart.svg' alt='jjk' width='100%'/>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Home;
