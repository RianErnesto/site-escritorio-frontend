import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MembrosHeader from "./MembrosHeader";
import MembrosCarousel from "./MembrosCarousel";

function Membros() {
  return (
    <Box sx={{ width: "100%", pt: "50px" }}>
      <MembrosHeader />
      <MembrosCarousel />
      <Stack sx={{ pt: 4, pb: 12 }} direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "transparent",
            border: "1px solid #00B9E1",
            color: "#00B9E1",
            ":hover": {
              backgroundColor: "#1A1A1A",
              color: "white",
              border: "1px solid black",
              boxShadow: "2px 3px 0px #222",
            },
            borderRadius: "20px 20px 20px 20px",
          }}
        >
          Ver Todos
        </Button>
      </Stack>
    </Box>
  );
}

export default Membros;
