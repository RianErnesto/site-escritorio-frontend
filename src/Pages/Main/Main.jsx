import React from "react";
import Home from "../../Components/Home/Home";
import Grupo from "../../Components/Grupos/Grupo";
import Projetos from "../../Components/Projetos/Projetos";
import Sobre from "../../Components/Sobre/Sobre";
import Membros from "../../Components/Membros/Membros";
import Destaques from "../../Components/Destaques/Destaques";
import Contatos from '../../Components/Contatos/Contatos';

function Main() {
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

  export default Main;