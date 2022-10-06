import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyles";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import { Link } from "react-scroll";
import { Theme } from "../Theme";
import Marquee from "react-fast-marquee";
import iamg from  "../../images/AK-Tehcnologies-Pvt-Ltd-Logo.png"
import './nav.css'

export default function Navbar({ navlinks, handleDrawerToogler }) {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.navbar}>
      <Toolbar
        className={classes.ToolBar}
        style={{ backgroundColor:'black' }}>
       
          <img className="ima" src ={iamg} alt="imag"/>
          <Marquee className="mar" speed="20" style={{width:"20%"}}  gradient={false}>
 Asprion khuze{""}
</Marquee>
        {/* navlinks  */}
        <Box component={Hidden} xsDown>
          <Box>
            {navlinks.map((item, i) => (
              <Button
                key={i}
               
                className={classes.navlinks} 
                to={`${item.Id}`}
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                component={Link}
                color='inherit'>
                {item.label}
            </Button>
            ))}
          </Box>
        </Box>
        
        <Box component={Hidden} smUp>
          <IconButton color='inherit' onClick={handleDrawerToogler}>
            <MenuOpenRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
