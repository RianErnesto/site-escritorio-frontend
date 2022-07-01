import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import ProjetosBackground from "/Images/ProjetosBackground.png";

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
        backgroundImage: `url(${ProjetosBackground})`,
        pt: "60px",
        pb: "60px",
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          alt="Background Image"
        />
      }
      <Box
        sx={{
          flexDirection: { xs: "column", md: "row" },
          display: 'flex',
          justifyContent: "center",
          alignItems: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom component="div">
          O que nós fazemos?
        </Typography>
        <Box sx={{height: {md: '40px', xs: '0'}, width: {md: '0', xs: '80px'}, marginLeft: '20px', marginRight: '20px', border: '1px solid white'}}></Box>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          textAlign="center"
          sx={{ width: { md:"40%", xs: '90%' }, paddingTop: {md: '0', xs: '20px'}, fontFamily: 'Pluto Sans Cond', fontWeight: '100'}}
        >
          Pesquisas, protótipos e desenvolvimento de projetos voltados as áreas
          das engenharias
        </Typography>
        <Stack spacing={2} pt={1} ml={{md: '20px', xs: '0'}}>
          <Button variant="contained" sx={{backgroundColor: '#00B9E1', borderRadius: '20px 20px 20px 20px'}}>Ver Projetos</Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Projetos;
