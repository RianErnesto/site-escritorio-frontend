import React from "react";
import HomeCarouselContent from "./HomeCarouselContent.jsx";
import Carousel from "react-multi-carousel";
import Button from "@mui/material/Button";
import '../Styles/Carousel.css';
import "react-multi-carousel/lib/styles.css";

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <Button
      onClick={() => onClick()}
      sx={{
        backgroundColor: "transparent",
        position: "absolute",
        right: "10%",
        borderRadius: "100%",
        border: "none",
        ":hover":{backgroundColor: 'rgb(220,220,220,0.1)'}
      }}
    >
      <img
        className="arrowImage"
        src="src/Images/RightArrow.png"
        height="50px"
        style={{ backgroundColor: "transparent" }}
      />
    </Button>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <Button
      onClick={() => onClick()}
      sx={{
        backgroundColor: "transparent",
        position: "absolute",
        left: "10%",
        borderRadius: "100%",
        border: "none",
        ":hover":{backgroundColor: 'rgb(220,220,220,0.1)'}
      }}
    >
      <img
        className="arrowImage"
        src="src/Images/LeftArrow.png"
        height="50px"
        style={{ backgroundColor: "transparent" }}
      />
    </Button>
  );
};

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
      additionalTransfrom={0}
      autoPlaySpeed={8000}
      centerMode={false}
      containerClass="container"
      className="carousel-container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      removeArrowOnDeviceType={["mobile", "tablet"]}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable={true}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {items.map((item, i) => (
        <HomeCarouselContent key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default HomeCarousel;
