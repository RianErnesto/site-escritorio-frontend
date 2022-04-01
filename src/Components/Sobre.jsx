import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';

function Sobre() {

  return (

    <Box display="flex" sx={{ justifyContent: { md: 'space-around', xs: 'center' }, pt: '70px', pb: '50px', width: { md: '80%', xs: '100%' }, margin: 'auto', flexDirection: { xs: 'column', md: 'row' } }}>
      <CardContent sx={{ width: { md: '30%', xs: '80%' }, margin: { xs: 'auto', md: 0 } }}>
        <Typography
          component="h2"
          variant="h5"
          color="white"
          textAlign={{ md: "left", xs: 'center' }}
          sx={{ ml: { md: '20px', xs: 0 } }}
        >
          Sobre Nós
        </Typography>
        <Box width='100%'>
          <Box sx={{ border: '1px solid #00B9E1', mb: '20px', mt: '10px', width: { md: '20%', xs: '10%' }, mr: { md: '20px', xs: 'auto' }, ml: { md: '20px', xs: 'auto' } }}></Box>
        </Box>
        <Typography
          variant="subtitle2"
          paragraph
          color="white"
          textAlign="left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel posuere sapien. Integer et pellentesque mi, nec scelerisque tortor. Cras ac lectus justo. Cras vel nisl vel velit scelerisque pretium.
        </Typography>
        <Typography
          variant="subtitle2"
          paragraph
          color="white"
          textAlign="left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum erat arcu, at vestibulum lacus gravida at.
        </Typography>
        <Typography
          variant="subtitle2"
          paragraph
          color="white"
          textAlign="left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia sapien porttitor nibh lacinia varius. Vestibulum ante ipsum primis in.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" sx={{backgroundColor: '#00B9E1', borderRadius: '20px 20px 20px 20px'}}>Saiba Mais...</Button>
        </Stack>
      </CardContent>
      <CardMedia
        component="img"
        sx={{
          pt: {xs: '50px', md: 0},
          width: { md: '40%', xs: '100%' },
          height: '300px',
          marginTop: 'auto',
          marginBottom: 'auto'
        }}
        image="src/Images/BackgroundImage.png"
        alt="Background image"
      />
    </Box>
  );
}

export default Sobre;