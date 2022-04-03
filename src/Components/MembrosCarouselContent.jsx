import React from "react";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

function MembrosCarouselContent(props) {
  return (
    <Box
      sx={{
        backgroundColor: "#3D3D3D",
        pt: "30px",
        textAlign: "center",
        marginLeft: "40px",
        marginRight: "40px",
        color: 'white'
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
          src="src/Images/BackgroundImage.png"
          sx={{ margin: "auto", width: 100, height: 100 }}
        ></Avatar>
        <Avatar src="src/Images/BackgroundImage.png" sx={{ position: "absolute", bottom: -10, left: 30 }}>
        </Avatar>
      </Box>
      <CardContent>
        <Typography mt="30px" mb="20px">
          {props.member.description}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.member.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="h4">
          {props.member.group}
        </Typography>
      </CardContent>
    </Box>
  );
}

export default MembrosCarouselContent;
