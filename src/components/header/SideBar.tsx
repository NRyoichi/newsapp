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
    <div>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
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
            <Link to="/">
              <ListItemText primary="HeadLine" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <Link to="Business">
              <ListItemText secondary="Business" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SportsCricketIcon />
            </ListItemIcon>
            <Link to="Sports">
              <ListItemText secondary="Sports" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TheatersIcon />
            </ListItemIcon>
            <Link to="Entertainment">
              <ListItemText secondary="Entertainment" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WindPowerIcon />
            </ListItemIcon>
            <Link to="Technology">
              <ListItemText secondary="Technology" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
