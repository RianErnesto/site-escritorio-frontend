import React from "react";
import Carousel from "react-material-ui-carousel";
import HomeCarouselContent from "./HomeCarouselContent.jsx";

function HomeCarousel() {
  var items = [
    {
      title: "Bem vindo ao Escritório de Engenharia",
      description:
        "Grupo de engenharia voltado para o desenvolvimento de projetos do Cesupa",
      button: "Saber Mais...",
    },
    {
      title: "Sobre nós",
      description:
        "Nós somos o Escritório de Engenharia, fazemos projetos e criamos discussões relacionadas a área da tecnologia aliada a engenharia",
      button: "Veja Mais...",
    },
  ];

  return (
    <Carousel
      interval={8000}
      navButtonsAlwaysVisible="true"
      navButtonsProps={{
        style: {
          backgroundColor: "#2B2B2B",
          color: "white",
        },
      }}
      indicators={false}
      sx={{minHeight: '500px'}}
    >
      {items.map((item, i) => (
        <HomeCarouselContent key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default HomeCarousel;
