import React from "react";
// import Carousel from "react-material-ui-carousel";
import HomeCarouselContent from "./HomeCarouselContent.jsx";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

// function HomeCarousel() {
// var items = [
//   {
//     title: "Bem vindo ao Escritório de Engenharia",
//     description:
//       "Grupo de engenharia voltado para o desenvolvimento de projetos do Cesupa",
//     button: "Saber Mais...",
//   },
//   {
//     title: "Sobre nós",
//     description:
//       "Nós somos o Escritório de Engenharia, fazemos projetos e criamos discussões relacionadas a área da tecnologia aliada a engenharia",
//     button: "Veja Mais...",
//   },
// ];

//   return (
//     <Carousel
//       interval={8000}
//       navButtonsAlwaysVisible="true"
//       navButtonsProps={{
//         style: {
//           backgroundColor: "red",
//           color: "white"
//         },
//       }}
//       navButtonsWrapperProps={{
//         style: {
//           backgroundColor: 'black'
//         }
//       }}
//       indicators={false}
//       sx={{ minHeight: '500px' }}
//     >
// {items.map((item, i) => (
//   <HomeCarouselContent key={i} item={item} />
// ))}
//     </Carousel>
//   );
// }

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return (
    <button className="rightArrow" onClick={() => onClick()} style={{backgroundColor: 'transparent', position: 'absolute', right: '10%', borderRadius: '100%'}}>
      <img src="src/Images/Logo.png" height="50px"/>
    </button>
  );
}

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return (
    <button className="leftArrow" onClick={() => onClick()} style={{backgroundColor: 'transparent', position: 'absolute', left: '10%', borderRadius: '100%'}}>
      <img src="src/Images/LeftArrow.svg" height="50px"/>
    </button>
  );
}

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
    removeArrowOnDeviceType={['mobile', 'tablet']}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 1
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1
      }
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
