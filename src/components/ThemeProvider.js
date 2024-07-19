import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#46c4bd", //0379a9  //1c86b1
      ash: "#a5a7a6",
    },
    secondary: {
      main: "#a5a7a6",
    },
  },
  typography: {
    fontFamily: 'Raleway, sans-serif',
    h3: {
      fontWeight: 650,
      fontStyle: 'normal',
      color: 'rgb(255, 255, 255)',
      fontSize: '18px',
      lineHeight: '20px',
      fontFamily: 'Raleway, sans-serif',

    },
    h4: {
      fontWeight: 650,
      fontStyle: 'normal',
      color: 'rgb(255, 255, 255)',
      fontSize: '57px',
      lineHeight: '67px',
      fontFamily: 'Raleway, sans-serif',

    },
    h5: {
      fontWeight: 600,
      fontStyle: 'normal',
      color: 'rgb(68, 63, 63)',
      fontSize: '32px',
      lineHeight: '35px'
    },
    h1: {
      fontWeight: 600,
      fontStyle: 'normal',
      color: 'rgb(68, 63, 63)',
      fontSize: '52px',
      lineHeight: '57px',
    //   fontFamily: 'Arial, sans-serif', 
    },
    body1: {
      fontWeight: 600,
      fontStyle: 'normal',
      color: 'rgb(68, 63, 63)',
      fontSize: '22px',
      lineHeight: '24px',
    },
    body2: {
      fontWeight:400,
      fontStyle: 'normal',
      color: 'rgb(58, 58, 58)',
      fontSize: '15px',
      lineHeight: '26px',
      fontFamily: "Source Sans Pro",
    },
    body3: {
      fontWeight:600,
      fontStyle: 'normal',
      color: 'rgb(58, 58, 58)',
      fontSize: '15px',
      lineHeight: '26px',
      fontFamily: "Source Sans Pro, sans-serif",
    },
    link: {
      fontWeight:400,
      fontStyle: 'normal',
      color: 'rgb(58, 58, 58)',
      fontSize: '15px',
      lineHeight: 'normal',
      fontFamily: "Source Sans Pro",
    },
    title: {
      fontWeight:600,
      fontStyle: 'normal',
      color: 'rgb(0, 124, 40)',
      fontSize: '20px',
      lineHeight: '22px',
      fontFamily: "Raleway",
    },
    Ftitle: {
      fontWeight:600,
      fontStyle: 'normal',
      color: 'rgb(227, 230, 237)',
      fontSize: '19px',
      lineHeight: '32px',
      fontFamily: "Source Sans Pro, sans-serif",
    },
    Fbody: {
      fontWeight:400,
      fontStyle: 'normal',
      color: 'rgb(227, 230, 237)',
      fontSize: '15px',
      lineHeight: '26px',
      fontFamily: "Source Sans Pro, sans-serif",
    },
    
    // Add more variants as needed
  },
});
