import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import Navbar from "./Navbar";
import { Decorator } from "../common/commonComponent";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import DrawerComponent from "./DrawerComponent";
import Typed from "react-typed";
import "./hc.css"

export default function HeadersComponent() {
  const classes = useStyles();

  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const navlinks = [
    { label: "About", Id: "About" },
    { label: "Portfolio", Id: "Portfolio" },
    { label: "info@aktechs.co.in", Id: "info@aktechs.co.in" },
    { label: "info@aktechnologie.com", Id: "info@aktechnologie.com" },
    

    
  ];

  return (
    <Box className={classes.HeardeWraper} id='Headder'>
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />

      <Box className={classes.Headercontaier}>
      <h1 className="yeda"> Crossing the stumbling blocks with Resilience</h1>
        <Typography varinat='h3' component='h4' className={classes.headerTitle} style={{width:"50%",  fontWeight:'bolder'}}>
        Crossing the stumbling blocks with Resilience    <span style={{ paddingRight: "5px" }}></span>
       
     
          {/* <Typed
            strings={[" Webdeveloper,", " UI/UX Designer,", " Digital Expert,"]}
            typeSpeed={30}
            backSpeed={50}
            loop
          /> */}
        </Typography>
      
<a href="/" alt="button"className="learn" style={{textDecoration:'none', color:'white',  marginLeft:'2rem', width:"100%"} }>


{Decorator({
          label: "Learn More",
          withIcon: true,
          color:'white',
          marginTop: '55px'
         
        })}
</a>
        
      </Box>
    </Box>
  );
}
