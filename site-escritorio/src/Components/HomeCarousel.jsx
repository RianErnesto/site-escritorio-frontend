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
    customRightArrow={
      <div>Teste</div>
    }
      additionalTransfrom={0}
      autoPlaySpeed={8000}
      centerMode={false}
      containerClass="container"
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
    >
      {items.map((item, i) => (
        <HomeCarouselContent key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default HomeCarousel;
