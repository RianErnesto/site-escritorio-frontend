import React from "react";
import HomeHeader from "./HomeHeader";
import HomeCarousel from "./HomeCarousel";
import BackgroundImage from "/Images/BackgroundImage.png";

function Home() {
    return(
        <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          fontFamily: 'Pluto Sans Cond',
          fontWeight: "300",
          width: "100%",
        }}
      >
        <HomeHeader />
        <HomeCarousel />
      </div>
    );
}

export default Home;