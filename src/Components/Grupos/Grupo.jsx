import React from "react";
import Grid from "@mui/material/Grid";
import GrupoLists from "./GrupoLists";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function Grupo() {
  const groups = [
    {
      title: "Programação",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus egestas aliquet. Nullam dignissim tincidunt nisl, sed eleifend magna elementum.",
      url: "/src/Images/ProgramacaoIcon.png",
    },
    {
      title: "Eletrônica",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac fringilla dui. Maecenas luctus fringilla magna, eu aliquet massa condimentum vel.",
      url: "/src/Images/EletronicaIcon.png",
    },
    {
      title: "Robótica",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices eros dictum sem dapibus, vel.",
      url: "/src/Images/RoboticaIcon.png",
    },
  ];

  return (
    <div
      style={{ backgroundColor: "transparent", width: "80%", margin: "auto" }}
    >
      <GrupoHeader />
      <Grid container spacing={10} sx={{ paddingBottom: "100px" }}>
        {groups.map((group, i) => (
          <GrupoLists key={i} item={group} />
        ))}
      </Grid>
    </div>
  );
}

function GrupoHeader() {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "transparent",
        color: "#fff",
        boxShadow: 0
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "transparent",
        }}
      />
      <Grid container display="flex" sx={{ justifyContent: { sm: 'left', xs: 'center' }, textAlign: { xs: 'center', sm: 'left' } }}>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 3,
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Grupos
            </Typography>
            <Box sx={{ border: '1px solid #00B9E1', mb: '20px', width: '35%', ml: { xs: 'auto', sm: 0 }, mr: { xs: 'auto', sm: 0 } }}></Box>
            <Typography variant="h6" color="inherit" paragraph sx={{fontFamily: 'Pluto Sans', fontWeight: '100'}}>
              Equipes de atuação para a divisão de projetos
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Grupo;
