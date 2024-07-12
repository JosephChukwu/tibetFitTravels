import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ImageSlider from "../components/ImageSlider";
import bhutanCulturalTour from "../assets/bhutanCulturalTour.jpg";
import nepalMountain from "../assets/nepalMountain.jpg";
import TibetFitTravel from "../assets/TibetFitTravel.jpg";
import TibetTour from "../assets/TibetTour.jpg";
import mainHomeImg from "../assets/mainHomeImg.jpg";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const slides = [
    { image: bhutanCulturalTour, text: "Bhutan Cultural Tour" },
    { image: nepalMountain, text: "Nepal Mountain" },
    { image: TibetFitTravel, text: "Tibet Fit Travel" },
    { image: TibetTour, text: "Tibet Tour" },
  ];

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: -5,
      }}
    >
      <ImageSlider slides={slides} />
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
          <Typography variant="body2">
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
