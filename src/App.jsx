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
      <Home />
      <Grupo />
      <Projetos />
      <Sobre />
      <Membros />
      <Destaques />
      <Contatos />
    </div>
  );
}
