import React from "react";
import Contatos from '../../Components/Shared/Contatos';
import Destaques from "../../Components/Shared/Destaques";

function Grupo(props) {
    return (
        <div>
            <h1>{props.group.title}</h1>
            <Destaques />
            <Contatos />
        </div>
    );
}

export default Grupo;