import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import ContactModal from "./ContactModal";
import { motion, AnimatePresence } from "framer-motion";





export default function NestedList({ handleLinkClick,open, close}) {




  
  


  const theme = useTheme();
  const [openn, setOpen] = React.useState(true);
  const [nestedOpen, setNestedOpen] = React.useState(false);
  const [nestedOpen2, setNestedOpen2] = React.useState(false);
  const [nestedOpen3, setNestedOpen3] = React.useState(false);
  const [nestedOpen4, setNestedOpen4] = React.useState(false);
  const [nestedOpen4a, setNestedOpen4a] = React.useState(false);
  const [nestedOpen5, setNestedOpen5] = React.useState(false);

  const handleClick = () => {
    setNestedOpen(!nestedOpen);
  };
  const handleClick2 = () => {
    setNestedOpen2(!nestedOpen2);
  };
  const handleClick3 = () => {
    setNestedOpen3(!nestedOpen3);
  };
  const handleClick4 = () => {
    setNestedOpen4(!nestedOpen4);
  };
  const handleClick4a = () => {
    setNestedOpen4a(!nestedOpen4a);
  };
  const handleClick5 = () => {
    setNestedOpen5(!nestedOpen5);
  };

  const textStyle = { color: "white" };

  return (
    <Collapse
      in={openn}
      timeout="auto"
      unmountOnExit
      sx={{ color: "white", maxHeight: "500px" }}
    >
      <List sx={{ width: "100%", overflowY: "auto", maxHeight: "400px", color: "white" }}>
        <ListItemButton component={Link} to="/" sx={{ color: "white"}} onClick={handleLinkClick}>
          <ListItemText primary="Home" sx={{ color: (theme) => theme.palette.primary.main }} />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="About" sx={textStyle} />
          {nestedOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/AboutUs" onClick={handleLinkClick}>
              <ListItemText primary="About Us" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/CompanyProfile" onClick={handleLinkClick}>
              <ListItemText primary="Company Profile" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/OurTeam" onClick={handleLinkClick}>
              <ListItemText primary="Our Team" sx={textStyle} />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick2}>
          <ListItemText primary="Tibet Tour" sx={textStyle} />
          {nestedOpen2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nestedOpen2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, }} component={Link} to="/LhasaCityTour" onClick={handleLinkClick}>
              <ListItemText primary="Lhasa city tour" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/LhasaDayTrip" onClick={handleLinkClick}>
              <ListItemText primary="Lhasa day trip" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/LhasaEverestBase" onClick={handleLinkClick}>
              <ListItemText primary="Lhasa to Everest Base Camp Tour" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/LhasaKailash" onClick={handleLinkClick}>
              <ListItemText primary="Lhasa to Mt Kailash trips" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/EasternTibet" onClick={handleLinkClick}>
              <ListItemText primary="Eastern Tibet tour" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/TibetTrekking" onClick={handleLinkClick}>
              <ListItemText primary="Tibet trekking" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/SpringTibet" onClick={handleLinkClick}>
              <ListItemText primary="Spring Tibet Tour" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/LhasaEverestNmatso" onClick={handleLinkClick}>
              <ListItemText primary="Lhasa Everest Namtso Lake Tour" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/KailashKora" onClick={handleLinkClick}>
              <ListItemText primary="Kailash Kora Tour" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/KailashLhasa" onClick={handleLinkClick}>
              <ListItemText primary="Kailash-Lhasa Tour" sx={textStyle} />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick3}>
          <ListItemText primary="Amdo-Kham" sx={textStyle} />
          {nestedOpen3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nestedOpen3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/SpecialKhamTour" onClick={handleLinkClick}>
              <ListItemText primary="Special Kham Tour" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/AmdoCultural" onClick={handleLinkClick}>
              <ListItemText primary="Amdo Cultural Tour" sx={textStyle} />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick4}>
          <ListItemText primary="Nepal" sx={textStyle} />
          {nestedOpen4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nestedOpen4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={handleClick4a}>
              <ListItemText primary="Trekking" sx={textStyle} />
              {nestedOpen4a ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={nestedOpen4a} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} component={Link} to="/AnapurnaBase" onClick={handleLinkClick}>
                  <ListItemText primary="Annapurna Base Camp" sx={textStyle} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} component={Link} to="/LhasaDayTrip" onClick={handleLinkClick}>
                  <ListItemText primary="Lhasa day trip" sx={textStyle} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} component={Link} to="/MustangTrek" onClick={handleLinkClick}>
                  <ListItemText primary="Mustang Trek" sx={textStyle} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} component={Link} to="/LangtangGosainkunda" onClick={handleLinkClick}>
                  <ListItemText primary="Langtang-Gosainkunda" sx={textStyle} />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/KathmanduValley" onClick={handleLinkClick}>
              <ListItemText primary="Kathmandu Valley" sx={textStyle} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/JungleSafari" onClick={handleLinkClick}>
              <ListItemText primary="Jungle Safari" sx={textStyle} />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick5}>
          <ListItemText primary="Bhutan" sx={textStyle} />
          {nestedOpen5 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nestedOpen5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/BhutanCultural" onClick={handleLinkClick}>
              <ListItemText primary="Bhutan Cultural Tour" sx={textStyle} />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton   sx={{ color: "white",border:'none'}} onClick={() => {open(), handleLinkClick()}}>
          <ListItemText primary="Contact" sx={{ color: "white"}} />
        </ListItemButton>
        <ListItemButton component={Link} to="/Testimonial" sx={{ color: "white"}} onClick={handleLinkClick}>
          <ListItemText primary="Testimonial" sx={{ color: (theme) => theme.palette.primary.main }} />
        </ListItemButton>
      </List>
    </Collapse>
  );
}
