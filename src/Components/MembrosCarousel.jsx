import React from "react";
import Carousel from "react-multi-carousel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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

function MembrosCarousel(props) {
  return (
    <Box pb="70px">
      <Carousel
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
        {props.members.map((member, i) => (
          <MembrosCarouselContent key={i} member={member} />
        ))}
      </Carousel>
    </Box>
  );
}

function MembrosCarouselContent(props) {
  async function getEmoji(unicode) {
    const url = await emoji.get(emoji.UnicodeToEmoji(unicode)).
      then(emoji => {
        return emoji.images[10].url;
      })
    return url;
  }

  return (
    <Box
      sx={{
        backgroundColor: "#3D3D3D",
        pt: "30px",
        textAlign: "center",
        marginLeft: "40px",
        marginRight: "40px",
        color: 'white'
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "10%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="avatar membro"
          src="src/Images/BackgroundImage.png"
          sx={{ margin: "auto", width: 100, height: 100 }}
        ></Avatar>
        <Avatar src="src/Images/BackgroundImage.png" sx={{ position: "absolute", bottom: -10, left: 30 }} />
      </Box>
      <CardContent>
        <Typography mt="30px" mb="20px" sx={{ fontFamily: 'Pluto Sans Cond', fontWeight: '100', fontStyle: 'italic' }}>
          {props.member.description}
        </Typography>
        <Typography variant="h5" component="h2" pb="20px" sx={{ fontFamily: 'Pluto Sans Cond', fontWeight: 'bold' }}>
          {props.member.name}
        </Typography>
        {props.member.groups.map((group, i) => (
          <Typography key={i} gutterBottom variant="h6" component="h4" textAlign="center" sx={{ fontFamily: 'Pluto Sans Cond', fontWeight: 'normal' }}>
            {group}
          </Typography>
        ))}

      </CardContent>
    </Box>
  );
}

export default MembrosCarousel;