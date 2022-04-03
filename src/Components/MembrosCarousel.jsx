import React from "react";
import Carousel from "react-multi-carousel";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import MembrosCarouselContent from "./MembrosCarouselContent";
import "../Styles/Carousel.css";
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
        right: "-10px",
        borderRadius: "100%",
        border: "none",
        ":hover": { backgroundColor: "rgb(220,220,220,0.1)" },
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
        left: "-10px",
        zIndex: "10",
        borderRadius: "100%",
        border: "none",
        ":hover": { backgroundColor: "rgb(220,220,220,0.1)" },
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

function MembrosCarousel() {
  var members = [
    {
      name: "Teste1",
      photo: "src/Images/BackgroundImage.png",
      emoji: "",
      description:
        "Grupo de engenharia voltado para o desenvolvimento de projetos do Cesupa",
      group: "GroupTeste",
    },
    {
      name: "Teste2",
      photo: "src/Images/BackgroundImage.png",
      emoji: "",
      description:
        "Grupo de engenharia voltado para o desenvolvimento de projetos do Cesupa",
      group: "GroupTeste",
    },
    {
      name: "Teste3",
      photo: "src/Images/BackgroundImage.png",
      emoji: "",
      description:
        "Grupo de engenharia voltado para o desenvolvimento de projetos do Cesupa",
      group: "GroupTeste",
    },
    {
      name: "Teste4",
      photo: "src/Images/BackgroundImage.png",
      emoji: "",
      description:
        "Grupo de engenharia voltado para o desenvolvimento de projetos do Cesupa",
      group: "GroupTeste",
    },
    {
      name: "Teste5",
      photo: "src/Images/BackgroundImage.png",
      emoji: "",
      description:
        "Grupo de engenharia voltado para o desenvolvimento de projetos do Cesupa",
      group: "GroupTeste",
    },
    {
      name: "Teste6",
      photo: "src/Images/BackgroundImage.png",
      emoji: "",
      description:
        "Grupo de engenharia voltado para o desenvolvimento de projetos do Cesupa",
      group: "GroupTeste",
    },
  ];

  return (
    <Box pb="70px">
      {/* <Button
        sx={{ backgroundColor: "red" }}
        onClick={() => {
          const nextSlide = this.Carousel.state.currentSlide + 1;
        }}
      ></Button> */}
      <Carousel
        ref={(el) => (
            // this.Carousel = el
            console.log(el)
        )}
        transitionDuration={1000}
        additionalTransfrom={0}
        autoPlaySpeed={8000}
        centerMode={false}
        className="carouselMembros"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 700,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 700,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {members.map((member, i) => (
          <MembrosCarouselContent key={i} member={member} />
        ))}
      </Carousel>
    </Box>
  );
}
export default MembrosCarousel;
