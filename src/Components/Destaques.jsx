import React from "react";
import Box from "@mui/material/Box";
import "../Styles/DestaquesBoxImages.css";

function Destaques() {
  return (
    <Box
      bgcolor="#3D3D3D"
      pt="20px"
      pb="20px"
      width="100%"
    >
      <Box className="boxImages" sx={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-around", width: "80%", margin: 'auto' }}>
          <img src="src/Images/Logo.png" height={120}></img>
          <img src="src/Images/Logo.png" height={120}></img>
          <img src="src/Images/Logo.png" height={120}></img>
      </Box>
    </Box>
  );
}

export default Destaques;
