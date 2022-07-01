import React, { useState } from "react";
// import Carousel from "react-multi-carousel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import '../../Styles/Carousel.css';
// import "react-multi-carousel/lib/styles.css";
import items from "./carouselItems.jsx";

import Carousel from "react-simply-carousel"
import ReactSimplyCarousel from "react-simply-carousel";
import carouselStyles from "../../../public/Styles/carouselStyles.js";

/* const CustomRightArrow = ({ onClick, ...rest }) => {
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
        ":hover": { backgroundColor: 'rgb(220,220,220,0.1)' }
      }}
    >
      <img
        className="arrowImage"
        src="./src/Images/RightArrow.png"
        height="50px"
        style={{ backgroundColor: "transparent" }}
      />
    </Button>
  );
}; */

/* const CustomLeftArrow = ({ onClick, ...rest }) => {
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
        ":hover": { backgroundColor: 'rgb(220,220,220,0.1)' }
      }}
    >
      <img
        className="arrowImage"
        src="./src/Images/LeftArrow.png"
        height="50px"
        style={{ backgroundColor: "transparent" }}
      />
    </Button>
  );
}; */

const CustomRightArrow = () => {
  return (
    <img
      className="arrowImage"
      src="/Images/RightArrow.png"
      height="50px"
      style={{ backgroundColor: "transparent" }}
    />
  );
};

const CustomLeftArrow = () => {
  return (
    <img
      className="arrowImage"
      src="/Images/LeftArrow.png"
      height="50px"
      style={{ backgroundColor: "transparent" }}
    />
  );
};


function HomeCarousel() {
  const [hoverRight, setHoverRight] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  function handleForward() {
    console.log("Teste")
    setActiveSlide(activeSlide + 1);
  }

  return (
    <ReactSimplyCarousel
      containerProps={{
        style: {
          display: "flex",
          backgroundColor: "transparent",
          // width: "100%",
          margin: "auto",
          justifyContent: "space-around",
          userSelect: "text"
        }
      }
      }
      activeSlideIndex={activeSlide}
      onRequestChange={setActiveSlide}
      forwardBtnProps={{
        children: <CustomRightArrow />,
        onClick: () => handleForward,
        onMouseEnter: () => setHoverRight(true),
        onMouseLeave: () => setHoverRight(false),
        style: {
          ...carouselStyles.normal,
          ...(hoverRight ? carouselStyles.hover : null)
        }
      }}
      backwardBtnProps={{
        children: <CustomLeftArrow />,
        onMouseEnter: () => setHoverLeft(true),
        onMouseLeave: () => setHoverLeft(false),
        style: {
          ...carouselStyles.normal,
          ...(hoverLeft ? carouselStyles.hover : null)
        }
      }}
      dotsNav={{
        show: false
      }}
      itemsToShow={1}
      itemsToScroll={1}
      responsiveProps={[
        {
          maxWidth: 768,
          backwardBtnProps: {show: false},
          forwardBtnProps: {show: false},
        }
      ]}
      speed={400}
      infinite={true} 
      updateOnItemClick={true}
    >
      {items.map((item, i) => (
        <HomeCarouselContent key={i} item={item} />
      ))}
    </ReactSimplyCarousel>


    /* <Carousel
    additionalTransfrom={0}
    autoPlay={true}
    autoPlaySpeed={5000}
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
    </Carousel> */

  );
}



function HomeCarouselContent(props) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
        backgroundColor: "transparent",
        width: "80vw",
        minHeight: "500px",
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
        <Typography variant="h6" align="center" color="white" paragraph sx={{
          fontFamily: 'Pluto Sans Cond ExLight'
        }}>
          {props.item.description}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button href={props.item.ref} variant="contained" sx={{
            backgroundColor: '#00B9E1',
            borderRadius: '20px 20px 20px 20px'
          }}>{props.item.button}</Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default HomeCarousel;
