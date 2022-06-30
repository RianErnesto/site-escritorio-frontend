import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { Typography } from "@mui/material";
import { Icon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { grey } from "@mui/material/colors";
import pages from "../Home/homePages.jsx";
import contato from "./informacoesContato.jsx";

function ContatosItems() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        width: { md: "50%", xs: '90%' },
        margin: "auto",
        fontFamily: 'Pluto Sans',
        fontWeight: "normal",
        fontSize: "14px"
      }}
    >
      <Box>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{ display: { md: "block", xs: "none" } }}
        >
          Navegação
        </Typography>
        <Box
          sx={{
            border: "1px solid white",
            width: "100%",
            display: { md: "block", xs: "none" },
          }}
        />
        <Navegacao />
      </Box>
      <Box>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{ display: { md: "block", xs: "none" } }}
        >
          Informações de Contato
        </Typography>
        <Box
          sx={{
            border: "1px solid white",
            width: "100%",
            display: { md: "block", xs: "none" },
          }}
        />
        <InformacoesContato />
      </Box>
    </Box>
  );
}

function Navegacao() {
  return (
    <List>
      {pages.map((item, i) => (
        <ListItem key={i} sx={{ paddingLeft: 0 }}>
          <ListItemIcon>
            <ArrowForwardIosIcon color="primary" sx={{ color: grey[50] }} />
          </ListItemIcon>
          <Link
            underline="hover"
            key="1"
            color="white"
            href={`#${item}`}
            style={{
              filter: "drop-shadow(0 4px 10px black)",
            }}
          >
            {item}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

function InformacoesContato() {
  return (
    <List>
      {contato.map((item, i) => (
        <ListItem key={i} sx={{ paddingLeft: 0 }}>
          <ListItemIcon>
            <Icon sx={{ color: grey[50] }}>{item.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={item.content} />
        </ListItem>
      ))}
    </List>
  );
}
export default ContatosItems;