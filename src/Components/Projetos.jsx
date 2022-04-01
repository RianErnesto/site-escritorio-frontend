import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Breadcrumbs } from "@mui/material";
import { Stack } from "@mui/material";

function Projetos() {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(src/Images/BackgroundImage.png)`,
        pt: "60px",
        pb: "60px",
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src="src/Images/BackgroundImage.png"
          alt="Background Image"
        />
      }
      <Box
        sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
      >
        <Stack spacing={2}>
          <Breadcrumbs separator="|" aria-label="breadcrumb" color="white">
            <Typography variant="h4" gutterBottom component="div">
              O que nós fazemos?
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Pesquisas, protótipos e desenvolvimento de projetos voltados as
              áreas das engenharias
            </Typography>
          </Breadcrumbs>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Projetos;
