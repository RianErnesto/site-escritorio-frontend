import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function MembrosHeader() {
    return(
        <Box
        sx={{
          position: "relative",
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 3,
          pr: { md: 0 },
          color: "white",
          width: '80%',
          margin: 'auto',
          display: 'flex-column',
          textAlign: {xs: 'center', md: 'left'}
        }}
      >
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          Membros
        </Typography>
        <Box sx={{ border: "1px solid #00B9E1", mb: "20px", width: {md: "20%", xs: '30%'}, ml: {xs: 'auto', md: 0}, mr: {xs: 'auto', md: 0}}} />
      </Box>
    );
}

export default MembrosHeader;