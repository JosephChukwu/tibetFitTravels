import React from 'react'
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import JungleSafariImg from "../../assets/JungleSafariImg.jpg";




const JungleSafari = () => {


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
    Jungle Safari
          </Typography>
          <img src={JungleSafariImg} alt="JungleSafariImg" style={{height: "auto", width: "100%"}} />
          </Grid>


 {/*rightB grid */}
    <Grid container sx={{mt: "5vh"}}>
    <Typography variant="body2">
    Nepal’s tourist attractions are not only for the Himalayas and its diverse culture, but also for a blend of nature and human-efforts. Nepal has around 18 percent of its land as protected area – either known as national parks or wildlife reserves. While the high Himalayas make up Nepal’s northern region, the southern lowland known as “Terai” is covered with dense tropical jungles teeming with diverse wildlife and exotic birds. Here you will find some of the exciting safari destinations in the world. Among the 14 national parks and wildlife reserves in Nepal, the Royal Chitwan National Park (967sq-km), Royal Bardiya National Park (968sq-km) and Koshi Tappu Wildlife Reserve (175sq-km) are the most popular safari destinations. These Parks and Reserves are homes to many rare wild animals including the Royal Bengal Tiger, endangered one-horned rhino, crocodile, four-horned antelope, striped hyena, the Gangetic dolphin, and more than 550 different species of colorful birds. Jungle safari activities include going into deep jungle on elephant back to view the wildlife, ride canoe on the park rivers to see Crocodile and water birds, nature walk, bird watching, native village tour and cultural show. All these parks are easily accessible by road and regular flights to organize your trips. Many adventurers also take rafting trip to go down. However you go, a safari trip in Nepal is an experience you will remember for a long time.
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

export default JungleSafari