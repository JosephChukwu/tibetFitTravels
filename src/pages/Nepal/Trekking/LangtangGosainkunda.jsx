import React from 'react'
import { Box,Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import LangtangImg from "../../../assets/LangtangImg.jpg";



const LangtangGosainkunda = () => {
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
    Langtang-Gosainkunda
          </Typography>
          <img src={LangtangImg} alt="LangtangImg" style={{height: "auto", width: "100%"}} />
          </Grid>


 {/*rightB grid */}
    <Grid container sx={{mt: "5vh"}}>

    <Typography variant="body2">
<strong>Best time of this trip: Late October to Mid-December and February to May
</strong>
    </Typography>


    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
    The Himalayan region, north of Katmandu valley offers a multitude of trekking destinations, all accessible without flights. The major areas Langtang and Gosainkunda are combined in this trip. Langtang trekking offers experiences that could not be found elsewhere. The trails are moderate challenging with long, steep climbs up and descents, often through deep forests or across glacier mountain views and interesting villages with well-established teahouses and trekker’s lodges. Langtang has many glaciers of varying sizes; the Langtang and Ganesh Himal mountain ranges and high altitude lakes including Gosainkunda, parvatikunda, Bhairavkunda, Dudhkunda etc. This region is home to many old Gompas and Buddhist monasteries.
    </Typography>
    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
    Please read below itinerary for more details about this trip.
    </Typography>

    <Typography variant="body2" sx={{ my: '5vh', color: "rgb(0, 128, 0)", fontSize: "24px", lineHeight: "41px", marginRight: "100%" }}>
  Itinerary
</Typography> 



<Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 1: ARRIVAL IN KATHMANDU</strong> - Upon arrival at the airport, meet and greet transfer to hotel.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 2:</strong> Guided sightseeing tour of Kathmandu; old palaces, Swoyambhunath stupa (the Monkey Temple) and Patan Durbar Squares.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 3:</strong> Day guided tour to Bhaktapur, also known as Bhadgaon, to explore the old city and temples…
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 4: KATHMANDU – SYABRUBESI</strong> - After breakfast at your hotel, a scenic drive by jeep or private bus to Syabrubesi, 146km, about 6-hours, on good and some rough roads. Overnight at a tea house.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 5: SYABRU BESI – RIMCHE (1640m)</strong> - Trekking approx. 6 hours scenic walk – moderate challenge. Rest and overnight.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 6: RIMCHE- LANGTANG VILLAGE (2455m)</strong> - Trekking approx. 6-hrs’ scenic walk, moderate challenge.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 7: LANGTANG VILLAGE</strong> - Extra day for acclimatization and exploring around…
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 8: LANGTANG VILLAGE – KYANJIN GOMPA (3870m)</strong> - Trekking approx. 4-5 hrs scenic walk, moderate challenge…
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 9: KYANJIN GOMPA</strong> - Extra day for acclimatization and explore the Langtang valley and Langtang glaciers…
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 10: KYANJIN GOMPA – RIMCHE (2455m)</strong> - Trekking about 6-7 hours walk, mostly down…
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 11: Trek RIMCHE – THULO SYABRU (2250m)</strong> - Trekking about 7-8 hours, 800m descent, 600m ascent, a full day of walking…
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 12: THULO SYABRU – LAUREBINA YAK (3920m)</strong> - Trekking about 6-7 hours, 1670m challenging ascent in a big day with amazing views and forest trail…
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 13: GOSAINKUND (4400m)</strong> - Day hike to Gosainkunda, the famous holy lake situated at an altitude of 4400m above sea level, explore and return to Laurebina Yak for overnight, 3 hrs up/2 hrs down plus hikes in Gosainkund…
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 14: LAUREBINA YAK – SING GOMPA (3330m)</strong> - Trekking short and scenic day, 3-4 hours all downhill, rest and overnight in Sing Gompa.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 15: SING GOMPA – DHUNCHE (1960m)</strong> - Trekking about 6 hours, mostly down-hill walk to Dhunche, overnight in Dhunche.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 16: DHUNCHE – KATHMANDU</strong> - After breakfast, Jeep/Bus Pick up from Dhunche and 6-7 hours drive back to Kathmandu.
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 17: KATHMANDU</strong> - Free day in Kathmandu for self-activities on leisure and self-explore around the town…
    </Typography>

    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
      <strong>DAY 18: DEPARTURE FROM KATHMANDU</strong> - After breakfast at the hotel, free time and as per your flight time, we will transfer you to the airport for your flight home or next destination. Namaste! End of the trip.
    </Typography>
    


    <Typography variant="body2" sx={{ mt: '3vh', fontWeight: 600  }}>
    *** This itinerary can be changed or modified as per your time, requirement and interest.
    </Typography>
    <Typography variant="body2" sx={{ mt: '2vh'}}>
    Cost of This Trip: depend on your group size and your requirements. Please e-mail us for a special price quote.
    </Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>
    For more information and booking this trip, please contact us in advance. Thank you for your time.
    </Typography>

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
 Nepal
 </Typography>
<Typography component={Link} to="/KathmanduValley" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Kathmandu Valley Tour</Typography>
<Typography component={Link} to="/Pokhara" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Pokhara Tour</Typography>
<Typography component={Link} to="/RiverRafting" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>River Rafting</Typography>
<Typography component={Link} to="/JungleSafari" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Jungle Safari</Typography>
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

export default LangtangGosainkunda