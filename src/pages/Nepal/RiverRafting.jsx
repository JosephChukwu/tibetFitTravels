import React from 'react'
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import RiverRaftingImg from "../../assets/RiverRaftingImg.jpg";



const RiverRafting = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <main>
     {/*main grid */}
    <Grid container sx={{paddingX: { xs: "30px", sm: "90px" },width: "100%", display: "flex", flexDirection: {xs: "column", sm: "row"}, gap:{xs: 0, sm: 8}}}>

 {/*right grid */}
    <Grid item xs={12} sm={8}>

     {/*rightA grid */}
    <Grid style={{marginTop: "20vh",display: "flex",flexDirection: "column", justifyContent: "center",}}>
    <Typography variant="hTitle" sx={{ my: {xs: "10vh", sm: "10vh"}, textAlign: "left" }}>
    River Rafting
          </Typography>
          <img src={RiverRaftingImg} alt="RiverRaftingImg" style={{height: "auto", width: "100%"}} />
          </Grid>


 {/*rightB grid */}
    <Grid container sx={{mt: "5vh"}}>
    <Typography variant="body2">
      White water river rafting is one of the most popular adventures tourism activities in Nepal. Most of the Himalayan Rivers are running from north to south by creating high speed white water rapids that are the exciting for our river trips. There are many famous white water rivers like Trishuli River, Sunkoshi River, Seti, Marshyangdi, Kali Gandaki and Karnali rivers for rafting trips.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      For adventure loving people, the torrential rivers provide a sample opportunity to enjoy river rafting in Nepal. Whether professional or amateur, white water rafting in Nepal provides a unique chance to see the natural beauty, flora and fauna, and enjoy the beautiful landscape in the most memorable way: by river-road or trail. These river trips take you deep into the country where you can enjoy the untouched landscape, picturesque villages, and beautiful farming terraces. Besides that various recreation activities can be done during the river trip, such as, swimming, sun bathing, festival, sightseeing, animal viewing and bird watching etc.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      Our rafts are built to withstand the heaviest of punishment while comfortably accommodating ourselves and the supplies and equipment needed for an extended river journey. An experienced helmsman pilot from the stern, but paddle-power is needed from everyone to position the boat in the current line for the rapids. The 16 foot “rafts” takes a maximum of 8 people and usually operates in pairs to provide mutual support and spread the equipment load. Lifejackets are worn at all times and safety helmets are also used through the major rapids.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh', color: "rgb(0, 128, 0)", fontSize: "24px", lineHeight: "41px" }}>
      Best Season for Rafting
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      Autumn: September through November and Spring/summer: February through June will be best for river rafting in Nepal, however, we organize day trips in cold winter: December and January too.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh', fontWeight: 600 }}>
      TRIP KIT (things to pack)
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      River wear gear: shorts- half pant, T-shirts (long sleep for sun protection), swim wear, Sun Cap/Glass/Cream, personal water bottle, a pair of river sandals and a towel.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      For the camp site wear: Personal sleeping bag, lightweight shirts, Trouser/pant, under garments socks, a towel, light shoe, Fleece type pullover, flash light, personal toiletries, camera, reading and writing materials, medication recommended by your doctor.
    </Typography>  
    
    </Grid>

    </Grid>

 {/*left grid */}
 <Grid sx={{mt: {sm: "35vh", xs: "2vh"}}}>

 <Grid sx={{display: "flex", flexDirection: "column"}}>
 <Typography variant='sideT' sx={{mt: {xs: "5vh", sm: "15vh"}, mb: "2vh"}}>
 Nepal
 </Typography>
<Typography component={Link} to="/KathmanduValley" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Kathmandu Valley Tour</Typography>
<Typography component={Link} to="/Pokhara" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Pokhara Tour</Typography>
<Typography component={Link} to="/RiverRafting" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>River Rafting</Typography>
<Typography component={Link} to="/JungleSafari" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Jungle Safari</Typography>
 </Grid>

 <Grid sx={{display: "flex", flexDirection: "column"}}>
 <Typography variant='sideT' sx={{mt: "10vh", mb: "2vh"}}>
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

export default RiverRafting