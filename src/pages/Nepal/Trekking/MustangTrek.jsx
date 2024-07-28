import React from 'react'
import { Box,Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import MustangImg from "../../../assets/MustangImg.jpg";



const MustangTrek = () => {
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
    Mustang Trek
          </Typography>
          <img src={MustangImg} alt="MustangImg" style={{height: "auto", width: "100%"}} />
          </Grid>


 {/*rightB grid */}
    <Grid container sx={{mt: "5vh"}}>

    <Typography variant="body2">
    Mustang – at the head of the Kali Gandaki River, north of the Annapurna and Dhaulagiri Himalaya, lies one of the most culturally interesting and scenically dramatic region in Nepal.
    </Typography>


    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
    This is one of the very popular trekking regions in Nepal. The Home Ministry of Nepal announced the Opening of the restricted areas in October 1991. There is also strict control in obtaining a special permit from the Department of Immigration to protect their tradition from outside influence as well as to protect the environment. According to government rule, only organized trekking groups are allowed to trek in Mustang. The region of Tibetan influence, Kaligandaki, from the Tibetan border south to Kagbeni is generally referred to as “Upper Mustang”. The trek to Lo Manthang is through an almost tree-less barren landscape, a steep rocky trail up and down hill and panoramic views of Nilgiri, Annapurna, Dhaulagiri and several other peaks make your trek memorable one
    </Typography>
    <Typography variant="body2" sx={{ marginTop: '2vh' }}>
    Please read below itinerary for more details about this trip.
    </Typography>

    <Typography variant="body2" sx={{ my: '5vh', color: "rgb(0, 128, 0)", fontSize: "24px", lineHeight: "41px", marginRight: "100%" }}>
  Itinerary
</Typography> 



    
<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 1: ARRIVAL IN KATHMANDU</strong> - Meet at airport and greet transfer to hotel.
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 2: KATHMANDU</strong> - Guided introductory tour of Kathmandu old cities; visit Swoyambhunath stupa and Patan Durbar Squares…
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 3: KATHMANDU</strong> - Rest day and preparation of trip permits and necessary arrangement…
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 4: KATHMANDU – POKHARA</strong> - After breakfast, trip proceeds for Pokhara (200 km), about 5-6 hours scenic drive by private car/coach. O/N
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 5: POKHARA – JOMSOM – KAGBENI</strong> - Fly to Jomsom, the district headquarters of Mustang and start trek to Kagbeni, and the starting point of the “Upper Mustang”. Overnight at a lodge in Kagbeni.
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 6: KAGBENI – CHELE</strong> - There is a trail up the east bank of the Kaligandaki that climbs over many ridges as it heads north and reaches Tangbe village. The town is a labyrinth of narrow alleys amongst whitewashed houses, fields of buckwheat, barley, wheat and apple orchards. Nilgiri peak that dominates the southern skyline at Kagbeni continues to loom massively at the foot of the valley. Beyond Tangbe we reach Chhusang village about 1 1/2 hrs trek, and cross the river from there and continue north climbing up the trail to a huge red chunk of conglomerate that has fallen from the cliff above, forming a tunnel through which the Kaligandaki follows. The trek now leaves Kali Gandaki valley and climbs steeply up a rocky gully to Chele at 3030 Mt. The culture changes from the Manangi culture to the Tibetan culture of Lo from here. Night at a local lodge/teahouse.
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 7: CHELE – SHYANGMOCHEN</strong> - The climb continues along steep, treeless, waterless terrain, along the side of the spectacular steep canyon to a pass and cairn of rock at 3540 Mt. Then the trail makes a long gradual descent to some chortens on a ridge, then descends further on a pleasant trail to Samar. The Annapurna, still dominated by Nilgiri, is visible far to the south. Climb above Samar to a ridge, then descend into a large gorge and the trail goes into another valley field, crosses a stream and climbs up to a ridge at 3800 Mt. The route climbs over yet another pass, follows a ridge and then descends to Shyangmochen. O/N at a local lodge/teahouse.
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 8: SHYANGMOCHEN – TAMARGOAN – CHARANG</strong> - From Shyangmochen gently climb to a pass at 3770m and descend to Geling. The trail climbs gently to the interesting pass on your trek NYI LA and descend below the blue, grey and red cliffs across the valley to a steel bridge across the Tangmar Chu (river), then climbs past what is perhaps the longest and most spectacular stretch and main wall in Nepal. Climbing over another pass at 3600m, the route makes a long gentle descent to Charang. The huge five-story white Dzong and red Gompa are an interesting visit to observe collections of statues and Thankas as well as many large paintings of seated Buddha’s. O/N at a local lodge/teahouse.
</Typography>

<Typography variant="body2"sx={{ marginTop: '2vh' }}>
<strong>DAY 9: CHARANG – LO MANTHANG</strong> - The trail descends about 100 meters down from Charang, crosses the Charang-Chu and climbs steeply up a rocky trail to a cairn on a ridge and continues to climb. Finally from a ridge at 3850 Mt. there is a view of the walled city of LO. After a short descent, cross a stream then climb up into the plateau of LO Manthang. O/N at a local lodge/hotel.
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 10: LO MANTHANG</strong> - There are four major places and several other places like the Tall Champa Lakhang “God house”, the red Thugchen Gompa, Chyodi Gompa and the Entrance Hall, which are the main attractions of this town. Another attraction is the four-story building of the Raja’s Palace as well as the surrounding panoramic views of the Himalayas. Having seen one, you are excited to see the others.
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 11: LO MANTHANG</strong> - Besides LO Manthang there are two other interesting valleys worth visiting. The western valley Tingkhar, the sight of Raja’s summer palace, Kimling and Phuwa as well as the Gompa of Nangyals “The Monastery of Victory ” is the newest and most active Gompa in LO. The eastern valley contains Chosar, the site of a High School, Garphu and Nyphu Gompa and it was the main trading route to Lhasa (Tibet).
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 12: LO MANTHANG – GHAMI VIA GEKAR</strong> - This is an opportunity to visit two other villages on your return trek. The trail climbs steadily to the pass marked by a cairn, offering a last glimpse of LO Manthang. The trail contours past two small ridges and valleys and across a ridge at 4070m then descends across to the south through two more valleys, meadows and a stream. The trail then makes a long rocky descent to Gekar. LO Gekar Gompa is older than Samye Gompa in Tibet and one of the oldest Gompa in Nepal. Then crosses a ridge after a little climbing and drops down steeply to Thamar village. The trail descends along the side of the stone walls and fields of extensive villages, then climbs to a ridge. It is a short descent to Ghami.
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 13: GHAMI – SAMAR</strong> - From Ghami climb to NYI LA and descend to Samar through the same route.
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 14: SAMAR – KAGBENI</strong> - Return trek to Kagbeni…
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 15: KAGBENI – JOMSOM</strong> - Return trek to Jomsom…rest and relax. Overnight at a local hotel/lodge.
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 16: JOMSOM – POKHARA</strong> - Fly to Pokhara. Pokhara lakeside villages sit, “front row center” to one of the most beautiful Himalayan panoramas in the world. The Annapurna and famous “Fishtail” mountain peak of Machapuchhare tower over the tropical setting of Pokhara and you spend there will be the scenic highlight of our trip. You’re free in Pokhara Valley also called “Magic Land” or Dreamland” of Nepal, to explore the various interesting places like boating on Fewa lake overlooking the region of Annapurna Areas, David Falls, Mahendra Cave and some Temples. Evening you are free to explore the colorful town. O/N at a medium hotel in Pokhara.
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 17: POKHARA</strong> - Leisure day for self-activities and rest. *This is also a spare day for just in case if Jomsom-Pokhara canceled due to bad weather…on Day-16.
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 18: POKHARA – KATHMANDU</strong> - After breakfast and morning activities…, fly back to Kathmandu (flight about noon time). Afternoon free time for shopping and your self-activities and **Evening NEPALI CULTURAL PROGRAM WITH DINNER**.
</Typography>

<Typography variant="body2" sx={{ marginTop: '2vh' }}>
<strong>DAY 19: DEPARTURE FROM KATHMANDU</strong> - After breakfast and according to your flight time, transfer to the airport for your trip back home or next destination.
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

export default MustangTrek