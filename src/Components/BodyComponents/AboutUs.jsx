import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/About.jpg";
import { RenderSectionHeading, CardMedia } from "../common/commonComponent";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import ToysIcon from "@material-ui/icons/Toys";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: " Web Development",
      description: "The arrival of the latest technology has made it easy to miss out on esteemed opportunities available. It is worse when one does not have the expertise to tap on these changes.",
      icon: <DashboardIcon />,
    },
    {
      title: "Graphic Design",
      description: "Marketing involves connecting with customers to convince them about buying a product or subscribing to a service. ",
      icon: <ToysIcon />,
    },
    {
      title: "Mobile Apps",
      description: "We are responsible for planning, organizing and directing the completion of specific projects for an organization while ensuring these projects are on time, on budget and within scope.",
      icon: <PermDeviceInformationIcon />,
    },
    {
      title: "Marketing",
      description: " Social media like Facebook, Twitter, or Instagram.Business networking sites like LinkedIn  Promotional ads via emails.",
      icon: <AcUnitIcon />,
    },
  ];
  return (
    <Box className={classes.section} id='About'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt=' about us'
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderSectionHeading({
                smallText: "ABOUT us",
                heading: "Hello We are Ak-Techs",
                description:
                  "We indulge in inculcating and aligning a culture of learning, innovation and team work with the committed aspiration of our firm.",
              })}
              <br />
              {/* {CardMedia({
              label: "labae1",
              Desc: "Desc1",
              Icon: <AcUnitIcon />,
            })} */}
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      Desc: item.description,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
