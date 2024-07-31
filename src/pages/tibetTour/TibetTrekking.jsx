import React from 'react'
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContentGrid from '../../components/ContentGrid';
import { Link } from "react-router-dom";
import TibetTrekkingImg from "../../assets/TibetTrekkingImg.jpg";



const TibetTrekking = () => {


  const content = {
    "10 Days Gaden to Samye trek": [
      "Day 01: Flight to Lhasa (Alt 3,650m. 65kms)",
      "Arrival in Gonggar Airport of Lhasa. Met by our representative and drive to Lhasa City (1hr). Check-in at the hotel and rest for acclimatization. Mild symptoms of altitude sickness (headache, dizziness, disorientation, breathlessness) are expected but should subside in a day or two. Drink plenty of water and consume liquid food. Accommodation in medium hotel.",
      "Day 02: At Lhasa （B)",
      "Full day sightseeing in Lhasa, visiting Dalai Lama’s Potala Palace, Sera Monastery, and Norbulingka, the summer palace of the Dalai Lama. Option to hike the Sera Monastery kora if no altitude sickness symptoms. Attend the debating ceremony of Sera Monks. Accommodation in medium hotel.",
      "Day 03: At Lhasa (B)",
      "Visit Drepung Monastery, the largest and most powerful of the three major Yellow Sect monasteries of Tibet. Optional 1-hour hiking circuit for hiking enthusiasts. Visit Jorkhang Temple in the old Tibetan quarter of Lhasa and Barkhor Street. Accommodation in medium hotel.",
      "Day 04: Lhasa to Gaden Monastery, drive to Dripshi village (Camp 3800m)",
      "An hour's drive out of Lhasa to Ganden Monastery (3,800 m/12,467 ft). Visit the monastery and after lunch drive to Dupshi Valley. Arrange yak and trekking preparation.",
      "Day 05: Drupshi village to Yamado (Camp 4200m, 10km)",
      "Trek begins from Dupshi Valley. The trail reaches a spur surmounted by a cairn, a spring, and then the village of Hepu in 2 hours to Yamado.",
      "Day 06: Yamado trek to Nyeko (Camp 4600m, 20km)",
      "Yamado to Nyeko via Shug-la pass (5250m). The route covers the Shug-la pass following the cairned trail descending gradually and reaching the valley in 5-6 hours from the pass. Encounter nomad herders with their herd of yaks, goats, and sheep.",
      "Day 07: Nyeko trek to Yamalung (Camp 4300m, 25km)",
      "Trek for about 5 hours. Walk up the side valley to Sukhe La, lower and easier than the Jooker La. The climb is gradual except for a short, steep section near the top. Descend past two glacial lakes. The route follows steeply upwards for 30 minutes until reaching a large basin. Reach Chitu-la pass (5150m).",
      "Day 08: Yamalung to Samye Monastery (hotel 3550m, 20km)",
      "Drive to Samye via Yarlung Tsangpo river. Visit Samye Monastery built in the eighth century by Tibetan King Tsesong Dertse. Drive to Chimphu and visit 108 caves, 108 sky burials, and 108 water ponds.",
      "Day 09: Samye to Lhasa (Hotel 3650m, 150km)",
      "Drive to Lhasa via Dorjee Dark Monastery.",
      "Day 10: Depart Lhasa",
      "Drive to Lhasa airport or train station and depart to the next destination.",
      "NOTE: This trip itinerary can be changed or modified as per your time, requirement, and interest. Cost of This Trip depends on your group size and requirements. Please email us for a special price quote. For more information and booking this trip, please contact us in advance. Thank you for your time."
    ],
    "10 Days Nychenkhangsar trek": [
      "Day 01: Flight to Lhasa (Alt 3,650m. 65kms)",
      "Arrival in Gonggar Airport of Lhasa. You are met and greeted by our representative and drive to Lhasa City (1hr). Check-in hotel and take rest for acclimatization. You will experience mild symptoms of altitude sickness such as headache, dizziness, disorientation, breathlessness, etc. but it should go away in a day or two. Please, drink plenty of water and consume liquid food. Accommodation in medium hotel.",
      "Day 02: At Lhasa (B)",
      "Full day sightseeing of Lhasa, visiting Dalai Lama’s Potala Palace - the principal attraction of Lhasa, Sera Monastery - the last of the three Yellow Sect monasteries to be built in Lhasa, and Norbulinkha - the summer palace of the Dalai Lama. If you are a hiking enthusiast and do not show signs of altitude sickness, Sera Monastery kora (hiking on the pilgrimage path around the monastery) would be worth trying. We will also take the chance to attend the debating ceremony of Sera Monks. Accommodation in medium hotel.",
      "Day 03: At Lhasa (B)",
      "Today, we will visit Drepung Monastery - the largest, richest, and most powerful of the three major Yellow Sect monasteries of Tibet and was the power center of Tibet before the 5th Dalai Lama moved to Potala Palace. At Drepung, we will visit the Ganden Palace, Main Assembly Hall, and Colleges of Drepung. (Optional: Hiking enthusiasts can also attempt 1-hour long circuit hiking but you should be fully acclimatized) ancient Jorkhang Temple in the old Tibetan quarter of Lhasa and the Barkhor Street that forms the pilgrim circuit around the Jorkhang Temple. Accommodation in medium hotel.",
      "Day 04: Lhasa-Yamdrok Lake -Karola Glacier -Mayul (Camp 4550m, 200km)",
      "Morning drive to Mayul, crossing over Gampala Pass 4750m and Yamdrok Lake 4340m. Mt, Karola Glacier 5150m. Mt, Nyenchen Kang Sang 7191m, (23,592ft) Visit Relung Monastery. Our guide will organize yaks and yak men for the next day trek.",
      "Day 05: Mayul trek to Nyerong La Pass (Camp 4700m, 15km)",
      "Mayul trek to Nyerong La Pass 6-7 hours with yaks and yak men, this day you can see the beautiful Mt, Nyenchen Kangsang Glacier, grassland, and nomads' black tents.",
      "Day 06: Nyerong La Pass trek to Zephuk (Camp 4800m, 20km)",
      "Nyerong La trek to Zephuk 6-7 hours with yaks and yak men, there you can see the beautiful landscape of Mt, Nyenchen Thangla, and other mountains around Namtso.",
      "Day 07: Zephuk trek to Tsadang (Camp 4500m, 25km)",
      "Zephuk trek to Tsadang 6 hours with yaks and yak men, this is your last day trekking.",
      "Day 08: Tsadang drive to Namtso Lake (Guesthouse 4718m, km)",
      "Morning drive to Namtso Lake, it takes 7-8 hours driving, there you will see beautiful grassland, nomads' black tents, thousands of nomads' yaks and horses. Namtso means Sky Lake or Heavenly Lake in Tibetan language.",
      "Day 09: Namtso Lake to Lhasa (Hotel 3650m, 250km)",
      "Morning 2 hours hiking around the lakeside and visit Tashi Dor Monastery. After noon drive back to Lhasa another 5 hours driving via Yangpa Chen hot spring.",
      "Day 10: Depart Lhasa",
      "Lhasa drive to airport or train station and depart to next destination.",
      "NOTE: This trip itinerary can be changed or modified as per your time, requirement, and interest. Cost of this trip depends on your group size and requirements. Please email us for a special price quote. For more information and booking this trip, please contact us in advance. Thank you for your time."
    ],
    "12 Days Drigung-sho-reting and Namtso Lake": [
      "Day 01: Flight to Lhasa (Alt 3,650m. 65kms)",
      "Arrival in Gonggar Airport of Lhasa. You are met and greeted by our representative and drive to Lhasa City (1hr). Check in hotel and take rest for acclimatization. You will experience mild symptoms of the altitude sickness such as headache, dizziness, disorientation, breathlessness etc but it should go away in a day or two. Please, drink plenty of water and consume liquid food. Accommodation in medium hotel.",
      
      "Day 02: At Lhasa (B)",
      "Full day sightseeing of Lhasa, visiting Dalai Lama’s Potala Palace - the principal attraction of Lhasa, Sera Monastery - the last of the three Yellow Sect monasteries to be built in Lhasa, and Norbulinkha - the summer palace of the Dalai Lama. If you are hiking enthusiast and if you do not show signs of altitude sickness, Sera Monastery kora (hiking on the pilgrimage path around the monastery) would be worth trying. We will also take chance to attend the debating ceremony of Sera Monks. Accommodation in Medium Hotel.",
      
      "Day 03: At Lhasa (B)",
      "Today, we will visit Drepung Monastery - the largest, richest, and the most powerful of the three major Yellow Sect monasteries of Tibet and was the power center of Tibet before the 5th Dalai Lama moved to Potala palace. At Drepung, we will visit the Ganden Palace, Main Assembly Hall, and Colleges of Drepung. (Optional: Hiking enthusiasts can also attempt 1 hr long circuit hiking but you should be fully acclimatized) ancient Jorkhang Temple in the old Tibetan quarter of Lhasa and the Barkhor Street that forms the pilgrim circuit around the Jorkhang Temple. Accommodation in Medium Hotel.",
      
      "Day 04: Lhasa-Drikung (Camp 3800m,150km)",
      "Lhasa drive to Drikung, it takes 4 hours driving. The four main monasteries of the Drikung Kagyu Order are situated in the Drikung region in Central Tibet: Drikung Thil, Yangrigar, Drikung Dzong, and Drikung Tse. These monasteries were the centers of the religious activities customarily carried out throughout the year in the presence of the Kyabgon Rinpoches. Therefore the throne holders split their time between these monasteries on a regular basis. In spring the Chungtsang and Chetsang Rinpoches resided in Drikung Tse, in summer they moved to Yangrigar, in autumn to Drikung Thil, and they spent the winter in Drikung Dzong. Beside these, there were and still are numerous other Drikung Kagyu monasteries and nunneries in this area. Notable among those is the monastery of Katsel, because it ranges among the oldest in Tibet, and the nunnery of Terdrom, situated close to a sacred thermal spring at the entrance to a valley with various holy places, including famous caves of Padmasambhava and Yeshe Tsogyal. This highly revered zone of pilgrimage is considered to be the heart of the Drikung Mandala. Drikung drive to Shok fu.",
      
      "Day 05: Lhasa-Drikung to ShoFu (Camp 3700m,120km)",
      "Drikung drive to Shok fu, it takes 3 hours driving to the camping area.",
      
      "Day 06: ShoFu trek to Metok (Camp 4500m,15km)",
      "Shok trek to Metok lea 5-6 hours with Yaks or Horse via kasum la pass (4700m).",
      
      "Day 07: Metok trek to Manikang (Camp 4300m,20km)",
      "Metok- Lea trek to Manikang 6 hours with Yaks or horse, there you will see beautiful landscape. Visit Nomad family and share Nomad life style.",
      
      "Day 08: Manikang trek to Kaya (Camp 4200m,20km)",
      "Manikang trek to Kaya with Yaks or horse for 6 hours, there you will see beautiful Reting river.",
      
      "Day 09: Kaya trek to Nyon (Camp 4200m,80km)",
      "Kaya trek to Nyon 3-4 hours with Yaks or horse and then drive to Reting another 3 hours.",
      
      "Day 10: Reting to Namsto lake (Guesthouse, 4718m,200km)",
      "Morning drive to Namtso Lake, it takes 4 hours driving, there you will see beautiful Grassland, Nomads black tents, thousands of Nomads Yaks and horses. Namtso Means Sky Lake or Heavenly Lake in Tibetan language and most beautiful Lake in Tibet. There are four Monasteries at the four compass points of the lake. There are many rocky Buddhist artifacts carved out by nature.",
      
      "Day 11: Namsto lake to Lhasa (Hotel, 3650m,250km)",
      "Morning 2 hours hiking around the lake side and visit Tashi Dor Monastery. After noon drive back to Lhasa another 5 hours driving via Yangpa Chen hot spring.",
      
      "Day 12: Depart Lhasa",
      "Lhasa drive to Airport or train station and depart to next destination."
    ],
    "10 Days Tsurphu to Yangpachen and Namtso Lake": [
      "Day 01: Flight to Lhasa (Alt 3,650m. 65kms)",
      "Arrival in Gonggar Airport of Lhasa. You are met and greeted by our representative and drive to Lhasa City (1hr). Check in hotel and take rest for acclimatization. You will experience mild symptoms of the altitude sickness such as headache, dizziness, disorientation, breathlessness etc but it should go away in a day or two. Please, drink plenty of water and consume liquid food. Accommodation in medium Hotel.",
      
      "Day 02: At Lhasa (B)",
      "Full day sightseeing of Lhasa, visiting Dalai Lama’s Potala Palace - the principal attraction of Lhasa, Sera Monastery - the last of the three Yellow Sect monasteries to be built in Lhasa, and Norbulinkha - the summer palace of the Dalai Lama. If you are hiking enthusiast and if you do not show signs of altitude sickness, Sera Monastery kora (hiking on the pilgrimage path around the monastery) would be worth trying. We will also take chance to attend the debating ceremony of Sera Monks. Accommodation in Medium Hotel.",
      
      "Day 03: At Lhasa (B)",
      "Today, we will visit Drepung Monastery - the largest, richest, and the most powerful of the three major Yellow Sect monasteries of Tibet and was the power center of Tibet before the 5th Dalai Lama moved to Potala palace. At Drepung, we will visit the Ganden Palace, Main Assembly Hall, and Colleges of Drepung. (Optional: Hiking enthusiasts can also attempt 1 hr long circuit hiking but you should be fully acclimatized) ancient Jorkhang Temple in the old Tibetan quarter of Lhasa and the Barkhor Street that forms the pilgrim circuit around the Jorkhang Temple. Accommodation in Medium Hotel.",
      
      "Day 04: Lhasa-Tsruphu monastery (Camp 3800m,70km)",
      "Lhasa drive to Tsurphu monastery, which is 70km from Lhasa, one hour.",
      
      "Day 05: Tsruphu trek to Leten (Camp 4500m,15km)",
      "TSURPHU trek to LETEN (5-6 hours): The trek begins at Tsurphu, with Yaks and Yak men.",
      
      "Day 06: Leten trek to Bartso (Camp 4550m,20km)",
      "LETEN trek to BARTSO (6 hours): The route climbs steeply up the north side of the Leten valley and reaches the Bartso.",
      
      "Day 07: Bartso trek to Dorjeling nunnery (Camp 4300m,20km)",
      "BARTSO trek to DORJE LING NUNNERY (4 hours). There you will see beautiful views of Nyanchen Tanglha 7111m. Nyanchen Tangla is the holiest mountain in central Tibet.",
      
      "Day 08: Dorjeling nunery drive to Namsto lake (Guesthouse 4718m,160km)",
      "Dorjeeling drive to Namtso Lake, there you will see beautiful landscape of Mt, Nyenchen Thangla, thousands of Yaks and Nomad black tents, huge grassland, Nomad black tents on the way to Nmatso Lake.",
      
      "Day 09: Namsto lake to Lhasa (Hotel 3650m,250km)",
      "Namtso Lake drive to Lhasa via Yangpa Chen hot spring, it takes 5-6 hours.",
      
      "Day 10: Depart Lhasa",
      "Lhasa drive to Airport and fly to next destination."
    ],
    "Everest Trek and Tour 14 Days": [
        "Day 01: Fly to Lhasa (3600m)",
        "Fly to Lhasa airport and drive 2 hours to the hotel. Spend the rest of the day acclimatizing. Overnight at Hotel.",
        "Day 02-03: Sightseeing in Lhasa (3600m)",
        "Full day sightseeing tour of Lhasa visiting Potala Palace, Jokhang Temple, Barkhor Bazaar, Norbulingka, Sera, and Drepung Monastery. Overnight at Hotel.",
        "Day 04: Drive Lhasa to Gyangtse (3650m), 261 km",
        "Full day picturesque drive crossing over high passes like Karola (5010m) and Kambala (4794m) via Yamdrok Lake (turquoise lake) and the Tibetan lifeline river Yarlung Tsangpo (Brahmaputra). Overnight at Hotel.",
        "Day 05: Drive Gyangtse to Shigatse (3900m), 90 km",
        "Morning visit Phalcho and Kumbum Monastery in Gyangtse. After lunch, drive to Shigatse. Overnight at Hotel.",
        "Day 06: Drive Shigatse to Old Tingri, 300 km",
        "It takes 7 hours driving, crossing over the highest pass of Gyatso La (5220m).",
        "Day 07: Begin Trek to Everest Region",
        "From Tingri, start a five-day trek to Everest region. Camp near the village of Lungjung (14,600 feet). Overnight camping.",
        "Day 08: Trek to Base of Lamana La Pass",
        "Leave Lungjung and trek to the base of Lamana La Pass (15,715 feet). Camp for the night.",
        "Day 09: Trek to Zomphu Village",
        "Trek to Lamana La Pass in the morning, then pass on to Zomphu Village (15,485 feet). Camp for the night.",
        "Day 10: Trek to Rongbuk Monastery",
        "Trek from Zomphu Village to Rongbuk Monastery (16,142 feet). Camp for the night. Visit the famous Rongbuk Monastery.",
        "Day 11: Trek to Everest Base Camp",
        "Trek to Everest Base Camp and then return to the camping area.",
        "Day 12: Drive to Xegar, 340 km",
        "Drive crossing over the Pangla Pass and through the valley along the way to Rongbuk Monastery. Overnight in a hotel.",
        "Day 13: Drive Back to Lhasa, 355 km",
        "Overnight in a hotel.",
        "Day 14: Drive to Airport",
        "Drive to the airport and depart."
    ],
    "Kharta to Kangshung Valley": [
        "Day 1: Arrive in Lhasa",
        "Arrive in Lhasa and spend the afternoon resting at the hotel for acclimatization. Overnight in hotel.",
        "Day 2: Sightseeing in Lhasa",
        "Morning visit to Potala Palace, the seat of both religion and politics in Tibet. Built in the 7th century by Tibetan King Songtsen Gampo and renovated by the 5th Dalai Lama in the 17th century. Afternoon visit to Sera Monastery, 5 kilometers north of Lhasa, built in 1419 by Jamchen Choejie, a disciple of Tsongkhapa. Sera is one of the three major monasteries of the Yellow Sect in Tibet. Overnight in hotel.",
        "Day 3: More Sightseeing in Lhasa",
        "Morning visit to Drepung Monastery, the largest monastery of the Gelugpa sect in Lhasa, built in 1416 by Jamyang Choejie, a disciple of Tsongkhapa. Afternoon visit to Jokhang Temple and Barkhor Market, the holiest shrine in Tibet housing a golden statue of Buddha Shakyamuni brought by Chinese Princess Wencheng on her marriage to Tibetan King Songtsen Gampo.",
        "Day 4: Drive Lhasa to Gyangtse (3950m), 261 km",
        "Full day picturesque drive crossing high passes like Karola (5010m) and Kambala (4794m), via Yamdrok Lake and the Tibetan lifeline river Yarlung Tsangpo (Brahmaputra). Visit Kumbum Stupa and Palchok Monastery, home to 100,000 images. Overnight in hotel.",
        "Day 5: Drive Gyangtse to Shigatse, 90 km",
        "Visit Shalu Monastery on the way to Shigatse. After lunch, visit Tashilunpo Monastery, the seat of the Panchen Lama. Overnight in hotel.",
        "Day 6: Drive Shigatse to Xegar, 240 km",
        "Visit Sakya Monastery, located 30 km from the main road. Continue driving to Xegar along the Friendship Highway. Overnight in hotel.",
        "Day 7: Drive Xegar to Kharta, 9 hours",
        "Overnight camping.",
        "Day 8: Free Day for Packing",
        "Free day for packing and hiring yaks for the upcoming trek. Overnight camping.",
        "Day 9: Trekking to Yueba",
        "Trek for about 5 hours from Kharta to Yueba. Cross the bridge over the Lang Chu, follow the left bank, and head westwards. Overnight camping.",
        "Day 10: Trek to Langma La Base Camp (5100m)",
        "Trek from Yuepe to the base camp of Langma La. Overnight camping.",
        "Day 11: Trek to Cave",
        "Trek for about 2.5 hours from Langma La to the Cave. It is a challenging day. If the weather clears, enjoy wonderful views of Mt. Makalu (8463m) and other high mountains. Overnight camping.",
        "Day 12: Trek to Pethang",
        "Trek from the Cave to Pethang, about 4 hours. Head down the valley along a long, narrow trail."
    ],
    "Lhamolhatso lake trek": [
        "Day 01: Fly to Lhasa",
        "Fly to Lhasa airport and transfer 95 kilometers to the hotel. The drive takes 2 hours through the Yerlung Tsangpo and Lhasa Kyichu rivers. Overnight in hotel.",
        "Day 02: Sightseeing in Lhasa",
        "Morning visit to Potala Palace, the seat of both religion and politics in Tibet. Built in the 7th century by Tibetan King Songtsen Gampo and later renovated by the 5th Dalai Lama in the 17th century. Afternoon visit to Sera Monastery, 5 kilometers north of Lhasa City, built in 1419 by Jamchen Choeji, a disciple of Tsongkhapa, the founder of the Gelugpa sect. Sera is one of the three major monasteries of the Yellow Sect in Tibet. Overnight in hotel.",
        "Day 03: More Sightseeing in Lhasa",
        "Morning visit to Drepung Monastery, the largest monastery of the Gelugpa sect in Lhasa, built in 1416 by Jamyang Choejie, a disciple of Tsongkhapa. Afternoon visit to Jokhang Temple and Barkhor Market, the holiest shrine in Tibet housing a golden statue of Shakyamuni Buddha brought to Tibet by Chinese Princess Wenchen. Overnight in hotel.",
        "Day 04: Drive Lhasa to Samye Monastery, 170 kilometers",
        "Drive to Samye Monastery, which takes 5 hours through the Yarlung Tsangpo River and beautiful countryside views. You will take a ferry across the Yarlung Tsangpo River to visit Samye Monastery, a sacred place for Tibetan Buddhist followers. The monastery's geographical formation is clean and fantastic, and almost all high-ranking Lamas in Tibetan history used to come here for meditation. Overnight camping.",
        "Day 05: Drive Samye to Voka Valley",
        "Drive to Voka Valley, known for its hot springs believed to be helpful for various diseases. Visit important Gelugpa sect monasteries such as Cholung and Chosang Monasteries. Overnight camping.",
        "Day 06: Hire Horses or Yaks in Voka Valley",
        "From Pejing in Voka Valley, walk about 7 hours to Amando, where you will find some black nomad tents. Overnight camping.",
        "Day 07: Trek to Gyelung La (4968m)",
        "From Amando, walk with yaks about 1/2 hour to Gyelung La, then trek about 4 hours to Chokorgye Monastery, built in 1509 by the 2nd Dalai Lama Gendun Gyatso. Overnight camping.",
        "Day 08: Trek to Lhamo Latso",
        "Trek 4 hours from Chokorgye Monastery to the Oracle Lake Lhamo Latso. Every Dalai Lama and Panchen Lama has visited this lake at least once in their life for future predictions. Overnight camping.",
        "Day 09: Drive to Tsedang, 210 kilometers",
        "On the way, visit Dakpo Tratsang Monastery, originally a Karma Kargyu sect monastery converted to Gelugpa sect in the late 17th century.",
        "Day 10: Explore Tsedang",
        "Morning visit to Chionggye King’s Tomb and afternoon visit to Yumbulakhang, the first Tibetan palace situated about 8 kilometers south of Tradruk. The design of Yumbulakhang indicates it was originally a fortress, narrow at the top and broad at the bottom. This was the palace of the Yarlung Dynasty. From the top of Yumbulakhang Palace, enjoy panoramic views.",
        "Day 11: Departure",
        "Drive to the airport for departure."
    ]
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
    <Typography variant="hTitle" sx={{ my: {xs: "10vh", sm: "10vh"}, textAlign: "left" }}>
    Tibet trekking
          </Typography>
          <img src={TibetTrekkingImg} alt="TibetTrekkingImg" style={{height: "auto", width: "100%"}} />
    </Grid>


 {/*rightB grid */}
    <Grid container sx={{mt: "5vh"}}>
    <ContentGrid content={content}/>
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

export default TibetTrekking