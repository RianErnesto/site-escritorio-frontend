import React from "react";
import Home from "./Components/Home";
import Grupo from "./Components/Grupo";
import Projetos from "./Components/Projetos";
import Sobre from "./Components/Sobre";
import Membros from "./Components/Membros";
import Destaques from "./Components/Destaques";
import Contatos from './Components/Contatos';
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  return (
    <div>
      <div id='Home'>
        <Home />
      </div>
      <div id='Grupo'>
        <Grupo />
      </div>
      <div id='Projetos'>
        <Projetos />
      </div>
      <div id='Sobre'>
        <Sobre />
      </div>
      <div id='Membros'>
        <Membros />
      </div>
      <div id='Destaques'>
        <Destaques />
      </div>
      <div id='Contatos'>
        <Contatos />
      </div>
    </div>
  );
}
