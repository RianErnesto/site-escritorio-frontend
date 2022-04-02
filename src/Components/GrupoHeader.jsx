import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function GruposHeader() {
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
      <Grid container display="flex" sx={{justifyContent: {sm: 'left', xs: 'center'}, textAlign: {xs: 'center', sm: 'left'}}}>
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
            <Box sx={{border: '1px solid #00B9E1', mb: '20px', width: '35%', ml: {xs: 'auto', sm: 0}, mr: {xs: 'auto', sm: 0}}}></Box>
            <Typography variant="h6" color="inherit" paragraph>
              Equipes de atuação para a divisão de projetos
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default GruposHeader;
