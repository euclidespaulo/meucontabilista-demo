import React from 'react';
import { Grid, Typography } from "@mui/material";
import SectionThemeProvider from '../../styles/homePage/sectionThemeProvider';



const Section = ({ title, description, imageSrc, details, reverse }) => {
  return (
    <SectionThemeProvider>
      <Grid 
        container 
        spacing={2}
        sx={{ 
            padding:'50px',
            background: reverse ? '#f3f7fd' : '#fff' 
          }}
        >
        <Grid item xs={12} sm={5} sx={{ display: 'flex', flexDirection: 'column', padding:'12px'}}>
          <Typography variant="h2">
            {title}
          </Typography>
          <Typography variant="body1">
            {description}
          </Typography>
          {details && (
          <Typography variant="body1">
            <ul  style ={{marginLeft:'12px', padding:0}}>
                {
                  details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))
                }
            </ul>
          </Typography>
            
          )}
        </Grid>
        <Grid item xs={12} sm={7} sx={{padding:'20px', background:'#f9fbfe', borderRadius:'12px'}}>
          <img src={imageSrc} alt={description} width='100%' />
        </Grid>
      </Grid>
    </SectionThemeProvider>
  );
};

export default Section;
