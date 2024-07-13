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
    
    // Add more variants as needed
  },
});
