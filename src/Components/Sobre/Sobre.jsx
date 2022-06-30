import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import { mainParagraphs, mainImagesAboutUs, moreParagraphs, moreImagesAboutUs } from './sobreContent.jsx';

function Sobre() {
  const [paragraphs, setParagraphs] = React.useState(mainParagraphs);
  const [images, setImages] = React.useState(mainImagesAboutUs);

  return (

    <Box display="flex" sx={{ justifyContent: { md: 'space-around', xs: 'center' }, pt: '70px', pb: '50px', width: { md: '80%', xs: '100%' }, margin: 'auto', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
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
        <SobreParagraphs paragraphs={paragraphs} />
        <SaibaMaisButton items={{ paragraphs: paragraphs, setParagraphs: setParagraphs, images: images, setImages: setImages }} />
      </CardContent>
      <SobreImages images={images} />
    </Box>
  );
}

function SaibaMaisButton(props) {
  const [saibaMais, setSaibaMais] = React.useState("Saiba Mais...");

  function saibaMaisClick() {
    if (saibaMais == "Saiba Mais...") {
      props.items.setParagraphs(props.items.paragraphs.concat(moreParagraphs));
      props.items.setImages(props.items.images.concat(moreImagesAboutUs));
      setSaibaMais("Ocultar");
    }
    else {

      props.items.setParagraphs(mainParagraphs);
      props.items.setImages(mainImagesAboutUs);
      console.log(props.items.paragraphs);
      setSaibaMais("Saiba Mais...");
    }
  }

  return (
    <Stack
      sx={{ pt: 4, marginTop: 'auto', marginBottom: 'auto', height: 'auto' }}
      direction="row"
      spacing={2}
      justifyContent="center"
    >
      <Button href='#Sobre' variant="contained" onClick={() => saibaMaisClick()} sx={{
        backgroundColor: '#00B9E1',
        borderRadius: '20px 20px 20px 20px',
        fontFamily: 'Pluto Sans Cond'
      }}>{saibaMais}</Button>
    </Stack>
  );
}

function SobreImages(props) {
  return (
    <Box sx={{
      width: { md: "40%", xs: '100%' },
      marginTop: 'auto',
      marginBottom: 'auto',
      display: 'flex-column'
    }}>
      {props.images.map((image, i) => (
        <CardMedia
          key={i}
          component="img"
          sx={{
            pt: { xs: '50px', md: 0 },
            pb: '30px',
            width: '100%',
            height: '300px'
          }}
          image={image}
          alt="Background image"
        />
      ))}
    </Box>
  );
}

function SobreParagraphs(props) {
  return (
    <Box>
      {props.paragraphs.map((text, i) => (
        <Typography
          key={i}
          variant="subtitle2"
          paragraph
          color="white"
          textAlign="left"
          sx={{ fontFamily: 'Pluto Sans Cond', fontWeight: '300' }}
        >
          {text}
        </Typography>
      ))}
    </Box>
  );
}

export default Sobre;