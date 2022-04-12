import React from "react";
import Main from "./Pages/Main/Main";
import Projeto from "./Pages/Projeto/Projeto";
import Grupo from "./Pages/Grupo/Grupo";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom";
import groups from "/src/Services/groups";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/Projeto" element={<Projeto />} />
          {groups.map((group, i) => (
            <Route path={group.path} key={i} element={<Grupo group={group} />}>
            </Route>
          ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);