import React, {useState} from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Carousel from "react-multi-carousel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../../Styles/Carousel.css";
// import "react-multi-carousel/lib/styles.css";

import Carousel from "react-simply-carousel"
import ReactSimplyCarousel from "react-simply-carousel";
import carouselStyles from "../../../public/Styles/carouselStyles.js";

// const CustomRightArrow = ({ onClick, ...rest }) => {
//   const {
//     onMove,
//     carouselState: { currentSlide, deviceType },
//   } = rest;
//   return (
//     <Button
//       onClick={() => onClick()}
//       sx={{
//         backgroundColor: "transparent",
//         position: "absolute",
//         right: "-10px",
//         borderRadius: "100%",
//         border: "none",
//         ":hover": { backgroundColor: "rgb(220,220,220,0.1)" },
//       }}
//     >
//       <img
//         className="arrowImage"
//         src="./src/Images/RightArrow.png"
//         height="50px"
//         style={{ backgroundColor: "transparent" }}
//       />
//     </Button>
//   );
// };

// const CustomLeftArrow = ({ onClick, ...rest }) => {
//   const {
//     onMove,
//     carouselState: { currentSlide, deviceType },
//   } = rest;
//   return (
//     <Button
//       onClick={() => onClick()}
//       sx={{
//         backgroundColor: "transparent",
//         position: "absolute",
//         left: "-10px",
//         zIndex: "10",
//         borderRadius: "100%",
//         border: "none",
//         ":hover": { backgroundColor: "rgb(220,220,220,0.1)" },
//       }}
//     >
//       <img
//         className="arrowImage"
//         src="./src/Images/LeftArrow.png"
//         height="50px"
//         style={{ backgroundColor: "transparent" }}
//       />
//     </Button>
//   );
// };


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

function MembrosCarousel(props) {
  const [hoverRight, setHoverRight] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Box pb="70px">
      <ReactSimplyCarousel
      containerProps={{
        style: {
          display: "flex",
          backgroundColor: "transparent",
          width: "100%",
          margin: "auto",
          justifyContent: "space-around",
          userSelect: "text"
        }
      }
      }
      activeSlideIndex={activeSlide}
      onRequestChange={setActiveSlide}
      forwardBtnProps={{
        show: false,
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
        show: false,
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
      itemsToShow={3}
      // itemsToScroll={3}
      responsiveProps={[
        {
          maxWidth: 768,
          backwardBtnProps: {show: false},
          forwardBtnProps: {show: false},
        }
      ]}
      speed={3000}
      autoplay={true}
      infinite={true} 
      updateOnItemClick={false}
    >
      {props.members.map((member, i) => (
          <MembrosCarouselContent key={i} member={member} />
        ))}
    </ReactSimplyCarousel>



      {/* <Carousel
        transitionDuration={1000}
        additionalTransfrom={0}
        autoPlay={true}
        autoPlaySpeed={5000}
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
      </Carousel> */}
    </Box>
  );
}

function MembrosCarouselContent(props) {
  return (
    <Box
      sx={{
        backgroundColor: "#3D3D3D",
        pt: "30px",
        textAlign: "center",
        marginLeft: "40px",
        marginRight: "40px",
        // minWidth: "20%",
        width: {md: "25vw", sm: "35vw", xs: "70vw"},
        color: "white",
        // alignSelf: 'center'
        height: {md: "100%"},
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
          src={!props.member.photo ? "/Images/Letras/" + props.member.name[0] + ".png" : props.member.photo}
          sx={{ margin: "auto", width: 100, height: 100 }}
        ></Avatar>
        {props.member.emoji ? <AvatarEmoji member={props.member} /> : null}
      </Box>
      <CardContent>
        <Typography
          mt="30px"
          mb="20px"
          sx={{
            fontFamily: "Pluto Sans Cond",
            fontWeight: "100",
            fontStyle: "italic",
          }}
        >
          {props.member.description}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          pb="20px"
          sx={{ fontFamily: "Pluto Sans Cond", fontWeight: "bold" }}
        >
          {props.member.name}
        </Typography>
        {props.member.groups.map((group, i) => (
          <Typography
            key={i}
            gutterBottom
            variant="h6"
            component="h4"
            textAlign="center"
            sx={{ fontFamily: "Pluto Sans Cond", fontWeight: "normal" }}
          >
            {group}
          </Typography>
        ))}
      </CardContent>
    </Box>
  );
}

function MembrosGrid(props) {
  return (
    <Container sx={{ width: "100%", margin: "auto" }}>
      <Grid container sx={{ margin: "auto", justifyContent: "center", width: "100%" }}>
        {props.members.map((member, i) => (
          <MembrosGridContent member={member} key={i} />
        ))}
      </Grid>
    </Container>
  );
}

function MembrosGridContent(props) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      sx={{ margin: "40px", display: "flex", alignItems: "center"}}
    >
      <Box
        sx={{
          backgroundColor: "#3D3D3D",
          pt: "30px",
          textAlign: "center",
          color: "white",
          width: "100%",
          height: "90%",
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
            src={!props.member.photo ? "/Images/Letras/" + props.member.name[0] + ".png" : props.member.photo}
            sx={{ margin: "auto", width: 100, height: 100 }}
          ></Avatar>
          {props.member.emoji ? <Avatar
            src={props.member.emoji}
            sx={{ position: "absolute", bottom: -10, left: 30 }}
          /> : null}
          
        </Box>
        <CardContent>
          <Typography
            mt="30px"
            mb="20px"
            sx={{
              fontFamily: "Pluto Sans Cond",
              fontWeight: "100",
              fontStyle: "italic",
            }}
          >
            {props.member.description}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            pb="20px"
            sx={{ fontFamily: "Pluto Sans Cond", fontWeight: "bold" }}
          >
            {props.member.name}
          </Typography>
          {props.member.groups.map((group, i) => (
            <Typography
              key={i}
              gutterBottom
              variant="h6"
              component="h4"
              textAlign="center"
              sx={{ fontFamily: "Pluto Sans Cond", fontWeight: "normal" }}
            >
              {group}
            </Typography>
          ))}
        </CardContent>
      </Box>
    </Grid>
  );
}

function AvatarEmoji(props) {
  return (
    <Avatar
      src={props.member.emoji}
      sx={{ position: "absolute", bottom: -10, left: 30 }}
    />
  );
}

export { MembrosCarousel, MembrosGrid };
