import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MembrosCarousel, MembrosGrid } from "./MembrosCarouselGrid";
import members from "./members.jsx";

function Membros() {
  const [carousel, setCarousel] = React.useState(true);

  return (
    <Box sx={{ width: "100%", pt: "50px" }}>
      <MembrosHeader />
      <MembrosCarouselGrid carousel={carousel} />
      <VerTodosButton items={{ carousel: carousel, setCarousel: setCarousel }} />
    </Box>
  );
}

function MembrosHeader() {
  return (
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
        textAlign: { xs: 'center', md: 'left' }
      }}
    >
      <Typography component="h1" variant="h3" color="inherit" gutterBottom>
        Membros
      </Typography>
      <Box sx={{ border: "1px solid #00B9E1", mb: "20px", width: { md: "20%", xs: '30%' }, ml: { xs: 'auto', md: 0 }, mr: { xs: 'auto', md: 0 } }} />
    </Box>
  );
}

function VerTodosButton(props) {
  const [verTodos, setVerTodos] = React.useState("Ver Todos");

  function VerTodosButton() {
    props.items.setCarousel(!props.items.carousel);

    if (verTodos == "Ver Todos") {
      setVerTodos("Ocultar");
    }
    else {
      setVerTodos("Ver Todos");
    }
  }

  return (
    <Stack sx={{ pt: 4, pb: 12 }} direction="row" spacing={2} justifyContent="center">
      <Button
        href="#Membros"
        onClick={VerTodosButton}
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
        {verTodos}
      </Button>
    </Stack>
  );
}

function MembrosCarouselGrid(props) {
  if (props.carousel) {
    return (
      <MembrosCarousel members={members} />
    );
  }
  else {
    return (
      <MembrosGrid members={members} />
    );
  }
}

export default Membros;
