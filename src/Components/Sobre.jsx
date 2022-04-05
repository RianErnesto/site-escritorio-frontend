import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';


const imagesAboutUs = ['src/BackgroundImage.png'];
const moreParagraphs = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia sapien porttitor nibh lacinia varius. Vestibulum ante ipsum primis in.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ipsum vitae ipsum vulputate interdum. Quisque hendrerit euismod arcu, non lobortis urna placerat rhoncus. Mauris.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit varius ex nec cursus. Morbi sed justo ac nulla iaculis blandit. Ut egestas eu massa non congue. Quisque nulla ipsum, venenatis eget mollis ut, lacinia at est. Quisque.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh lectus, maximus nec suscipit quis, imperdiet non neque. Curabitur venenatis, est ut varius dictum, dui ligula gravida enim, id tempor enim tellus ac purus. Phasellus eget urna dolor. Nullam ultrices tortor et ante lacinia, nec tempor dui volutpat. Aliquam tristique justo sit."
];

let mainParagraphs = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel posuere sapien. Integer et pellentesque mi, nec scelerisque tortor. Cras ac lectus justo. Cras vel nisl vel velit scelerisque pretium.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum erat arcu, at vestibulum lacus gravida at.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia sapien porttitor nibh lacinia varius. Vestibulum ante ipsum primis in."
]

function Sobre() {
  const [paragraphs, setParagraphs] = React.useState(mainParagraphs);

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
        {paragraphs.map((text, i) => (
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
        <SaibaMaisButton paragraphs={paragraphs} setParagraphs={setParagraphs} />
      </CardContent>
      <CardMedia
        component="img"
        sx={{
          pt: { xs: '50px', md: 0 },
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

function SaibaMaisButton(props) {
  const [saibaMais, setSaibaMais] = React.useState("Saiba Mais...");

  function saibaMaisClick() {
    if (saibaMais == "Saiba Mais...") {
      props.setParagraphs(props.paragraphs.concat(moreParagraphs))
      setSaibaMais("Ocultar");
    }
    else {
      props.setParagraphs(mainParagraphs);
      console.log(props.paragraphs);
      setSaibaMais("Saiba Mais...");
    }
  }

  return (
    <Stack
      sx={{ pt: 4 }}
      direction="row"
      spacing={2}
      justifyContent="center"
    >
      <Button variant="contained" onClick={() => saibaMaisClick()} sx={{
        backgroundColor: '#00B9E1',
        borderRadius: '20px 20px 20px 20px',
        fontFamily: 'Pluto Sans Cond'
      }}>{saibaMais}</Button>
    </Stack>
  );
}

export default Sobre;