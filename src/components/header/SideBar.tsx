import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import PublicIcon from "@mui/icons-material/Public";
import BusinessIcon from "@mui/icons-material/Business";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import WindPowerIcon from "@mui/icons-material/WindPower";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import TheatersIcon from "@mui/icons-material/Theaters";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div style={{ backgroundColor: "none" }}>
      <AppBar>
        <Toolbar>
          <IconButton onClick={handleDrawerToggle}>
            <DensityMediumIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>
            <Link to="/" onClick={handleDrawerToggle}>
              <ListItemText primary="HeadLine" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <Link to="Business" onClick={handleDrawerToggle}>
              <ListItemText primary="Business" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SportsCricketIcon />
            </ListItemIcon>
            <Link to="Sports" onClick={handleDrawerToggle}>
              <ListItemText primary="Sports" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TheatersIcon />
            </ListItemIcon>
            <Link to="Entertainment" onClick={handleDrawerToggle}>
              <ListItemText primary="Entertainment" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WindPowerIcon />
            </ListItemIcon>
            <Link to="Technology" onClick={handleDrawerToggle}>
              <ListItemText primary="Technology" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
