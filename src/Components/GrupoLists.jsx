import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function GrupoLists(props) {
  return (
    <Grid item xs={12} md={6} sx={{ backgroundColor: "transparent" }}>
      <CardActionArea
        component="a"
        sx={{ ":hover": { backgroundColor: "transparent", cursor: "inherit" } }}
      >
        <Card
          sx={{
            display: "flex",
            backgroundColor: "transparent",
            boxShadow: "none",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 160,
              display: { xs: "block", sm: "block" },
              margin: { xs: "auto" },
            }}
            image={props.item.url}
            alt={props.item.title}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography
              component="h2"
              variant="h5"
              color="white"
              textAlign="center"
            >
              {props.item.title}
            </Typography>
            <Typography
              variant="subtitle2"
              paragraph
              color="white"
              textAlign="center"
            >
              {props.item.description}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid #00B9E1",
                  color: "#00B9E1",
                  ":hover": {
                    backgroundColor: "#1A1A1A",
                    color: "white",
                    border: 0,
                    boxShadow: "2px 3px 0px #222",
                  },
                }}
              >
                Leia Mais
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default GrupoLists;
