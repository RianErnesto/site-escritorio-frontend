import React from "react";
import Box from '@mui/material/Box';
import ContatosIcons from "./ContatosIcons";
import ContatosItems from "./ContatosItems";

function Contatos() {
    return(
        <Box bgcolor="#0E0E0E" mb="20px" pt="40px" pb="40px" sx={{display: 'flex', color: 'white', alignItems: 'center', flexDirection: {md: 'row', xs: 'column-reverse'}}}>
            <ContatosIcons />
            <ContatosItems />
        </Box>
    );
}

export default Contatos;