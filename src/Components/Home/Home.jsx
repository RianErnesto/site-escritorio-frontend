import React from "react";
import HomeHeader from "./HomeHeader";
import HomeCarousel from "./HomeCarousel";

function Home() {
    return(
        <div
        style={{
          backgroundImage: "url(/src/Images/BackgroundImage.png)",
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