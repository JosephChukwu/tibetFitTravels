import React from 'react'
import { Box,Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ABCimg from "../../../assets/ABCimg.jpg";



const AnapurnaBase = () =>  {
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
    Annapurna Base Camp (18-days)

          </Typography>
          <img src={ABCimg} alt="ABCimg" style={{height: "auto", width: "100%"}} />
          </Grid>


 {/*rightB grid */}
    <Grid container sx={{mt: "5vh"}}>

    <Typography variant="body2" sx={{ fontWeight: 600 }}>
    Best Time for this trip:
    </Typography> 
    <Typography variant="body2" sx={{ fontWeight: 600, marginRight: {sm: "50%", xs: 0} }}>
    February to May and Mid-September to December
    </Typography>

    <Typography variant="body2" sx={{mt: "2vh"}}>
    Annapurna Base Camp or Sanctuary Trekking- leads to a natural amphitheater that is used asthe base camp from which climbers start on their way to conquer the Annapurna Mountaintop. The Annapurna Mountain reaches 8091 meters, and the base camp’s altitude is 4130 meters above sea level.
    </Typography>


    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
    This is one of the most popular trips in Nepal that combine Kathmandu valley, Pokhara and trekking – easy to moderate walking with majestic scenery and a mix of cultures unmatched by other treks in Nepal. The trekking route provides an interesting variety, ranging from lowland villages to outstanding high mountains, and breathtaking views of the Annapurna range. The trek passes through picturesque Gurung villages, terraced rice fields, rhododendron forest and beautiful landscapes. This, together with spectacular views of Mt. Machhapuchre (Mt. Fish Tail, the virgin peak), Fang, Annapurna-3, Gangapurna and Huinchuli. The trail finally stumbles across moraines and reaches Annapurna Sanctuary from where you will see undeniably beautiful and unimaginable 360 degree views of the Annapurna mountain ranges.
    </Typography>
    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
    Please read below itinerary for more details about this trip.
    </Typography>

    <Typography variant="body2" sx={{ my: '5vh', color: "rgb(0, 128, 0)", fontSize: "24px", lineHeight: "41px", marginRight: "100%" }}>
  Itinerary
</Typography> 



    
    <Typography variant="body2">DAY 1 ARRIVAL IN KATHMANDU Upon arrival at the airport, met and greet transfer to hotel.</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 2 KATHMANDU Guided sightseeing tour of Kathmandu; old palaces, Swoyambhunath stupa (the Monkey Temple) and Patan Durbar Squares…</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 3 KATHMANDU – POKHARA – TREKKING (DHAMPUS) We take an early morning scenic drive by car/coach to Phedi via Pokhara (6-7 hrs). Phedi will be the starting point for our ABC trek. Afternoon, we will start climbing to a ridge by traversing fields and forest and following a stone staircase, we reach to a small Hindu temple and then a short climb which will take us to Dhampus village.</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 4 DHAMPUS – LANDRUNG (5 HRS) After an early breakfast, we start our trek through the rhododendron forest and trails paved with stones and take a steep climb to Pothana village (2000 m).  The path slowly ascends until we reach Bhichowk Deorali (2149 m) from here we can see the view of Annapurna South and Hiunchuli. We then take a steep descend to Modi Khola and gently climb to a ridge and take short descend  to village of Tokla (1810 m). There are further ups and downs and crossing a stream on a suspension bridge takes us to our today’ destination Landrung, a Gurung settlement village (1620 m).</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 5 LANDRUNG – CHOMRONG (4-HRS) As usual, we start early morning we now descend and take a north route to Chomrong traversing alongside rice terraces, then through forests and follow the river bed leads us to New Bridge. The trail crosses on a suspension bridge and a stiff climb to Jhinu Danda (1760 m). There is a hot natural spring which takes 15 minutes downhill. Again trail climbs a long and steeps atop treeless ridge and the trail rounds a bend and enters the famous market village of Chomrong. The village controls the entry to the sanctuary and offers the first clear view of Annapurna South, Hiunchuli and Machhapuchhre (Fish Tail).</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 6 CHOMRONG – HIMALAYA (5-6 HRS) Today we walk through the forest to Kuldi Ghar, before the route goes steeply down a bank of rock and then levels out, running through riverside bamboo thickets along the base of the gorge. Then the track winds steeply up through deep bamboo and rhododendron forest to the village of Doban. From Dhovan it will take an hour to the Himalaya (2873 m).</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 7 HIMALAYA – MACHHAPUCHHRE BASE CAMP (3720 M) – 4-5 HRS The trail remains on the west bank of the Modi, now flowing through a more open valley, and eventually emerges into the Sanctuary. Straight ahead is the high lateral moraine of the South Annapurna glacier and the Modi follows a deep cliff to the right. This is the site of Machhapuchhre base camp from which can be seen a spectacular panorama of Annapurna Mountains.</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 8 MBC – ANNAPURNA BASE CAMP (4130 m) After early breakfast, easy walking excursions to Annapurna Base Camp (2-3 hrs) – our final destination of the trip. The day is easy and explores the incredible views of near vertical south face of Annapurna that towers above us to the north-west   and several other big peaks and trekking peaks. After exploring the highest mountains view and surrounding panorama, afternoon return to Machhapuchhre base camp.</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 9 MACHHAPUCHHRE BASE CAMP – DEORALI (4 HRS) Today trekking with porters, mostly downhill trails for back toDeurali (3230m). Rest and overnight.</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 10 DEORALI – CHOMRONG (5 HRS) As usual, after breakfast we will trek back to Chomrong village again for overnight.</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 11 CHOMRONG – GHANDRUK (1970 M) – 5 HRS As usual, after breakfast, we continue our trail from Chhomrong, the trail descends through forests to Gurjung Khola and then the trail ascends slightly until Kimrong. Then we reach the top of the Deurali, from where it is an easy way to reach Ghandrunk. Ghandrunk is a village of Gurung people, one of the ethnic groups of Nepal; they have their own dialect, culture, costume, and life style. Ghandrunk is one of the most famous destinations for trekkers known for its beautiful mountain views. (It is an easy reach from Pokhara or Kathmandu.) Our early arrival means we have the afternoon to visit the one of the Gurung Museum and explore the village. O/N</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 12 GHANDRUK – BIRETHANTI/NAYAPOOL – POKHARA From Ghandrung it’s easy and pleasant walking, all down hill, to Birethanti and Naya Pul where our trekking ends (4 hrs). Then our private transport will pick us up and drive to back Pokhara. Overnight at hotel.</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 13 POKHARA This is a day for Pokhara, to explore the lake city, visit International Mountain Museum, Tibetan refugee camp, walk to lake side etc.</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 14 FLY POKHARA – KATHMANDU After breakfast, free time, and transfer to airport for our flight to Kathmandu. Our private transport will pick us up from airport and transfer to hotel in Kathmandu. Rest of the day free at leisure.</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 15 KATHMANDU – BHAKTAPUR – DHULIKHEL After breakfast, we proceed the trip to Bhaktapur, one of the World Heritage sites of Kathmandu valley and well preserved ancient Kingdom. After sightseeing the old temples and palace squares of Bhaktapur, afternoon drive from here to Dhulikhel, a nice hill station for overnight.</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 16 DHULIKHEL – CHANGU NARAYAN – NAGARKOT After morning view and breakfast in Dhulikhel, drive to Changu Narayan Temple, one of the oldest temples in the valley. After visiting the temple, we will do easy hiking about one and half hour to Telkot, one the way to Nagarkot.</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 17 NAGARKOT – KATHMANDU After breakfast and morning view from Nagarkot, we will drive back to Kathmandu. Rest of the day free for your self-activities and shopping. Evening a traditional cultural show with Nepali dinner.</Typography>
    <Typography variant="body2" sx={{ mt: '2vh' }}>DAY 18 DEPARTURE FROM KATHMANDU After breakfast at the hotel, free time and as per your flight time, we will transfer you to airport for your flight home or next destination. Namaste! End of the trip.</Typography>
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

export default AnapurnaBase