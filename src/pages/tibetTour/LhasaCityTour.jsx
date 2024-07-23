import React from 'react'
import { Carousel } from '../../components/Carousel'
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import bhutanCulturalTour from "../../assets/bhutanCulturalTour.jpg";
import nepalMountain from "../../assets/nepalMountain.jpg";
import TibetFitTravel from "../../assets/TibetFitTravel.jpg";
import TibetTour from "../../assets/TibetTour.jpg";
import { useTheme } from "@mui/material/styles";
import ContentGrid from '../../components/ContentGrid';



const LhasaCityTour = () => {


  const content = {
    Tab1: 'This is the content for Tab 1. It is long text and will change when another tab is clicked.',
    Tab2: 'This is the content for Tab 2. Here is some different long text to display.',
    Tab3: 'This is the content for Tab 3. Another set of long text for this tab.',
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const slides = [
    { src: bhutanCulturalTour, alt: "Bhutan Tour" },
    { src: nepalMountain, alt: "Nepal-Mountain" },
    { src: TibetFitTravel, alt: "Tibet F.I.T Travel" },
    { src: TibetTour, alt: "Tibet Tour" },
  ];


  return (
    <main>
     {/*main grid */}
    <Grid Container sx={{paddingX: { xs: "30px", sm: "90px" },width: "100%", display: "flex", flexDirection: {xs: "column", sm: "row"}}}>

 {/*right grid */}
    <Grid item xs={12} sm={8}>

     {/*rightA grid */}
    <Grid style={{marginTop: "20vh",display: "flex",flexDirection: "column", justifyContent: "center",}}>
    <Typography variant="hTitle" sx={{ my: {xs: "5vh", sm: "10vh"}, textAlign: "left" }}>
            Lhasa city tour
          </Typography>
         <Carousel data={slides} />
    </Grid>


 {/*rightB grid */}
    <Grid Container>
    <ContentGrid content={content}/>
    </Grid>

    </Grid>

 {/*left grid */}
    <Grid item xs={12} sm={4}>
    
    </Grid>


    </Grid>
    </main>
  )
}

export default LhasaCityTour;