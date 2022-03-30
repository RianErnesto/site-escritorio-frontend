import React from "react";
import Grid from "@mui/material/Grid";
import GrupoLists from "./GrupoLists";

var groups = [
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

function GrupoListBox() {
  return (
    <Grid container spacing={10} sx={{ paddingBottom: "100px" }}>
      {groups.map((group, i) => (
        <GrupoLists key={i} item={group} />
      ))}
    </Grid>
  );
}

export default GrupoListBox;
