// function App() {
//   return(
//     <h1>Site Escritório de Engenharia</h1>
//   );
// }

// export default App;




import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/getting-started/installation/" onClick={handleClick}>
      Sobre
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/getting-started/installation/" onClick={handleClick}>
      Destaques
    </Link>,
    <Link underline='hover' key="3" color="text.primary" href='/' onClick={handleClick}>
      Projetos
    </Link>,
    <Link underline='hover' key="3" color="text.primary" href='/' onClick={handleClick}>
      Membros
    </Link>
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="|" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}