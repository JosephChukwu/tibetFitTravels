import React from 'react'
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContentGrid from '../../components/ContentGrid';
import { Link } from "react-router-dom";
import KailashImg from "../../assets/KailashImg.jpg";




const LhasaKailash = () => {


  const content = {
    "15 Days Mt Kailash Tour": [
        "Day 01: Flight to Lhasa (Alt 3,650m. 65kms)",
        "Arrival in Gonggar Airport of Lhasa. You are met and greeted by our representative and drive to Lhasa City (1hr). Check in hotel and take rest for acclimatization. You will experience mild symptoms of the altitude sickness such as headache, dizziness, disorientation, breathlessness etc but it should go away in a day or two. Please, drink plenty of water and consume liquid food. Accommodation in medium Hotel",
        
        "Day 02: At Lhasa （B)",
        "Full day sightseeing of Lhasa, visiting Dalai Lama’s Potala Palace-the principal attraction of Lhasa, Sera Monastery-the last of the three Yellow Sect monasteries to be built in Lhasa and Norbulinkha- the summer palace of the Dalai Lama. If you are a hiking enthusiast and if you do not show signs of altitude sickness, Sera Monastery kora (hiking on the pilgrimage path around the monastery) would be worth trying. We will also take chance to attend the debating ceremony of Sera Monks. Accommodation in Medium Hotel",
        
        "Day 03: At Lhasa (B)",
        "Today, we will visit Drepung Monastery-the largest, richest and the most powerful of the three major Yellow Sect monasteries of Tibet and was the power center of Tibet before the 5th Dalai Lama moved to Potala palace. At Drepung, we will visit the Ganden Palace, Main Assembly Hall and Colleges of Drepung. (Optional: Hiking enthusiasts can also attempt 1 hr long circuit hiking but you should be fully acclimatized ) ancient Jorkhang Temple in the old Tibetan quarter of Lhasa and the Barkhor Street that forms the pilgrim circuit around the Jorkhang Temple. Accommodation in Medium Hotel",
        
        "Day 04: Lhasa- to Shegatse via Gyantse (Alt 3,950m. 366kms) (B)",
        "Today, we drive to Gyantse town which still maintains Tibetan characteristics. The journey involves crossing of two high passes Kamba La (Alt 4700m) and Karo La (16,500ft) and the follows the bank of Yamdrok Tso Lake for more than 40 miles. Yamdrok Tso Lake is one of the four holiest lakes of Tibet and has turquoise green water. As we leave the lakeshore behind, the road climbs to Karo La (5,015m), once again offering breathtaking views of the mountain and vast Tibetan plateau. We arrive at Gyantse town late afternoon. Gyantse, perhaps the only major town in Central Tibet which has been able to maintain its Tibetan characteristics. Visit the Pelkor Chode and Kumbum Monastery-the main highlights of Gyantse City. Kumbum Stupa is the landmark of Gyantse and can be spotted from a long distance. If you are a hiking enthusiast, you may also attempt hiking the historical fortress of Gyantse. View from the fortress over to the city is just superb. From Gyantse, its less than 2 hrs drive to Shigatse, the second largest city of Tibet. Upon arrival in Shigatse, we check in hotel and later take a relaxing walk through the Shigatse's Flea market which is a nice bargain place for Tibetan souvenir. Accommodation in Shigatse medium Hotel",
        
        "Day 05: Shigatse to Saga via Lhatse B (Alt 4500m, 360km)",
        "After breakfast, we check out hotel and visit the famous Tashilunbo Monastery before we hit the highway for Shegar. Tashilunbo Monastery is the principal seat of Panchen Lama-the second most revered religious leader of Tibet after Dalai Lama. We cross two gentle mountain passes Tso-la (4500m/14760ft) and Tropu-la (4950m/16,236ft) A few kilometres beyond Lhatse, we cross the Brahmaputra River and after the crossing, the road enters a river valley with scattered villages. This is a beautiful area for photographs. We continue on, past the turn-off for the northern route, and arrive at Saga, having covered 306km during the day. Overnight guest house with dome room",
        
        "Day 06: Saga-Darchen via Zhongba-Paryang B (Alt 4500m, 530km)",
        "We continue across the vast dry plains to the small Tibetan town of Zhongba. We stop in briefly in Dargyeling monastery that lies 42 km/26 miles from Saga. The road condition from Zhongba deteriorates due to invasion of the sand dunes from either side of the road but we have photogenic views of the sand dunes, lake and mountains comes in 60 km from Zhonba. We camp tonight in Paryang. Today's drive involves crossing of several sandy rivers (Most rivers have bridges now) but has some of the most panoramic scenery of the trip. We cross a high pass of Mayum-la (5216m/17108ft). Our crews will set up camp by the sacred Manasarovar Lake -which according to Hindu mythology was formed in the mind of Brahma-the creator of the world. Today, we will have the first glance “Darshan” of holy Mt. Kailash from Horqu. Most travelers camp here in Horqu due its close proximity to the trailhead. Overnight guest house with dome room.",
        
        "Day 07: Rest Day Darchen and guide will arrange Yak and Yak man for Kora. Overnight guest house with dome room.",
        
        "Day 08: Darchen-Dira Phuk Gompa circumambulate (Altitude 4910m/16,102 ft, 20km/12.5 miles, about 6 hrs trek)",
        "Tarboche, marked by Tibetan flags is the starting point for kora and it is the site for Tibet's most important annual Saga Dawa festival. We walk up the Lha Chu Valley through beautiful green meadows and streams with Mt Kailash towering above us. We follow the river, which enters a narrow canyon with high, steep cliffs and spectacular waterfalls. Continuing up the valley, the north face of Kailash comes into view before we reach the 13th century monastery at Dira-phuk. Overnight guest house with dome room.",
        
        "Day 09: Drira Phuk Monastery-Zuthul-Phuk (Alt 4800, 18kms)",
        "It takes for about 6-7 hrs trek Bid farewell to Lha Chu Valley and prepare to fight the toughest part of the kora. You will enter the Drolma Chu Valley, heading up towards a high pass, the Drolma La [5,630m/18,466 ft] that is marked Tibetan prayer flags. The rest of the day's walk is mostly downhill and flat land. On descent, you will pass by one of the highest lakes in the world, Thukpe Dzingbu Lake (Gauri Kunda), known as the Lake of Compassion. Zuthulphuk monastery is built at the site of a famous cave, which is believed to have been created as a result of contest between Milareppa (Buddhist Yogi) and Naro Bonchung (Bon Saint). Overnight guest house with dome room.",
        
        "Day 10: Zhuthul Phuk-Darchen (Alt 4500, 18kms)",
        "Finish trek to Darchen. We have lunch at Darchen and we prepare for 3 days trekking next 2nd Kora. Drive to Lake Manasarovar. Overnight guest house with dome room.",
        
        "Day 11: Halt at Lake Manasarovara (Alt 4500, 30km)",
        "We have additional day in the lake Manasarovara for acclimatization, rituals and exploring the lakeshores. Chiu Gompa monastery has the fabulous location atop a craggy hill overlooking the sapphire blue lake Manasarovara and offers spectacular views of lake and on a clear weather day, Mount Kailash. Pilgrims perform rituals and take a dip in the holy waters of the lake and clean the sins of lifetime! Hindu travelers will even take care to collect some water in the bottles and bring back home for their families and friends. There are some optional hiking possibilities as well. Overnight guest house with dome room.",
        
        "Day 12: Drive Back to Saga. Overnight guest house with dome room.",
        
        "Day 13: Drive Back to Shegatse. Overnight medium Hotel.",
        
        "Day 14: Drive back to Lhasa via north road (280km, driving 6 hours).",
        
        "Day 15: Drive to airport. End of Tibet tour.",
        
        "NOTE: *** This trip itinerary can be changed or modified as per your time, requirement and interest.",
        
        "Cost of This Trip: Depends on your group size and your requirements. Please e-mail us for a special price quote.",
        
        "For more information and booking this trip, please contact us in advance. Thank you for your time."
    ],
    "13 Days Lhasa-Kailash-Nepal Border Tour": [
        "Day 01: Chengdu/Lhasa (Alt 3,595m/11,792ft)",
        "Arrival in Gonggar Airport of Lhasa. You are met and greeted by our representative and drive to Lhasa City (1hr). Check in hotel and take rest for acclimatization. You will experience mild symptoms of the altitude sickness such as headache, dizziness, disorientation, breathlessness etc but it should go away in a day or two. Please, drink plenty of water and consume liquid food. Overnight medium Hotel.",
        
        "Day 02: At Lhasa (B)",
        "Today, we will visit Drepung Monastery-the largest, richest and the most powerful of the three major Yellow Sect monasteries of Tibet and was the power center of Tibet before the 5th Dalai Lama moved to Potala palace. At Drepung, we will visit the Ganden Palace, Main Assembly Hall and Colleges of Drepung. Ancient Jorkhang Temple in the old Tibetan quarter of Lhasa and the Barkhor Street that forms the pilgrim circuit around the Jorkhang Temple. Overnight medium hotel at Lhasa.",
        
        "Day 03: At Lhasa (B)",
        "Full day sightseeing of Lhasa, visiting Dalai Lama’s Potala Palace-the principal attraction of Lhasa, Sera Monastery-the last of the three Yellow Sect monasteries to be built in Lhasa. We will also take chance to attend the debating ceremony of Sera Monks. Overnight medium hotel at Lhasa.",
        
        "Day 04: Drive to Lake Namtso",
        "Drive to Lake Namtso highest Lake in Tibet and via Largen la pass 5190m drive from Lhasa to Lake 4 hours 2 hours explore lake and drive backto Lhasa. Namtso mean’s Sky holy Lake.",
        
        "Day 05: Lhasa to Shigatse via Gyantse (B)",
        "Drive to Gyantse town which still maintains Tibetan characteristics. The journey involves crossing of two high passes Kamba La (15,700 ft) and Karo La (16,500ft) and the follows the bank of Yamdrok Tso Lake for more than 40 miles. Yamdrok Tso Lake is one of the four holiest lakes of Tibet and has turquoise green water. Overnight at medium hotel Shigatse.",
        
        "Day 06: Shigatse to Saga via Lhatse (B)",
        "After breakfast, we check out hotel and We cross two gentle mountain passes Tso- la (4500m/14760ft) and Tropu-la (4950m/16,236ft) A few kilometer beyond Lhatse, we cross the Brahmaputra River and after the crossing, the road enters a river valley with scattered villages. This is a beautiful area for photographs. We continue on, past the turn-off for the northern route, and arrive at Saga, having covered 306km during the day. Overnight guest house at Saga.",
        
        "Day 07: Saga to Manasarova Lake via Zhongba-Paryang",
        "Altitude 4750m/14,891 ft, distance: 542km/ 340 miles, drive about 10-12 hrs drive. We continue across the vast dry plains to the small Tibetan town of Zhongba. We cross a high pass of Mayum-la (5216m/17108ft). Our crews will set up camp by the sacred Manasarovar Lake -which according to Hindu mythology was formed in the mind of Brahma-the creator of the world. Overnight very simple guest house with dorm room.",
        
        "Day 08: Morning explore Lake Manasarova then drive to Darchen",
        "Overnight simple guest house.",
        
        "Day 09: Darchen-Dira Phuk Gompa circumambulate",
        "Altitude 4910m/16,102 ft, 20km/12.5 miles, about 6 hrs trek Tarboche, marked by Tibetan flags is the starting point for kora and it is the site for Tibet’s most important annual Saga Dawa festival. We walk up the Lha Chu Valley through beautiful green meadows and streams with Mt Kailash towering above us. Overnight guest house with dorm room.",
        
        "Day 10: (Hard day trekking) Drira Phuk Monastery-Zuthul-Phuk",
        "Altitude 4790m/15,711 ft., 18km/11 miles, about 6-7 hrs trek Bid farewell to Lha Chu Valley and prepare to fight the toughest part of the kora. You will enter the Drolma Chu Valley, heading up towards a high pass, the Drolma La (5,630m/18,466 ft) that is marked Tibetan prayer flags. The rest of the days walk is mostly downhill and flat land. Overnight guest house with dorm room.",
        
        "Day 11: Finish trek to Darchen then drive to Saga",
        "Altitude 4660m/15,285 ft (530 km, 7-4 hrs). We have lunch in Darchen. Overnight in medium hotel in Saga.",
        
        "Day 12: Drive to Kerung border via Gungthang La pass",
        "Altitude 5260m, drive 5 hours. Overnight medium hotel.",
        
        "Day 13: Drive to Border cross he Nepal border",
        "End Of Tibet tour.",
        
        "NOTE: *** This trip itinerary can be changed or modified as per your time, requirement and interest.",
        
        "SPECIAL PACKAGE COST IN USD",
        "Group Size:",
        "4-5 persons: US$ 1886 per person",
        "6-9 persons: US$ 1596 per person",
        "10-12 persons: US$ 1325 per person",
        "13-15 persons: US$ 1300 per person",
        "16 & above persons: US$ 1245 per person",
        "Cost for Extra Adult/Child with Beds if some one needed: US$ 380 per person",
        "For more information and booking this trip, please contact us in advance. Thank you for your time."
    ],
    "17 days Mt Kailash & Guge Kingdom tour": [
        "Day 01: Flight to Lhasa (Alt 3,650m, 65km)",
        "Arrival in Gonggar Airport of Lhasa. You are met and greeted by our representative and drive to Lhasa City (1hr). Check in hotel and take rest for acclimatization. You will experience mild symptoms of the altitude sickness such as headache, dizziness, disorientation, breathlessness etc but it should go away in a day or two. Please, drink plenty of water and consume liquid food. Accommodation in middle.",
        
        "Day 02: At Lhasa (B)",
        "Full day sightseeing of Lhasa, visiting Dalai Lama’s Potala Palace—the principal attraction of Lhasa, Sera Monastery—the last of the three Yellow Sect monasteries to be built in Lhasa and Norbulinkha—the summer palace of the Dalai Lama. If you are a hiking enthusiast and if you do not show signs of altitude sickness, Sera Monastery kora (hiking on the pilgrimage path around the monastery) would be worth trying. We will also take a chance to attend the debating ceremony of Sera Monks. Accommodation in middle.",
        
        "Day 03: At Lhasa (B)",
        "Today, we will visit Drepung Monastery—the largest, richest and the most powerful of the three major Yellow Sect monasteries of Tibet and was the power center of Tibet before the 5th Dalai Lama moved to Potala Palace. At Drepung, we will visit the Ganden Palace, Main Assembly Hall and Colleges of Drepung. (Optional: Hiking enthusiasts can also attempt 1 hr long circuit hiking but you should be fully acclimatized) ancient Jorkhang Temple in the old Tibetan quarter of Lhasa and the Barkhor Street that forms the pilgrim circuit around the Jorkhang Temple. Accommodation in middle.",
        
        "Day 04: Lhasa-Gyantse (Alt 4000m, 265km) (B)",
        "Today, we drive to Gyantse town which still maintains Tibetan characteristics. The journey involves crossing two high passes, Kamba La (15,700 ft) and Karo La (16,500 ft) and follows the bank of Yamdrok Tso Lake for more than 40 miles. Yamdrok Tso Lake is one of the four holiest lakes of Tibet and has turquoise green water. As we leave the lakeshore behind, the road climbs to Karo La (16,500 ft), once again offering breathtaking views of the mountain and vast Tibetan plateau. We arrive at Gyantse town late afternoon. Gyantse, perhaps the only major town in Central Tibet which has been able to maintain its Tibetan characteristics. We check in hotel and take rest for the day. Overnight Gyantse medium Hotel.",
        
        "Day 05: Gyantse-Shigatse (Alt 3950m, 95km) (B)",
        "After breakfast, we will visit the Pelkor Chode and Kumbum Monastery—the main highlights of Gyantse City. Kumbum Stupa is the landmark of Gyantse and can be spotted from a long distance. If you are a hiking enthusiast, you may also attempt hiking the historical fortress of Gyantse. The view from the fortress over the city is just superb. From Gyantse, it’s less than 2 hrs drive to Shigatse, the second largest city of Tibet. About 13 miles (20 km) before Shigatse, we take a 4 km side trip to Shalu Monastery—the first of the major monasteries to be built by noble families of the Tsang Dynasty during Tibet's great revival of Buddhism and was an important center of the Sakya tradition. Upon arrival in Shigatse, we check in hotel and later take a relaxing walk through Shigatse's Flea market which is a nice bargain place for Tibetan souvenirs.",
        
        "Day 06: Shigatse to Everest and Rongbuk Monastery via Lhatse (Alt 4500m, 350km)",
        "Today, we drive to Everest and Rongbuk Monastery, crossing mountain passes including Tso-la (4500m) and Gyatsola pass (5225m).",
        
        "Day 07: Drive to Saga (220km, 6 hours, Alt 4460m)",
        "Enjoy breathtaking views of Shisha Pangma and Peiku Tso Lake on the way to Saga.",
        
        "Day 08: Saga-Darchen via Zhongba-Paryang (B)",
        "Altitude 4750m/14,891 ft, distance: 542km/340 miles, about 10-12 hrs drive. We continue across the vast dry plains to the small Tibetan town of Zhongba. We stop briefly at Dargyeling Monastery located 42 km/26 miles from Saga. The road condition from Zhongba deteriorates due to sand dunes on either side of the road but offers photogenic views of the sand dunes, lake, and mountains. We camp tonight in Paryang. Today's drive involves crossing several sandy rivers (most now have bridges) and offers some of the most panoramic scenery of the trip. We cross a high pass of Mayum-la (5216m/17108ft). Our crew will set up camp by the sacred Manasarovar Lake, which according to Hindu mythology was formed in the mind of Brahma—the creator of the world. Today, we will have the first glance “Darshan” of holy Mt. Kailash from Horqu. Most travelers camp here in Horqu due to its close proximity to the trailhead.",
        
        "Day 09: Darchen-Dira Phuk Gompa Circumambulate",
        "Altitude 4910m, 20km, about 6 hrs trek. Tarboche, marked by Tibetan flags, is the starting point for kora and the site for Tibet's most important annual Saga Dawa festival. We walk up the Lha Chu Valley through beautiful green meadows and streams with Mt. Kailash towering above us. We follow the river, which enters a narrow canyon with high, steep cliffs and spectacular waterfalls. Continuing up the valley, the north face of Kailash comes into view before we reach the 13th-century monastery at Dira-phuk. Overnight guest house.",
        
        "Day 10: Drira Phuk Monastery-Zuthul-Phuk",
        "Altitude 4790m, 18km, about 6-7 hrs trek. Bid farewell to Lha Chu Valley and prepare for the toughest part of the kora. You will enter the Drolma Chu Valley, heading up towards a high pass, the Drolma La [5,630m/18,466 ft], marked with Tibetan prayer flags. The rest of the day's walk is mostly downhill and flat land. On descent, you will pass by one of the highest lakes in the world, Thukpe Dzingbu Lake (Gauri Kunda), known as the Lake of Compassion. Zuthulphuk Monastery is built at the site of a famous cave, believed to have been created as a result of a contest between Milareppa (Buddhist Yogi) and Naro Bonchung (Bon Saint). Overnight guest house.",
        
        "Day 11: Trek to Tirthapori or Menche, Drive to Tholing (Zanda)",
        "Altitude: 3650m, distance 270km, 7-8 hrs. We have a long day drive along a rough road that first climbs over Jingla Pass (5100m/16728ft), offering a unique view of the landscapes. The road zigzags down into a series of gorges and climbs up the other side before eventually making a long winding and very rough descent down a fantastically eroded gully. The side valley emerges into the wider Sutlez Valley and after crossing a bridge, the road reaches the oasis-like town of Zanda, also known as Tsamda. Overnight guest house.",
        
        "Day 12: Visit Tholing and Tsaparang—the Ruined Capital of Ancient Guge Kingdom",
        "We explore Tholing and neighboring Tsaparang (20km east of Tholing), which are the ruined former capitals of Ngari-West Tibet. Tholing, once the most important monastic complex in western Tibet, is an impressive sight. Below stands the first capital of Guge while the skyline comprises a vast sweep of the Ladakh Himalaya. Guge's later capital at Tsaparang is of even greater significance in the history of Buddhist art, with its fantastic wall murals displaying evidence of close links with Ladakh and Kashmir. We will rediscover the cave dwellings, secret twisting paths, and tunnels linking the palaces.",
        
        "Day 13: Drive Back to Manasarovar Lake (310km, 6 hours, Altitude 4560m)",
        "Drive to Manasarovar (330km, 7 hours). We have an additional day at Lake Manasarovar for acclimatization, rituals, and exploring the lakeshores. Chiu Gompa Monastery, located atop a craggy hill overlooking the sapphire blue lake, offers spectacular views of the lake and, on a clear day, Mount Kailash. Pilgrims perform rituals and take a dip in the holy waters of the lake to cleanse the sins of a lifetime! Hindu travelers will also collect some water in bottles to bring home for their families and friends. There are also optional hiking possibilities.",
        
        "Day 14: Drive Back to Saga, Overnight guest house.",
        
        "Day 15: Saga to Shigatse (450km) - Overnight guest house",
        
        "Day 16: Shigatse to Lhasa (280km) - Overnight guest house",
        
        "Day 17: Lhasa to Kathmandu (If you are traveling to Kathmandu) or departure from Lhasa."
    ],
    "18 days Lhasa to Kashgar Trek": [
        "Day 01: Fly to Lhasa and Transfer to Hotel (3650m)",
        "Group pick up at Lhasa Airport and transfer to hotel. Rest in Lhasa to acclimatize to the high altitude.",
        
        "Day 02: Visit Potala Palace and Jokhang Temple",
        "Morning visit to Potala Palace, the seat of both religion and politics in Tibet, built in the 7th century by Tibetan king Songtsen Gampo and renovated by the 5th Dalai Lama in the 17th century. Afternoon visit to Sera Monastery, 5 kilometers north of Lhasa City, built in 1419 by Jamchen Choejie, a disciple of Tsongkapa, and the founder of the Gelugpa sect. Sera is one of the three major monasteries of the Yellow Sect in Tibet.",
        
        "Day 03: Lhasa Sightseeing - Sera Monastery and Drepung Monastery (B)",
        "Explore Tibet's two greatest monasteries: Drepung and Sera. Drepung Monastery, founded by Jamyang Choeje in 1416, is situated at the foothill of a mountain and was once the largest monastery in Tibet, divided into two colleges: Drepung Loselling and Drepung Gomang. The Ganden Podrang was the government center during the fifth Dalai Lama before it moved to the Potala Palace. Afternoon visit to Sera Monastery, founded in 1419 by Tsongkapa's disciple Jamchen Choeje. The monastery is divided into two colleges: Sera 'Jie' and Sera 'Mei'. You can see monks debating in the courtyard in the afternoon.",
        
        "Day 04: Lhasa - Samye Monastery - Lhasa",
        "Visit Samye Monastery, the first monastery in Tibet and the first complete representation of the three Buddhist jewels of Buddha, Dharma, and Sangha. It was built in the 8th century by Tibetan King Tsesong Detse.",
        
        "Day 05: Samye - Shigatse via Yamdrok Lake",
        "Drive from Samye to Shigatse, crossing high passes such as Karola (5050m), Gambala (4750m), and Yamdrok Lake (4340m). Explore the Tibetan lifeline river, Yarlung Tsangpo.",
        
        "Day 06: Shigatse to Mt. Everest via Shegar",
        "Drive westwards along the Friendship Highway to Tingri. Experience a bumpy road from Tingri to Rongbuk, which is under construction. Pass wild grasslands, rapids rivers, and high mountains. On a clear day, view the 8000m+ peaks of Mt. Lhotse, Mt. Everest, Mt. Qowowuyag, and Mt. Mayalu.",
        
        "Day 07: Drive from Mt. Everest Base Camp to Saga County (450km) (B)",
        "Early morning sunrise view from Rongphu and Mt. Everest. Drive to Saga via the newly paved road for a faster and safer journey.",
        
        "Day 08: Saga to Lake Manasarovar (500km) (B)",
        "Move towards Drongpa County, the source of the Brahmaputra River. Visit old Drongpa monastery with yak heads carved with mantras. Proceed to New Drongpa and then to Baryang (4750m) before reaching Lake Manasarovar.",
        
        "Day 10: Trek Day One (Outer Circuit) - Darchen to Drirapuk (11km) (B)",
        "Commence the 52 km trekking circuit around Mount Kailash from Darchen (4574m), crossing Dolma-la Pass on the second day. After leaving Darchen, arrive at Drirapuk (4920m) and rest in the monastery’s guest house or camp.",
        
        "Day 11: Trek Day Two - Drirapuk to Dzultripuk (22km) (B)",
        "The hardest day of trekking involves crossing Dolma-la Pass (5630m). Descend to Lhachu Valley and trek to Dzultripuk (Miracle Cave of Milarepa). Arrive early to secure rooms in Dzultripuk guest house.",
        
        "Day 12: Trek Day Three - Dzultripuk to Darchen (11km) (B)",
        "Visit caves and shrines around Milarepa's cave before walking back to Darchen. The exit from the valley is reached within three hours, where drivers will pick you up and take you back to Darchen.",
        
        "Day 13: Darchen to Zanda - Visit Guge Kingdom and Tholing Monastery (B)",
        "Drive from Darchen to Zanda (243km) in about eight hours. Explore the Guge Kingdom, with Tholing Monastery, founded in the 10th century by Richen Zangpo. The monastery was an important religious center influenced by Indian master Atisha.",
        
        "Day 14: Zanda to Pangong-tso Lake (395km) (B)",
        "Travel to Ali, the capital of Ngari Prefecture, then continue to Pangong-tso Lake. Explore the lake, which spans both Tibetan and Indian territories.",
        
        "Day 15: Pangong-tso - Dorma - Dahongliutan (433km) (B)",
        "Drive through challenging road conditions towards Dahongliutan. Cross Tialongtan-la Pass (above 5000m) and navigate rough roads before reaching Dahongliutan.",
        
        "Day 16 - 17: Dahongliutan to Yecheng (499km) (B)",
        "Drive 499km to Yecheng, passing through the Kunlun and Karakorum mountain ranges. Experience the beautiful mountain scenery and reach Yecheng, a city at the edge of the Taklamakan Desert.",
        
        "Day 18: Yecheng to Kashgar - Visit the Edge of Taklamakan Desert (B)",
        "Travel 250km to Kashgar, the largest oasis in China. Enjoy the smooth road and the scenic landscape of the Taklamakan Desert. Visit the Sunday market, one of Asia’s largest weekly markets, and conclude your tour at Kashgar.",
        
        "NOTE: *** This trip itinerary can be changed or modified as per your time, requirement, and interest. Cost of This Trip depends on your group size and requirements. Please e-mail us for a special price quote. For more information and booking this trip, please contact us in advance. Thank you for your time."
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
    Lhasa to Mt Kailash trips
    </Typography>
          <img src={KailashImg} alt="KailashImg" style={{height: "auto", width: "100%"}} />
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

export default LhasaKailash