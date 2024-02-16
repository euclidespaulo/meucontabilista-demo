import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const IntroThemeProvider = ({ children }) => {

  const introTheme = createTheme({
    typography: {
      fontFamily: 'Decimal, sans-serif',
      

      h1: { 
        margin: '10px', 
        fontWeight: 600, 
        fontSize: '50px',
      },

      subtitle2: {
        color: '#455361', 
        fontSize: '18px',  

      },
    },
  });

  return <ThemeProvider theme={introTheme}>{children}</ThemeProvider>;
};

export default IntroThemeProvider;