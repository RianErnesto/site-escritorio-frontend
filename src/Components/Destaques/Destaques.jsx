import React from "react";
import Box from "@mui/material/Box";

function Destaques() {

  const destaquesImages = ["/Images/LogoEscritorio.png", "/Images/LogoCesupa.png", "/Images/LogoArgo.png"];

  return (
    <Box
      bgcolor="#3D3D3D"
      pt="40px"
      pb="40px"
      width="100%"
    >
      <Box className="boxImages" sx={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-around", width: "80%", margin: 'auto' }}>
          {destaquesImages.map((image, i) => (
            <img src={image} key={i} height={100} />
          ))}
      </Box>
    </Box>
  );
}

export default Destaques;
