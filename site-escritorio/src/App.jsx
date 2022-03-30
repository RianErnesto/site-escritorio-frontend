import React from "react";
import HomeHeader from "./Components/HomeHeader.jsx";
import HomeCarousel from "./Components/HomeCarousel.jsx";
import GruposHeader from "./Components/GrupoHeader.jsx";
// import GrupoList from "./Components/GrupoLists.jsx";
import GrupoListBox from './Components/GrupoListBox.jsx';

function App() {
  return (
    <div>
      <div style={{ backgroundImage: `url(../BackgroundImage.png)`, backgroundRepeat: 'no-repeat' }}>
        <HomeHeader />
        <HomeCarousel />
      </div>
      <div style={{backgroundColor: 'transparent', width: '80%', margin: 'auto'}}>
        <GruposHeader />
        <GrupoListBox />
        {/* <Grid container spacing={10} sx={{paddingBottom: '100px'}}>
          <GrupoList />
          <GrupoList />
        </Grid> */}
      </div>
    </div>
  );
}

export default App;
