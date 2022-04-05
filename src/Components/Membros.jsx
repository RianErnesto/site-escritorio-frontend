import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MembrosCarousel from "./MembrosCarousel";

function Membros() {

  var members = [
    {
      name: "Rian Ernesto",
      photo: "src/Images/BackgroundImage.png",
      emojiUnicode: "1F602",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum.",
      groups: ["Programação", "Eletrônica", 'Robótica'],
    },
    {
      name: "Matheus Dourado",
      photo: "src/Images/BackgroundImage.png",
      emojiUnicode: "1F620",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc.",
      groups: ["Eletrônica", "Robótica"]
    },
    {
      name: "Marco Antônio",
      photo: "src/Images/BackgroundImage.png",
      emojiUnicode: "1F605",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta ex.",
      groups: ["Programação", "Eletrônica", "Robótica"],
    },
    {
      name: "Gabriel Marcelino",
      photo: "src/Images/BackgroundImage.png",
      emojiUnicode: "1F61E",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis.",
      groups: ["Eletrônica"],
    },
    {
      name: "Arthur Bessa",
      photo: "src/Images/BackgroundImage.png",
      emojiUnicode: "1F638",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor tortor, malesuada.",
      groups: ["Programação", "Robótica"],
    },
    {
      name: "Renan Andrew",
      photo: "src/Images/BackgroundImage.png",
      emojiUnicode: "1F63C",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer.",
      groups: ["Programação"],
    },
  ];

  return (
    <Box sx={{ width: "100%", pt: "50px" }}>
      <MembrosHeader />
      <MembrosCarousel members={members}/>
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
            fontFamily: 'Pluto Sans Cond'
          }}
        >
          Ver Todos
        </Button>
      </Stack>
    </Box>
  );
}

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

export default Membros;
