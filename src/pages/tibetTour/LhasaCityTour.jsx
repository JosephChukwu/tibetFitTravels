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
    "5 days Lhasa city tour": [
      "Fly over the world's highest peaks into the Tibetan capital Lhasa, the cultural hub of Tibet. You will spend 4 nights and 5 days in Lhasa where our local guides will take you around main important monasteries and palaces of Dalai Lama including Sera, Drepung and Norbulinkha monasteries and Potala Palace to explore the historical Tibetan culture and civilization. Itinerary: 4 nights & 5 days Lhasa city tour",
      "DAY 01: ARRIVE AT LHASA(3650m)(65km drive )",
       "Group pick up at Airport and transfer to hotel, It takes 2 hours to Lhasa via Yerlung Tsangpo river and Lhasa Kyichu River.",
      "DAY 02: LHASA(3650m(5km drive )", 
      "Morning visit Potala palace, the seat of both religion and politics in Tibet. It was built in the 7th century by Tibetan king Songtsen Gampo and later renovated by the 5th Dalai Lama in the 17th century. Afternoon visit Sera monastery, 5 km north of Lhasa city. It was built in 1419 by Jamchen Choeji, a disciple of Tsongkhapa, founder of the Gelugpa sect. Sera is one of the three major monasteries of the yellow sect in Tibet.",
      "DAY 03: LHASA(3650m)(8km drive )", 
      "Morning visit Drepung monastery, the largest Monastery of the Gelugpa sect in Lhasa. It was built in 1416 by Jamyang chojie a disciple of Tsongkhapa. Afternoon visit Jokhang Temple and Barkhor market; this is the holiest shrine in Tibet with houses of golden statues of the Buddha Shakyamuni, brought to Tibet by the Chinese princess Wenchen.",
      "DAY 04: LHASA(3650m)(5km drive)", 
      "Visit Norbulingkha, the summer palace of the Dalai Lamas, built in the 18th century.Norbu Lingka has four major palace complexes, Kelsang Potrang, Tsokyil Potrang, Takten Migyur Potrang and Chensel Potrang.The palaces consist of no less than 400 rooms and chapels.",
      "DAY 05: DEPART LHASA (65km drive)", 
      "Drive to Lhasa airport and flight to next destination.",
      "NOTE:*** This trip itinerary can be changed or modified as per your time, requirement and interest.Cost of This Trip: depend on your group size and your requirements. Please e-mail us for a special price quote.For more information and booking this trip, please contact us in advance. Thank you for your time."
    ],
    "8 days central Tibet tour": [
      "Itinerary: 8 Days central Tibet tour",
      "DAY 01: ARRIVE AT LHASA(3650m)(65km drive )", 
      "Group pick up at Lhasa Airport and transfer to hotel, after rest for acclimatization in the hotel.",
      "DAY 02: LHASA(3650m)(5km drive)", 
      "Morning visit Potala palace, the seat of both religion and politics in Tibet. It was built in the 7th century by Tibetan king Songtsen Gampo and later renovated by the 5th Dalai Lama in the 14th century. Afternoon visit Sera monastery 5km north of Lhasa City, it was built in 1419 by Jamchen Choejie, a disciple of Tsongkapa, and the founder of the Gelugpa sect. Sera is one of the three major monasteries of yellow sect in Tibet.",
      "DAY 03:LHASA (3650m)(8km drive)", 
      "Morning visit Drepung monastery, which is the largest monastery of the Gelugpa sect in Lhasa, it was built in 1416 by Jamyang Choejie, a disciple of Tsongkhapa. Afternoon visit Norbulingkha the summer palace of the Dalai Lamas which was built in 18th century, Jokhang temple and Barkhor market, this is the holiest shrine in Tibet and houses a golden statue of the Buddha Shakyamuni, which was brought to Tibet by Chinese princess Wenchen.",
      "DAY 04:LHASA -SHIGATSE(3900m)(280km drive)", 
      "Lhasa-Shigatse, it takes 6 hours driving, visit the Tashi Lunpo monastery, which is the seat of the Panchen Lamas.",
      "DAY 05:SHIGATSE-GYANGTSE (3950m)(90km drive)", 
      "Shigatse-Gyangtse, Gyangtse is the bustling town steeped in history, in the 15th century, it serves the capital of a small kingdom. The beautiful Kumbum Chorten (stupa) built around 1400AD and the huge ruined castle.",
      "DAY 06: GYANGTSE-KAROLA GLACIER-YAMDROK LAKE-TSEDANG (3550m)(350km drive)", 
      "Gyangtse-Tsedang. It takes 7 hours crossing over Karolapass-5050m, Mt.Nyechen Kangsar 7190m, Yamdrok Lake 4340m, and Kambala pass 4750m.",
      "DAY 07:TSEDANG SIGHTSEEING (3550m)(30km)", 
      "Morning visit Yumbulakhang palace which is the earliest Buddhist Temple in Tibet. Afternoon visit Tangdruk temple which is located 30 kilometers from the center of Tsedang.",
      "DAY 08:TSEDANG TO LHASA AIRPORT AND END THE TIBET PART TOUR (3650m)(95km drive)", 
      "Tsedang drive to Lhasa Airport and flight to next destination.",
      "NOTE:*** This trip itinerary can be changed or modified as per your time, requirement and interest. Cost of This Trip: depend on your group size and your requirements. Please e-mail us for a special price quote. For more information and booking this trip, please contact us in advance. Thank you for your time."
    ],
    "9 days Lhasa surrounding tour": [
      "Itinerary: 9 Days Lhasa surrounding Tour",
      "DAY 01: ARRIVE AT LHASA(3650M)(65km drive )", 
      "Group pick up at Lhasa airport and transfer to hotel. It takes 2 hours to Lhasa via Yarlung Tsangpo river and Lhasa Kyichu river.",
      "DAY 02: LHASA(3650m)(5km drive )", 
      "Morning visit Potala palace, the seat of both religion and politics in Tibet. It was built in the 7th century by Tibetan king Songtsen Gampo and later renovated by the 5th Dalai Lama in the 17th century. Afternoon visit Sera monastery 5 kilometer north of Lhasa city, it was built in 1419 by Jamchen Choejie, a disciple of Tsongkapa, the founder Of the Gelugpa sect. Sera is one of the three major monasteries of yellow sect in Tibet.",
      "DAY 03: LHASA(3650m)(8km drive)", 
      "Morning visit Drepung monastery, which is the largest monastery Of the Gelugpa sect in Lhasa, it was built in 1416 by Jamyang Choejie, a Disciple of Tsongkhapa. Afternoon visit Norbu Lingkha the summer palace of the Dalai Lamas which was built in 18th century, Jokhang temple and Barkhor market, this is the holiest shrine in Tibet and houses a golden statue of the Buddha Shakyamuni, which was brought to Tibet by Chinese princess Wenchen.",
      "DAY 04: LHASA-NAMSTO LAKE(4710m)(250km drive)", 
      "Lhasa drive to Namtso lake, which is the highest lake. It covers an area of about 1,920 square km from east to west and 300 km from south to north. It is one of the three famous lakes in Tibet.",
      "DAY 05: NAMSTO LAKE EXCURSIONS (4710m)", 
      "Today you will explore and hike around Lake side, visit Tashi Dor Monastery, Guru Rinpoche caves and Nomads black tents. There you can see beautiful Landscapes of Mt, Nyenchen Thangla range, thousands of nomad Yaks and Sheeps. Namtso is one of the holiest Lake and most of the Tibetans visit there. Namtso means Sky Lake in Tibetan because we can imagine this Lake is seemed very close connection to the Sky.",
      "DAY 06: NAMSTO LAKE-RETING MONASTERY (4300m)(200km drive)", 
      "Namtso drive up stream to Phodo Chue, enroute visit Reting monastery constructed in 1056 by Dromtonpa who was the student of the great Bengali Buddhist Master Atisha. Reting is the first Kadampa Monastery in Tibet. It was built in 11 Century by Dromtonpa. The nearly 100 Monks are living at the present days. There are thick juniper trees around the Monastery and also Reting is surrounded By four sacred Mountains, the named as Sheldhen, Serdhen, Zangdhen and Yudhen.",
      "DAY 07: RETING MONASTERY-DRIGUNG TIL MONASTERY(4000m)(150km drive)", 
      "Reting monastery drive to Drigung Till monastery. There you can see beautiful route surrounded by Lake or Dam along the way to Drigung. You can also visit Tibetan Nomads house and sharing way of living. There is a Monastery guest house in Drigung.",
      "DAY 08: DRIGUNG TIL MONASTERY-TRIDRUM NUNNERY-GADEN MONASTERY-LHASA(3650m)(150km drive)", 
      "Tibet. Drigungpa sect was founded in the 12th Century by Rinchen Pel, is one of four Marjor Kagyupa Schools. The nearly 150 monks Living at the present days in Drigung Monastery. You can also Visit Tridrum nunnery hot spring, 20km from Drigung. Afternoon drive back to Lhasa via visiting Ganden monastery, which was built in 1409 by Tsongkhapa.",
      "DAY 09: DEPART LHASA(65km drive)", 
      "Lhasa drive to Airport and flight next destination.",
      "NOTE:*** This trip itinerary can be changed or modified as per your time, requirement and interest. Cost of This Trip: depend on your group size and your requirements. Please e-mail us for a special price quote. For more information and booking this trip, please contact us in advance. Thank you for your time."
    ],
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
    <Grid Container sx={{mt: "5vh"}}>
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