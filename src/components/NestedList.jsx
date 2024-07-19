import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate, Link } from "react-router-dom";



export default function NestedList() {
  const [open, setOpen] = React.useState(true);
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

  return (
    <Collapse
      in={open}
      timeout="auto"
      unmountOnExit
      sx={{ color: "white", maxHeight: "500px" }}
    >
      {" "}
      {/* Set background color here */}
      <List sx={{ width: "100%", overflowY: "auto", maxHeight: "400px" }}>
        {" "}
        {/* Fill the space and enable scrolling */}
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="About" />
          {nestedOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/AboutUs">
              <ListItemText primary="About Us" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              to="/CompanyProfile"
            >
              <ListItemText primary="Company Profile" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/OurTeam">
              <ListItemText primary="Our Team" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick2}>
          <ListItemText primary="Tibet Tour" />
          {nestedOpen2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nestedOpen2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/LhasaCityTour">
              <ListItemText primary="Lhasa city tour" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/LhasaDayTrip">
              <ListItemText primary="Lhasa day trip" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              to="/LhasaEverestBase"
            >
              <ListItemText primary="Lhasa to everest Base Camp Tour" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/LhasaKailash">
              <ListItemText primary="Lhasa to Mt Kailash trips" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/EasternTibet">
              <ListItemText primary="Eastern Tibet tour" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/TibetTrekking">
              <ListItemText primary="Tibet trekking" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/SpringTibet">
              <ListItemText primary="Spring Tibet Tour" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              to="/LhasaEverestNmatso"
            >
              <ListItemText primary="Lhasa Everest Namtso Lake Tour" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/KailashKora">
              <ListItemText primary="Kailash Kora Tour" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/KailashLhasa">
              <ListItemText primary="Kailash-Lhasa Tour" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick3}>
          <ListItemText primary="Amdo-Kham" />
          {nestedOpen3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nestedOpen3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              to="/SpecialKhamTour"
            >
              <ListItemText primary="Speacial Kham Tour" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/AmdoCultural">
              <ListItemText primary="Amdo Cultural Tour" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick4}>
          <ListItemText primary="Nepal" />
          {nestedOpen4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nestedOpen4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={handleClick4a}>
              <ListItemText primary="Trekking" />
              {nestedOpen4a ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={nestedOpen4a} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/AnapurnaBase"
                >
                  <ListItemText primary="Annapurna Base Camp" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/LhasaDayTrip"
                >
                  <ListItemText primary="Lhasa day trip" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/MustangTrek"
                >
                  <ListItemText primary="Mustang Trek" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/LangtangGosainkunda"
                >
                  <ListItemText primary="Langtang-Gosainkunda" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              to="/KathmanduValley"
            >
              <ListItemText primary="Kathmandu Valley Tour" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/Pokhara">
              <ListItemText primary="Pokhara Tour" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/RiverRafting">
              <ListItemText primary="River Rafting" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/JungleSafari">
              <ListItemText primary="Jungle Safari" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick5}>
          <ListItemText primary="Bhutan" />
          {nestedOpen5 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nestedOpen5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              to="/Bhutancultural"
            >
              <ListItemText primary="Bhutan Cultural Tour" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton component={Link} to="/Testimonial">
          <ListItemText primary="Testimonial" />
        </ListItemButton>
        <ListItemButton component={Link} to="/Contact">
          <ListItemText primary="Contact" />
        </ListItemButton>
      </List>
    </Collapse>
  );
}
