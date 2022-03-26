import React from "react";
import HomeHeader from "./Components/HomeHeader.jsx";
import HomeCarousel from "./Components/HomeCarousel.jsx";

function App() {
  return (
    <div style={{ backgroundImage: `url(../BackgroundImage.png)` }}>
      <HomeHeader />
      <HomeCarousel />
    </div>
  );
}

export default App;
