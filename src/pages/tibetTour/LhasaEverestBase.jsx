import React from 'react'
import { Carousel } from '../../components/Carousel'
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContentGrid from '../../components/ContentGrid';
import { Link } from "react-router-dom";
import EverestBaseimg from "../../assets/EverestBaseimg.jpg";




const LhasaEverestBase = () => {

 
  const content = {
    "9 days Everest Base Camp Tour": [
    "This is one of the best Nepal-Tibet trips. After the panoramic trans-Himalayan flight from Kathmandu to Lhasa and exploring the valley of Tibetan civilization, the historical Monasteries and Lhasa city, you will reach just 8-km near Everest Base Camp in overland route from Lhasa to Nepal border and Kathmandu. Rongbuk is the highest placed Buddhist Monastery in the World and from here you will take a 2-3 hours walk or rent horse to reach Mt. Everest Base Camp at Tibetan side. The whole guided trip includes Lhasa, Gyantse, Shigatse, Tingri, Rongbuk, Base Camp and Kyirong border to Kathmandu.",
    "Itinerary: 9 days Everest Base Camp Tour",
    "DAY 01: ARRIVE AT LHASA(3650M)(65km drive)",
    "Group pick up at Airport and transfer to hotel, after rest for acclimatization in the hotel.",
    "DAY 02: LHASA SIGHTSEEING (3650M)(5km drive)",
    "Morning visit Potala palace, the seat of both religion and politics in Tibet. It was built in the 7th century by Tibetan king Songtsen Gampo and later renovated by the 5th Dalai Lama in the 17th century. Afternoon visit Sera monastery 5km north of Lhasa City, it was built in 1419 by Jamchen Choejie, a disciple of Tsongkapa, and the founder of the Gelugpa sect. Sera is one of the three major monasteries of yellow sect in Tibet.",
    "DAY 03: LHASA SIGHTSEEING (3650M)(8km drive)",
    "Morning visit Drepung monastery, which is the largest monastery of the Gelugpa sect in Lhasa, it was built in 1416 by Jamyang Choejie, a disciple of Tsongkhapa. Afternoon visit Norbulingkha, the summer palace of the Dalai Lamas which was built in the 18th century, Jokhang temple and Barkhor market. This is the holiest shrine in Tibet and houses a golden statue of the Buddha Shakyamuni, which was brought to Tibet by Chinese princess Wenchen.",
    "DAY 04: LHASA-YAMDROK LAKE-KAROLA GLACIER-GYANGTSE(3950M)(280km drive)",
    "Lhasa-Gyangtse, crossing over high passes like GAMBALA-4750m, Yamdrok Lake-4340m, KAROLA-5050m, and the Tibetan lifeline river YARLUNG TSANGPO (Brahmaputra).",
    "DAY 05: GYANGTSE VISIT KUMBUM STUPA & PHELCHOE MONASTERY-SHALU MONASTERY-TASHI LHUNPO MONASTERY-SHIGATSE (3900m )(90km drive)",
    "Gyangtse-Shigatse via visiting Shalu monastery, Tashilunpo monastery, which is the seat of the Panchen Lamas.",
    "DAY 06: SHIGATSE-SAKYA MONASTERY-NEW TINGRI(4100M)(270km drive)",
    "Shigatse-New Tingri via visiting Sakya monastery, which is 30km from the main road, after visiting Sakya monastery then drive to Xigar along the Friendship Highway Gyatso la pass 5220m.",
    "DAY 07: NEW TINGRI-EVEREST BASE CAMP(5000M)(110km drive)",
    "New Tingri-Everest Base Camp, crossing over the Pangla pass (5200m) and driving through the valley along the way to Rongbuk monastery.",
    "DAY 08: NEW TINGRI-OLD TINGRI-KYIRONG (4000M)(350km drive)",
    "Everest base camp-Kyirong via Mt. Shisha Pangma (8000m) and Peiku Tso Lake (4330m).",
    "DAY 09: KYIRONG TOWN TO NEPAL BORDER (3800M)(70KM)",
    "Morning drive from Kyirong to Nepal border and cross the border and end the Tibet part tour.",
  ],
  "8 Days-Lhasa-Everest Base Camp Tour": [
    "Itinerary: 8 Days-Lhasa-Everest Base Camp-",
    "DAY 01: ARRIVE AT LHASA(3650m)(65km drive)",
    "Group pick up at Lhasa Airport and transfer to hotel, rest or visit Barkhor market.",
    "DAY 02: LHASA SIGHTSEEING(3650m)(5km drive)",
    "Morning visit Potala palace, the seat of both religion and politics in Tibet. It was built in the 7th century by Tibetan king Songtsen Gampo and later renovated by the 5th Dalai Lamas in the 14th century. Afternoon visit Sera monastery 5km north of Lhasa City, it was built in 1419 by Jamchen Choejie, a disciple of Tsongkapa, and the founder of the Gelugpa sect. Sera is one of the three major monasteries of the yellow sect in Tibet.",
    "DAY 03: LHASA SIGHTSEEING (3650m)(8km drive)",
    "Morning visit Drepung monastery, which is the largest monastery of the Gelugpa sect in Lhasa, it was built in 1416 by Jamyang Choejie, a disciple of Tsongkhapa. After visiting Drepung, drive to Norbulingkha, the summer palace of the Dalai Lamas which was built in the 18th century. Afternoon visit Jokhang temple and Barkhor market, this is the holiest shrine in Tibet and houses a golden statue of the Shakyamuni Buddha, which was brought to Tibet by Chinese princess Wenchen.",
    "DAY 04: LHASA-GYANGTSE-SHIGATSE(3900m)(350km drive)",
    "Lhasa-Gyangtse-Shigatse, crossing over high passes like GAMBALA-4750m, Yamdrok Lake-4340m, KAROLA-5050m, and the Tibetan lifeline river YARLUNG TSANGPO (Brahmaputra). Visit the Kumbum stupa and Phelchoe monastery and drive to Shigatse.",
    "DAY 05: SHIGATSE-EVEREST BASE CAMP (5000m)(350km drive)",
    "Morning drive to Everest Base Camp, via Lhatse town, New Tingri, Rongphu monastery and Everest Base Camp.",
    "DAY 06: EVEREST BASE CAMP-SHIGATSE(3900m)(350km drive)",
    "Drive back to Shigatse with the same route.",
    "DAY 07: SHIGATSE-TASHI LHUNPO MONASTERY-LHASA(3650m)(280km drive)",
    "Morning visit the Tashi Lhunpo monastery and drive back to Lhasa through YARLUNG TSANGPO river (Brahmaputra) valley.",
    "DAY 08: DEPART LHASA (65km drive)",
    "Our guide and driver will transfer you to the Lhasa train station or airport and end the Tibet part tour.",
    "NOTE: *** This trip itinerary can be changed or modified as per your time, requirement, and interest. Cost of This Trip: depend on your group size and your requirements. Please e-mail us for a special price quote. For more information and booking this trip, please contact us in advance. Thank you for your time."
  ],
  "8 Days Nepal to Lhasa Tour": [
    "Itinerary: 8 Days Nepal to Lhasa tour",
    "DAY 01: PICK UP FROM NEPAL BORDER (2800m)(20km drive)",
    "Group pick up from Nepal Border Zhangmu or Kyirong and transfer to hotel. Zhangmu border is opened for international highway for foreign tourists traveling into China-Tibet-Nepal tour but it was closed since Nepal Earthquake. We hope this border will reopen soon. The Kyerong is the border direction of Lake Peikutso and Mt, Shishapangma. The altitude of Dzongka is 4000m and 70km drive down to Kyirong Custom 2800m.",
    "DAY 02: KYIRONG OR ZHANGMU TO OLD TINGRI (4200m)(300km)",
    "Zhangmu or Kyirong drive to Tingri via beautiful view of Mt, Shisha Pangma, Peiku Tso Lake and Mt, Everest view from Old Tingri.",
    "DAY 03: OLD TINGRI-SHIGATSE VIA SAKYA MONASTERY (3900m)(360km)",
    "Tingri drive to Shigatse via Sakya monastery, which is 30km from the main road. After visiting Sakya monastery, drive to Shigatse along the Friendship Highway. Visit Tashi Lhunpu Monastery which is the seat of the Panchen Lamas.",
    "DAY 04: SHIGATSE-SHALU MONASTERY-GYANGTSE (3950m)(90km drive)",
    "Shigatse drive to Gyangtse via visiting Shalu Monastery, Palchok Monastery, Kunbum stupa. Gyantse is the ancient trade center between Tibet and India. Gyangtse drive to Lhasa crossing over high passes like (KAROLA-5050m) KAMBALA-4750m) Yamdrok Lake-4340m) and the Tibetan lifeline river YARLUNG TSANGPO (Brahmaputra).",
    "DAY 06: LHASA SIGHTSEEING (3650m)(5km drive)",
    "Morning visit Drepung monastery, which is the largest monastery of the Gelugpa sect in Lhasa. It was built in 1416 by Jamyang Choejie, a disciple of Tsongkhapa. After visiting Drepung, drive to Norbulingkha, the summer palace of the Dalai Lamas which was built in the 18th century. Afternoon visit Jokhang temple and Barkhor market, this is the holiest shrine in Tibet and houses a golden statue of the Buddha Shakyamuni which was brought to Tibet by Chinese princess Wenchen.",
    "DAY 07: LHASA SIGHTSEEING (3650m)(8km drive)",
    "Morning visit Potala palace, the seat of both religion and politics in Tibet. It was built in the 7th century by Tibetan king Songtsen Gampo and later renovated by the 5th Dalai Lama in the 17th century. Afternoon visit Sera monastery 5km north of Lhasa City, it was built in 1419 by Jamchen Choejie, a disciple of Tsongkapa, and the founder of the Gelugpa sect. Sera is one of the three major monasteries of the yellow sect in Tibet.",
    "DAY 08: LHASA SIGHTSEEING (65km drive)",
    "Lhasa drive to Airport and flight to next destination.",
    "NOTE: *** This trip itinerary can be changed or modified as per your time, requirement, and interest. Cost of This Trip: depends on your group size and your requirements. Please e-mail us for a special price quote. For more information and booking this trip, please contact us in advance. Thank you for your time."
  ],
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));



  return (
    <main>
     {/*main grid */}
    <Grid container sx={{paddingX: { xs: "30px", sm: "100px" },width: "100%", display: "flex", flexDirection: {xs: "column", sm: "row"}, gap:{xs: 0, sm: 8}}}>

 {/*right grid */}
    <Grid item xs={12} sm={8}>

     {/*rightA grid */}
    <Grid style={{marginTop: "20vh",display: "flex",flexDirection: "column", justifyContent: "center",}}>
    <Typography variant="hTitle" sx={{ my: {xs: "7vh", sm: "10vh"}, textAlign: "left" }}>
          Lhasa -Everest base Camp Tour
              </Typography>
              <img src={EverestBaseimg} alt="EverestBaseimg" style={{height: "auto", width: "100%"}} />
          </Grid>


 {/*rightB grid */}
    <Grid container sx={{mt: "5vh"}}>
    <ContentGrid content={content}/>
    </Grid>

    </Grid>

 {/*left grid */}
 <Grid sx={{mt: {sm: "38vh", xs: "2vh"}}}>

 <Grid sx={{display: "flex", flexDirection: "column"}}>
 <Typography variant='sideT' sx={{mt: {xs: "5vh", sm: "15vh"}, mb: "2vh"}}>
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
 TREKKING
 </Typography>
<Typography component={Link} to="/AnapurnaBase" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Annapurna Base Camp</Typography>
<Typography component={Link} to="/LhasaDayTrip" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Lhasa day trip</Typography>
<Typography component={Link} to="/MustangTrek" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Mustang Trek</Typography>
<Typography component={Link} to="/LangtangGosainkunda" variant='sideTt' sx={{my: "1vh", textDecoration: "none"}}>Langtang-Gosainkunda</Typography>
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

export default LhasaEverestBase