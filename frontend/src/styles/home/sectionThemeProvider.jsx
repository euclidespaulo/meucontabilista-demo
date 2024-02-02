import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const SectionThemeProvider = ({ children }) => {

  const sectionTheme = createTheme({
    typography: {
      fontFamily: 'Untitled sans, sans-serif',

      h2: {
        fontWeight: 'bold',
        fontSize: '28px',
        textAlign:'left'
      },

      body1: {
        marginTop:'12px',
        fontSize: '16px',
        textAlign:'justify',
      },
    },
  });

  return <ThemeProvider theme={sectionTheme}>{children}</ThemeProvider>;
};

export default SectionThemeProvider;
