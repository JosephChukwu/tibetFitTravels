import React from 'react'
import { Carousel } from '../../components/Carousel'
import bhutanCulturalTour from "../../assets/bhutanCulturalTour.jpg";
import nepalMountain from "../../assets/nepalMountain.jpg";
import TibetFitTravel from "../../assets/TibetFitTravel.jpg";
import TibetTour from "../../assets/TibetTour.jpg";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContentGrid2 from '../../components/ContentGrid2';
import { Link } from "react-router-dom";
import Daytripimg0 from "../../assets/Daytripimg0.jpg";
import DayTripimg01 from "../../assets/DayTripimg01.jpg";
import DayTripimg1 from "../../assets/DayTripimg1.jpg";
import DayTripimg3 from "../../assets/DayTripimg3.jpg";



const LhasaDayTrip = () => {


  const content = {
    "Day trip to Potala palace & Sera monastery": [
      {text: "Morning visit Potala palace, the seat of both religion and politics in Tibet. It was built in the 7th century by Tibetan king Songtsen Gampo and later renovated by the 5th Dalai Lama in the 17th century."},
      {image: Daytripimg0},
      {text: "Afternoon visit Sera monastery, 5 km north of Lhasa city. It was built in 1419 by Jamchen Choeji, a disciple of Tsongkhapa, founder of the Gelugpa sect. Sera is one of the three major monasteries of the yellow sect in Tibet."},
      {image: DayTripimg01}
    ],
    "Day trip to Gaden monastery": [
      {text: "Morning drive to Gaden monastery which is the mother monastery from the Gelugpa monastery i(Yellow hat sect) n Tibet.  It was built in 1409 by Tsongkhapa master from Amdo region.  We recommended to do Gaden monastery and you can have nice view of Lhasa river gorge and also you can walk with local Tibetan pilgrimages.  It's very nice short hike. After finished visit the Gaden monastery drive back to Lhasa ."},
     {image: DayTripimg1}
    ],
    "Namsto lake day trip": [
      {text: "Today you will explore and hike around Lake side, visit Tashi Dor Monastery,Guru Rinpoche caves and Nomads black tents.There you can see beautiful Landscapes of Mt, Nyenchen Thangla range, thousands of nomad Yaks and Sheeps.Namtso is one of the holiest Lake and most of the Tibetans visit there.Namtso means Sky Lake in Tibetan because we can imaging this Lake is seemed very close connection to the Sky. After finished sightseeing drive back with same route to Lhasa."},
      {image: DayTripimg3}
    ]
    // Add more tabs as needed
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
    <Grid container sx={{paddingX: { xs: "30px", sm: "90px" },width: "100%", display: "flex", flexDirection: {xs: "column", sm: "row"}, gap:{xs: 0, sm: 8}}}>

 {/*right grid */}
    <Grid item xs={12} sm={8}>

     {/*rightA grid */}
    <Grid style={{marginTop: "20vh",display: "flex",flexDirection: "column", justifyContent: "center",}}>
    <Typography variant="hTitle" sx={{ my: {xs: "10vh", sm: "15vh"}, textAlign: "left" }}>
    Lhasa day trip
          </Typography>
         <Carousel data={slides} />
    </Grid>


 {/*rightB grid */}
    <Grid container sx={{mt: "5vh"}}>
    <ContentGrid2 content={content}/>
    </Grid>

    </Grid>

 {/*left grid */}
 <Grid sx={{mt: {sm: "35vh", xs: "2vh"}}}>

 <Grid sx={{display: "flex", flexDirection: "column"}}>
 <Typography variant='sideT' sx={{mt: {xs: "5vh", sm: "15vh"}, mb: "2vh"}}>
 TREKKING
 </Typography>
<Typography component={Link} to="/AnapurnaBase" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Annapurna Base Camp</Typography>
<Typography component={Link} to="/LhasaDayTrip" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Lhasa day trip</Typography>
<Typography component={Link} to="/MustangTrek" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Mustang Trek</Typography>
<Typography component={Link} to="/LangtangGosainkunda" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Langtang-Gosainkunda</Typography>
 </Grid>


 <Grid sx={{display: "flex", flexDirection: "column"}}>
 <Typography variant='sideT' sx={{mt: "10vh", mb: "2vh"}}>
 TIBET
 </Typography>
<Typography component={Link} to="/LhasaCityTour" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Lhasa city tour</Typography>
<Typography component={Link} to="/LhasaEverestBase" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Lhasa -Everest base Camp Tour</Typography>
<Typography component={Link} to="/KailashLhasa" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Lhasa to Mt Kailash trips</Typography>
<Typography component={Link} to="/EasternTibet" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Eastern Tibet tour</Typography>
 </Grid>

 <Grid sx={{display: "flex", flexDirection: "column"}}>
 <Typography variant='sideT' sx={{mt: "10vh", mb: "2vh"}}>
 Nepal
 </Typography>
<Typography component={Link} to="/KathmanduValley" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Kathmandu Valley Tour</Typography>
<Typography component={Link} to="/Pokhara" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Pokhara Tour</Typography>
<Typography component={Link} to="/RiverRafting" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>River Rafting</Typography>
<Typography component={Link} to="/JungleSafari" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Jungle Safari</Typography>
 </Grid>
 
 

 

 <Grid sx={{display: "flex", flexDirection: "column"}}>
 <Typography variant='sideT' sx={{mt: "10vh", mb: "2vh"}}>
 BHUTAN
 </Typography>
<Typography component={Link} to="/Bhutancultural" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Bhutan Cultural Tour</Typography>
 </Grid>

 <Grid sx={{display: "flex", flexDirection: "column"}}>
 <Typography variant='sideT' sx={{mt: "10vh", mb: "2vh"}}>
 AMODO KHAN
 </Typography>
<Typography component={Link} to="/AmdoCultural" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Amdo Cultural Tour</Typography>
<Typography component={Link} to="/SpecialKhamTour" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Special Kham Tour</Typography>
 </Grid>


 </Grid>


    </Grid>
    </main>
  )
}

export default LhasaDayTrip




