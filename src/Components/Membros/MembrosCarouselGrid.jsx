import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import "../../Styles/Carousel.css";

import Carousel from "react-simply-carousel"
import ReactSimplyCarousel from "react-simply-carousel";
// import carouselStyles from "../../../public/Styles/carouselStyles.js";
import { Slide } from "@mui/material";
import { useEffect } from "react";

/* const CustomRightArrow = () => {
  return (
    <img
      className="arrowImage"
      src="/Images/RightArrow.png"
      height="50px"
      style={{ backgroundColor: "transparent" }}
    />
  );
};

const CustomLeftArrow = () => {
  return (
    <img
      className="arrowImage"
      src="/Images/LeftArrow.png"
      height="50px"
      style={{ backgroundColor: "transparent" }}
    />
  );
}; */

function MembrosCarouselContent(props) {
  return (
    <Box
    className="card"
      sx={{
        backgroundColor: "#3D3D3D",
        pt: "30px",
        textAlign: "center",
        margin: "0 40px",
        width: { md: "25vw", sm: "35vw", xs: "70vw" },
        color: "white",
        height: { md: "100%" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "10%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="avatar membro"
          src={!props.member.photo ? "/Images/Letras/" + props.member.name[0] + ".png" : props.member.photo}
          sx={{ margin: "auto", width: 100, height: 100 }}
        ></Avatar>
        {props.member.emoji ? <AvatarEmoji member={props.member} /> : null}
      </Box>
      <CardContent>
        <Typography
          mt="30px"
          mb="20px"
          sx={{
            fontFamily: "Pluto Sans Cond",
            fontWeight: "100",
            fontStyle: "italic",
          }}
        >
          {props.member.description}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          pb="20px"
          sx={{ fontFamily: "Pluto Sans Cond", fontWeight: "bold" }}
        >
          {props.member.name}
        </Typography>
        {props.member.groups.map((group, i) => (
          <Typography
            key={i}
            gutterBottom
            variant="h6"
            component="h4"
            textAlign="center"
            sx={{ fontFamily: "Pluto Sans Cond", fontWeight: "normal" }}
          >
            {group}
          </Typography>
        ))}
      </CardContent>
    </Box>
  );
}

function MembrosGrid(props) {
  return (
    <Container sx={{ width: "100%", margin: "auto" }}>
      <Grid container sx={{ margin: "auto", justifyContent: "center", width: "100%" }}>
        {props.members.map((member, i) => (
          <MembrosGridContent member={member} key={i} />
        ))}
      </Grid>
    </Container>
  );
}

function MembrosGridContent(props) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      sx={{ margin: "40px", display: "flex", alignItems: "center"}}
    >
      <Box
        sx={{
          backgroundColor: "#3D3D3D",
          pt: "30px",
          textAlign: "center",
          color: "white",
          width: "100%",
          minHeight: "90%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "10%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="avatar membro"
            src={!props.member.photo ? "/Images/Letras/" + props.member.name[0] + ".png" : props.member.photo}
            sx={{ margin: "auto", width: 100, height: 100 }}
          ></Avatar>
          {props.member.emoji ? <Avatar
            src={props.member.emoji}
            sx={{ position: "absolute", bottom: -10, left: 30 }}
          /> : null}

        </Box>
        <CardContent sx={{overflowY: "hidden"}}>
          <Typography
            mt="30px"
            mb="20px"
            sx={{
              fontFamily: "Pluto Sans Cond",
              fontWeight: "100",
              fontStyle: "italic",
            }}
          >
            {props.member.description}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            pb="20px"
            sx={{ fontFamily: "Pluto Sans Cond", fontWeight: "bold" }}
          >
            {props.member.name}
          </Typography>
          {props.member.groups.map((group, i) => (
            <Typography
              key={i}
              gutterBottom
              variant="h6"
              component="h4"
              textAlign="center"
              sx={{ fontFamily: "Pluto Sans Cond", fontWeight: "normal" }}
            >
              {group}
            </Typography>
          ))}
        </CardContent>
      </Box>
    </Grid>
  );
}

function AvatarEmoji(props) {
  return (
    <Avatar
      src={props.member.emoji}
      sx={{ position: "absolute", bottom: -10, left: 30 }}
    />
  );
}

export { MembrosGrid, MembrosCarouselContent };
