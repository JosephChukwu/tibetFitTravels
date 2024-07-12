import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { FaBars } from "react-icons/fa";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import tibetFitLogo from "../assets/tibetFitLogo.png";
import DrawerMenu from "./Drawer";
import { Link } from "react-router-dom";
import NestedList from "./NestedList";
import zIndex from "@mui/material/styles/zIndex";

const typographySx = {
  fontFamily: "'Raleway', sans-serif",
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '27px',
  color: 'inherit',
  padding: '10px',
  background: 'none',
  border: 'none',
  textDecoration: "none",
  cursor: 'pointer',
  '&:hover': {
    color: '#d65050',
  },
  '&:active': {
    background: 'transparent',
  },
  '&:focusVisible': {
    outline: 'none',
  },
};

const Header = () => {
  const [isNestedListVisible, setIsNestedListVisible] = useState(false);
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const aboutItems = [
    { label: "About Us", path: "/AboutUs" },
    { label: "About Us", path: "/AboutUs" },
    { label: "Company Profile", path: "/CompanyProfile" },
    { label: "Our Team", path: "/OurTeam" },
  ];

  const amdokham = [
    { label: "Special Kham Tour", path: "/SpecialKhamTour" },
    { label: "Special Kham Tour", path: "/SpecialKhamTour" },
    { label: "Amdo Cultural Tour", path: "/AmdoCultural" },
  ];

  const nepal = [
    { label: "Special Kham Tour", path: "/SpecialKhamTour" },
  
    { label: "Special Kham Tour", path: "/SpecialKhamTour" },
    { label: "Amdo Cultural Tour", path: "/AmdoCultural" , },
    { label: "Trekking", 
      subMenu: [
      {
        label: 'Annapurna Base Camp',
        path: '/AnapurnaBase',
      },
      {
        label: 'Lhasa Day Trip',
        path: '/LhasaDayTrip',
      },
      {
        label: 'Mustang Trek',
        path: '/MustangTrek',
      },
      {
        label: 'Langtang-Gosainkunda',
        path: '/LangtangGosainkunda',
      },
    ],
     },
    
  ];

  const bhutan = [
    { label: "Bhutan Cultural Tour", path: "/Bhutancultural" },
    { label: "Bhutan Cultural Tour", path: "/Bhutancultural" },
  ];

  const tibetTour = [
    { label: "Lhasa city tour", path: "/LhasaCityTour" },
    { label: "Lhasa city tour", path: "/LhasaCityTour" },
    { label: "Lhasa day trip", path: "/LhasaDayTrip" },
    { label: "Lhasa Everest Base Camp Tour", path: "/LhasaEverestBase" },
    { label: "Lhasa to Mt Kailash trips", path: "/LhasaKailash" },
    { label: "Eastern Tibet tour", path: "/EasternTibet" },
    { label: "Tibet trekking", path: "/TibetTrekking" },
    { label: "Spring Tibet Tour", path: "/SpringTibet" },
    { label: "Lhasa Everest Namtso Tibet Tour", path: "/LhasaEverestNmatso" },
    { label: "Kailash Kora Tour", path: "/KailashKora" },
  ];

  const handleHamburgerClick = () => {
    setIsNestedListVisible(!isNestedListVisible);
  };

  return (
    <header>
      <AppBar position="fixed" style={{ backgroundColor: "#0379a9", width: "100vw",zIndex: 1  }}>
        <Toolbar>
          <Grid
            container
            direction="column"
            alignItems="center"
            sx={{
              display: { xs: "flex", sm: "flex", md: "none" },
              mt: "20px",
              width: "100vw",
            }}
          >
            <Grid item>
              <Link to="/" style={{ textDecoration: "none", color: "#46c4bd" }}>
                <img
                  src={tibetFitLogo}
                  alt="header logo"
                  style={{ height: "100px", width: "99px" }}
                />
              </Link>
            </Grid>
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleHamburgerClick}
              >
                <FaBars
                  style={{ height: "26px", width: "22px", color: "white" }}
                />
              </IconButton>
            </Grid>
          </Grid>

          <Grid
            container
            alignItems="center"
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            <Grid
              item
              xs={2}
              sx={{ textAlign: "center" }}
            >
              <Link to="/">
                <img
                  src={tibetFitLogo}
                  alt="header logo"
                  style={{ height: "100px", width: "100px", margin: "20px" }}
                />
              </Link>
            </Grid>

            <Grid item xs={7.5} sx={{ marginLeft: "auto", color: "#ffffff"}}>
              <Typography component={Link} to="/" sx={typographySx}>Home</Typography>
              <DrawerMenu label="About" menuItems={aboutItems} />
              <DrawerMenu label="Tibet Tour" menuItems={tibetTour} />
              <DrawerMenu label="Amdo-Kham" menuItems={amdokham} />
              <DrawerMenu label="Nepal" menuItems={nepal} />
              <DrawerMenu label="Bhutan" menuItems={bhutan} />
              <Typography component={Link} to="/Testimonial" sx={typographySx}>Testimonial</Typography>
              <Typography component={Link} to="/Contact" sx={typographySx}>Contact</Typography>
            </Grid>
          </Grid>
        </Toolbar>
        <div
          style={{
            width: "100%",
            display: isNestedListVisible ? "block" : "none",
            backgroundColor: "black",
            zIndex: "5",
          }}
        >
          {isNestedListVisible && <NestedList />}
        </div>
      </AppBar>
    </header>
  );
};

export default Header;
