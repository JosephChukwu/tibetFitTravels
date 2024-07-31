import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import bhutanCulturalTour from "../assets/bhutanCulturalTour.jpg";
import nepalMountain from "../assets/nepalMountain.jpg";
import TibetFitTravel from "../assets/TibetFitTravel.jpg";
import TibetTour from "../assets/TibetTour.jpg";
import mainHomeImg from "../assets/mainHomeImg.jpg";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import tibet from "../assets/tibet.jpg";
import nepal from "../assets/nepal.jpg";
import bhhutan from "../assets/bhutan.jpg";
import LhasaCityTourImg from "../assets/LhasaCityTourImg.jpg";
import LhasaDayTripImg from "../assets/LhasaDayTripImg.jpg";
import LhasaEBCTour from "../assets/LhasaEBCTour.jpg";
import LhasaMoutKailash from "../assets/LhasaMoutKailash.jpg";
import LhasaEasternImg from "../assets/LhasaEasternImg.jpg";
import LhasaTrekkingImg from "../assets/LhasaTrekkingImg.jpg";







const Home = () => {


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const slides = [
    { image: bhutanCulturalTour, text: "Bhutan Tour" },
    { image: nepalMountain, text: "Nepal-Mountain" },
    { image: TibetFitTravel, text: "Tibet F.I.T Travel" },
    { image: TibetTour, text: "Tibet Tour" },
  ];

  return (
    <>
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: -5,
      }}
    >
      <ImageSlider slides={slides} />

            {/*grid 1 */}
      <Grid
        container
        sx={{ paddingX: { xs: "30px", sm: "80px" }, width: "100%", bgcolor: "#f4f4f4"}}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            
          }}
        >
          <Typography
            variant={isSmallScreen ? "h5" : "h1"}
            sx={{ mt: "8vh", textAlign: "left" }}
          >
            Tibet FIT Travel
          </Typography>
          <Typography
            variant={isSmallScreen ? "body1" : "h5"}
            sx={{ my: "3vh", textAlign: "left" }}
          >
            Welcome to our company!
          </Typography>
          <img
            src={mainHomeImg}
            alt="homeimg"
            style={{ width: "100%", height: "auto" }}
          />
          <Typography variant="body2" sx={{textAlign: "center"}}>
            TIBET FIT TRAVEL company based in Lhasa specializes in Tours and
            Trekking all over TIBET and also connecting mainland China and
            Nepal. The team has experience in Tourism for more than 25 years,
            with several local Tibetan English speaking trained guides and some
            of them speak other foreign languages like French, German etc. The
            FIT offers a variety of exciting holiday packages and custom made
            itineraries for Tibet and country combined trips through mainland
            China, Nepal and other Himalayan destinations like Bhutan, Sikkim
            and Ladhakh as well. The FIT’s clientele includes tour operators and
            individual visitors from all around the world.
          </Typography>
          <Typography variant="link" component={Link} to="/AboutUs" sx={{my: "5vh", color: "#008abc", textDecoration: "none"}}>Read More</Typography>
        </Grid>
      </Grid>


      {/*grid 2 */}
      <Grid container sx={{ paddingX: { xs: "30px", sm: "80px" }, width: "100%", display: "flex", flexDirection: "column"}}>
          <Grid item>
          <Typography variant={isSmallScreen ? "h5" : "h1"} sx={{ mt: "8vh", textAlign: "left" }}>Top Destinations</Typography>
          <Typography
            variant={isSmallScreen ? "body1" : "h5"}
            sx={{ my: "5vh", textAlign: "left" }}
          >
          Ready to begin your journey?
          </Typography>
          </Grid>

          <Grid item sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: 5}}>
          <Grid xs={12} sm={4}>
          <Link to="/LhasaCityTour"><img src={tibet} alt="tibetImg" style={{ width: "100%", height: "auto" }}/></Link>
          </Grid>
          <Grid xs={12} sm={4}>
          <Link to="/KathmanduValley"><img src={nepal} alt="nepal" style={{ width: "100%", height: "auto" }}/></Link>
          </Grid>
          <Grid xs={12} sm={4}>
          <Link to="/Bhutancultural"><img src={bhhutan} alt="bhhutan" style={{ width: "100%", height: "auto" }}/></Link>
          </Grid>
          </Grid>
      </Grid>

            {/*grid 3 */}
      <Grid container sx={{ paddingX: { xs: "30px", sm: "80px" }, width: "100%", display: "flex", flexDirection: "column"}}>
          <Grid item>
          <Typography variant={isSmallScreen ? "h5" : "h1"} sx={{ mt: "8vh", textAlign: "left" }}>Most popular Tibet Tours</Typography>
          <Typography variant={isSmallScreen ? "body1" : "h5"} sx={{ my: "5vh", textAlign: "left" }}>Ready to begin your journey?</Typography>
          </Grid>

          <Grid item sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: 5}}>
          <Grid xs={12} sm={4}>
            <img src={LhasaCityTourImg} alt="LhasaCityTourImg" style={{ width: "100%", height: "auto" }}/>
            <Grid sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="title" sx={{mt: "4vh"}}>Lhasa City Tour</Typography>
            <Typography variant="body3" sx={{mt: "4vh"}}>Trip Type: sightseeing</Typography>
            <Typography variant="body3">Duration: 5 to 9 Days</Typography>     
            <Typography variant="body3">Cost: on request</Typography>
            <Typography variant="link" component={Link} to='/LhasaCityTour' sx={{my: "5vh", color: "#008abc",textDecoration: "none"}}>Learn More</Typography>
            </Grid>
            </Grid>
          <Grid xs={12} sm={4}>
            <img src={LhasaDayTripImg} alt="LhasaDayTripImg" style={{ width: "100%", height: "auto" }}/>
            <Grid sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="title" sx={{mt: "4vh"}}>Lhasa day trip list</Typography>
            <Typography variant="body3" sx={{mt: "4vh"}}>Trip Type: Overland tour</Typography>
            <Typography variant="body3">Duration: 1Day</Typography>     
            <Typography variant="body3">Cost: on request</Typography>
            <Typography variant="link" component={Link} to='/LhasaDayTrip' sx={{my: "5vh", color: "#008abc",textDecoration: "none"}}>Learn More</Typography>
            </Grid>
          </Grid>
          <Grid xs={12} sm={4}>
            <img src={LhasaEBCTour} alt="LhasaEBCTour" style={{ width: "100%", height: "auto" }}/>
            <Grid sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="title" sx={{mt: "4vh"}}>Lhasa-EBC-Tour</Typography>
            <Typography variant="body3" sx={{mt: "4vh"}}>Trip Type: Overland tour</Typography>
            <Typography variant="body3">Duration: 10 Days</Typography>     
            <Typography variant="body3">Cost: on request</Typography>
            <Typography variant="link" component={Link} to='/LhasaEverestBase' sx={{my: "5vh", color: "#008abc",textDecoration: "none"}}>Learn More</Typography>
            </Grid>
          </Grid>
          
          </Grid>

          <Grid item sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: 5}}>
          <Grid xs={12} sm={4}>
            <img src={LhasaMoutKailash} alt="LhasaMoutKailash" style={{ width: "100%", height: "auto" }}/>
            <Grid sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="title" sx={{mt: "4vh"}}>Lhasa to Mount Kailash Trip</Typography>
            <Typography variant="body3" sx={{mt: "4vh"}}>Trip Type: Trekking in Tibet</Typography>
            <Typography variant="body3">Duration: 15 to 20 days</Typography>     
            <Typography variant="body3">Cost: on request</Typography>
            <Typography variant="link" component={Link} to='/LhasaKailash' sx={{my: "5vh", color: "#008abc",textDecoration: "none"}}>Learn More</Typography>
            </Grid>
          </Grid>
          <Grid xs={12} sm={4}>
            <img src={LhasaEasternImg} alt="LhasaEasternImg" style={{ width: "100%", height: "auto" }}/>
            <Grid sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="title" sx={{mt: "4vh"}}>Lhasa-Eastern Tibet tour</Typography>
            <Typography variant="body3" sx={{mt: "4vh"}}>Trip Type: Overland tour</Typography>
            <Typography variant="body3">Duration: 10 days</Typography>     
            <Typography variant="body3">Cost: on request</Typography>
            <Typography variant="link" component={Link} to='/EasternTibet' sx={{my: "5vh", color: "#008abc",textDecoration: "none"}}>Learn More</Typography>
            </Grid>
          </Grid>
          <Grid xs={12} sm={4}>
            <img src={LhasaTrekkingImg} alt="LhasaTrekkingImg" style={{ width: "100%", height: "auto" }}/>
            <Grid sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="title" sx={{mt: "4vh"}}>Tibet trekking adeventure</Typography>
            <Typography variant="body3" sx={{mt: "4vh"}}>Trip Type: Trekking in Tibet</Typography>
            <Typography variant="body3">Duration: 23 days</Typography>     
            <Typography variant="body3">Cost: on request</Typography>
            <Typography variant="link" component={Link} to='/TibetTrekking' sx={{my: "5vh", color: "#008abc",textDecoration: "none"}}>Learn More</Typography>
            </Grid>
          </Grid>
          </Grid>
      </Grid>

    </Grid>
    </>
  );
};

export default Home;
