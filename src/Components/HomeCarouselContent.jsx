import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function HomeCarouselContent(props) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="white"
          gutterBottom
        >
          {props.item.title}
        </Typography>
        <Typography variant="h6" align="center" color="white" paragraph>
          {props.item.description}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button href={props.item.ref} variant="contained" sx={{backgroundColor: '#00B9E1', borderRadius: '20px 20px 20px 20px'}}>{props.item.button}</Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default HomeCarouselContent;
