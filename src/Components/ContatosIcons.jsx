import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function ContatosIcons() {
  return (
    <Box sx={{ width: {md: "30%", xs: '100%'}, paddingLeft: {md: '50px', xs: 0}, paddingTop: {md: 0, xs: '50px'}}}>
      <Box sx={{ display: "flex", justifyContent: "center"}}>
        <img src="src/Images/Logo.png" height={120} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "auto",
          width: "30%",
          color: "white",
        }}
      >
        <Button color="secondary">
          <InstagramIcon />
        </Button>
        <Button>
          <FacebookIcon />
        </Button>
        <Button>
          <TwitterIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default ContatosIcons;
