import React from "react";
import HomeHeader from "./Components/HomeHeader.jsx";
import HomeCarousel from "./Components/HomeCarousel.jsx";
import GruposHeader from "./Components/GrupoHeader.jsx";
import GrupoListBox from "./Components/GrupoListBox.jsx";
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)


function App() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/src/Images/BackgroundImage.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HomeHeader />
        <HomeCarousel />
      </div>
      <div
        style={{ backgroundColor: "transparent", width: "80%", margin: "auto" }}
      >
        <GruposHeader />
        <GrupoListBox />
      </div>
    </div>
  );
}
