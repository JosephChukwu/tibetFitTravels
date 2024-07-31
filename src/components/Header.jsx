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
import Footer from '../components/Footer'
import ContactModal from "./ContactModal";
import { motion, AnimatePresence } from "framer-motion";





const typographySx = {
  fontSize: "13px",
  margin: "0 0.7rem",
  textDecoration: "none",
  fontFamily: "Raleway",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "white",
  "&:hover": {
    color: "#ffd700",
   
  },
   border: "none",
   bgcolor: "inherit"
};

// Define the menu items here
const aboutItems = [
  { label: "About Us", path: "/AboutUs" },
  { label: "About Us", path: "/AboutUs" },
  { label: "Company Profile", path: "/CompanyProfile" },
  { label: "Our Team", path: "/OurTeam" },
];

const tibetTour = [
  { label: "Lhasa city tour", path: "/LhasaCityTour" },
  { label: "Lhasa city tour", path: "/LhasaCityTour" },
  { label: "Lhasa day trip", path: "/LhasaDayTrip" },
  { label: "Lhasa to Everest Base Camp Tour", path: "/LhasaEverestBase" },
  { label: "Lhasa to Mt Kailash trips", path: "/LhasaKailash" },
  { label: "Eastern Tibet tour", path: "/EasternTibet" },
  { label: "Tibet trekking", path: "/TibetTrekking" },
  { label: "Spring Tibet Tour", path: "/SpringTibet" },
  { label: "Lhasa Everest Namtso Lake Tour", path: "/LhasaEverestNmatso" },
  { label: "Kailash Kora Tour", path: "/KailashKora" },
  { label: "Kailash-Lhasa Tour", path: "/KailashLhasa" },
];

const amdokham = [
  { label: "Special Kham Tour", path: "/SpecialKhamTour" },
  { label: "Special Kham Tour", path: "/SpecialKhamTour" },
  { label: "Amdo Cultural Tour", path: "/AmdoCultural" },
];

const nepal = [
  { label: "Annapurna Base Camp", path: "/AnapurnaBase" },
  { label: "Annapurna Base Camp", path: "/AnapurnaBase" },
  { label: "Lhasa day trip", path: "/LhasaDayTrip" },
  { label: "Mustang Trek", path: "/MustangTrek" },
  { label: "Langtang-Gosainkunda", path: "/LangtangGosainkunda" },
  { label: "Kathmandu Valley", path: "/KathmanduValley" },
  { label: "Jungle Safari", path: "/JungleSafari" },
];

const bhutan = [
  { label: "About Bhutan", path: "/AboutBhutan" },
  { label: "About Bhutan", path: "/AboutBhutan" },
  { label: "Bhutan Cultural Tour", path: "/BhutanCultural" },
];

// const typographySx = {
//   fontSize: "13px",
//   margin: "0 0.7rem",
//   textDecoration: "none",
//   fontFamily: "Raleway",
//   textTransform: "uppercase",
//   letterSpacing: "1px",
//   color: "white",
//   "&:hover": {
//     color: "#ffd700",
//   },
// };




const Header = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  const [isNestedListVisible, setIsNestedListVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleHamburgerClick = () => {
    setIsNestedListVisible(!isNestedListVisible);
  };

  const handleLinkClick = () => {
    setIsNestedListVisible(false);
  };

  return (
    <header>
      <AppBar
        style={{
          backgroundColor: "#0379a9",
          width: "100vw",
          zIndex: 1,
          color: "white",
          position: isMobile ? "fixed" : "fixed",
          mb: 0,
        }}
      >
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
            <Grid item xs={2} sx={{ textAlign: "center" }}>
              <Link to="/">
                <img
                  src={tibetFitLogo}
                  alt="header logo"
                  style={{ height: "100px", width: "100px", margin: "20px" }}
                />
              </Link>
            </Grid>

            <Grid
              item
              xs={7.5}
              sx={{ marginLeft: "auto", color: "#ffffff" }}
            >
              <Typography component={Link} to="/" sx={typographySx}>
                Home
              </Typography>
              <DrawerMenu label="About" menuItems={aboutItems} />
              <DrawerMenu label="Tibet Tour" menuItems={tibetTour} />
              <DrawerMenu label="Amdo-Kham" menuItems={amdokham} />
              <DrawerMenu label="Nepal" menuItems={nepal} />
              <DrawerMenu label="Bhutan" menuItems={bhutan} />
              <Typography component={Link} to="/Testimonial" sx={typographySx}>
                Testimonial
              </Typography>
              <Typography component="button" onClick={() => (modalOpen ? close() : open())}  sx={typographySx}>
                Contact
              </Typography>
              <AnimatePresence 
              initial={false}
              // exitBeforeEnter={true}
              onExitComplete={() => null}
              mode="wait"
              >
              {modalOpen && <ContactModal modalOpen={modalOpen} handleClose={close}/>}
              </AnimatePresence>
            </Grid>
          </Grid>
        </Toolbar>

        <div style={{ backgroundColor: "black" }}>
          {isNestedListVisible && <NestedList handleLinkClick={handleLinkClick} />}
        </div>
      </AppBar>
    </header>
  );
};

export default Header;
