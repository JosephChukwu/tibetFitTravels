import React from 'react'
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContentGrid2 from '../../components/ContentGrid2';
import { Link } from "react-router-dom";
import easternTibetImg from "../../assets/easternTibetImg.jpg";





const EasternTibet = () => {
  const content = {
    "12 Nights-13 Days Eastern Tibet Tour": [
      { text: "Day 01: Group pick up at Airport and transfer to Lhasa, it takes one hour driving via Kyichu river (D)" },
      { text: "Day 02: Morning visit Potala palace, the seat of both religion and politics In Tibet. It was built in the 7th century by Tibetan king Songtsen Gampo and later renovated by the 5th Dalai Lama in the 17th century. Afternoon visit Sera Monastery 5 km north of Lhasa city. It was built in 1419 by Jamchen Choejie, a disciple of Tsongkhapa, the founder of the Gelugpa sect. Sera is one of the three major monasteries of the Yellow sect in Tibet. (BLD)" },
      { text: "Day 03: Morning visit Drepung monastery, which is the largest monastery of the Gelugpa sect in Lhasa. It was built in 1416 by Jamyang Choejie, a disciple of Tsongkhapa. Afternoon visit Summer palace of the Dalai Lamas, Jokhang temple, and Barkhor market, this is the holiest shrine in Tibet and houses a golden statue of the Buddha Shakyamuni which was brought to Tibet by Chinese princess Wencheng. (BLD)" },
      { text: "Day 04: Drive to Nyingche via Draksum lake 460 km via Bala pass 4995 m, 8-9 hours. Overnight Medium Hotel." },
      { text: "Day 05: Drive to Pome 270 km, driving 6 hours via Serkemla pass 4800 m. From Serkemla pass we can see very beautiful landscape and view of Namcha Bawa mountain and biggest forest Lunang and Tashi gang village. Overnight Medium Hotel." },
      { text: "Day 06: Drive to Rawa Lake via Megdu glacier 160 km, driving 6 hours. We can see very beautiful landscape, snow mountain, rivers, different plants, and flowers. Overnight Guest house and explore Rawo Lake." },
      { text: "Day 07: Drive back to Pome 160 km, driving 4 hours. Overnight Renchen Ling guest house, visit Dola monastery." },
      { text: "Day 08: Drive to Nyingche 270 km, visit Lama Ling Temple and Golden Temple. Overnight Nyingche Medium Hotel." },
      { text: "Day 09: Drive to Tsedang via Zangri and Woka Chulung and Chusang, first Tsongkapa meditation cave. Overnight Medium Hotel. 460 km driving, 9-10 hours." },
      { text: "Day 10: Morning visit Yumbu Lhakar first place in Tibet and Tradruk Temple, then drive to Samye first monastery in Tibet. Overnight Guest house." },
      { text: "Day 11: Morning explore Samye monastery, then drive to Lhasa 160 km, drive 3 hours. Overnight Medium Hotel." },
      { text: "Day 12: Rest day in Lhasa." },
      { text: "Day 13: Drive to airport, fly to next destination." }
    ],
    "Kham and Amdo Tour": [
      { text: "Day 01: Italy to Chengdu (Pick up from Chengdu Shanglu airport and transfer to your hotel)" },
      { text: "Day 02: Chengdu – Leshan Giant Buddha – EmeiShan 235 km / 4 hrs. Drive to Leshan to visit giant Buddha and continue drive to Emeishan for the night. Once arrived in Emeishan, book your entrance tickets to enter Emeishan and stay overnight at the top of Emeishan to enjoy sunrise and you will find that you are over the white cloud." },
      { text: "Day 03: Emeishan – Bifengxia Panda Centre. Afterwards, walk down to the gate and then continue drive to Bifengxia Panda Centre. Stay overnight in Beifengxia." },
      { text: "Day 04: Drive to Danba via Jiajin Mountain 6 hours, 320 km." },
      { text: "Day 05: Danba – Snowy Mountain Zara or Yala Mountain – Lhagang grasslands 120 km / 3 hrs." },
      { text: "Day 06: Lhagang grasslands -- Dragok – Garze 450 km / 7-8 hrs." },
      { text: "Day 07: Visit Den Gonkhang and Kandse Gompa - Yarchen Gar - Pelyul monastery (Yarchen Gar is the second largest monastery in Tibet) 6 hours, 240 km." },
      { text: "Day 08: Visit Palyul monastery and Katok monastery - Yangtze Valley - Dege, visit Derge printing house, 3 hours, 120 km." },
      { text: "Day 09: Derge - Tro Pass (5050 m) - Yilhun Lathso Lake - Manigango - Dzochen Nyingmapa Monastery - Shersul 6-7 hrs." },
      { text: "Day 10: Visit Shersul Monastery – Yushu, 4 hours, 160 km." },
      { text: "Day 11: Visit Nambar Nangzan (Wenchen Temple) Temple, Sky Burial Place - Gyanak Mani in Yushu, 5 hours, 50 km." },
      { text: "Day 12: Yushu - Maduo 360 km / 7 hrs." },
      { text: "Day 13: Maduo to Tso Ngoring and Kyaring - Maduo, 6 hours, 240 km." },
      { text: "Day 14: Maduo to Dawu Shuma - Mt. Amnye Machen - Machen (Dawu), 7 hours, 290 km." },
      { text: "Day 15: Machen - Ragya monastery - Trika Big Wheel - overnight in Guide, 7 hours, 340 km." },
      { text: "Day 16: Trika - Achong Namdzong nunnery - Kanbula National Park - Rebkong 210 km / 6 hrs." },
      { text: "Day 17: Rebkong visit Rongwu Gonchen and Lower Shanggeshong Monasteries and Tibetan artists’ house, continue drive to Labrang monastery (one of the six greatest monasteries of Gelupa school) overnight in Labrang, 3 hours, 140 km." },
      { text: "Day 18: Visit Labrang Monastery - Takstang Lhamo monastery, overnight in Takstang Lhamo hotel, 6 hours, 260 km." },
      { text: "Day 19: Takstang Lhamo - Zdoige - Jiuzhaigou National Park (2500 m) 350 kms / 6 hrs. We will leave from Takstang Lamo to go to Jiuzhaigou National Park via Zdoige. You will drive through boundless grasslands, one of the most beautiful grasslands in Asia; this county calls Zoige high altitude grasslands. On the way you will stop for some short hikes and try riding yaks along the way to the National Park. We will stay in National Park." },
      { text: "Day 20: Jiuzhaigou National Park (One day explore the lakes and valleys of Jiuzhaigou). After breakfast, prepare to enter the National Park gate; Jiuzhaigou park is one of the most natural beauty, with wild mountains and green forest and Tibetan style houses. Before you enter the Park we hope all of our tourists are ready to take many pictures there, and spend the whole day exploring this sacred Natural Park with snow-capped mountains, green forest, and attractive waterfalls. We will spend the night in Jiuzhaigou." },
      { text: "Day 21: Jiuzhaigou National Park - Huanglong National Park - Chengdu (765 m) 580 kms / 9-10 hrs. We will drive Chengdu via Huanglong National Park, which will take 2-3 hours. After visiting Huanglong National Park then continue drive back to Chengdu." },
      { text: "Day 22: Fly back (Our Tibetan guide and drivers drive your group to Chengdu Shanglu airport. Say goodbye to our drivers and guide. End your pleasant journey in Kham & Amdo overland tour." }
    ],
    // Add more tabs as needed
  };
  

  
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
    <Typography variant="hTitle" sx={{ my: {xs: "8vh", sm: "10vh"}, textAlign: "left" }}>
    Eastern Tibet tour
              </Typography>
              <img src={easternTibetImg} alt="easternTibetImg" style={{height: "auto", width: "100%"}} />
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

export default EasternTibet