import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const HomeNavBar = (props) => {
  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <Stack spacing={2}>
        <Breadcrumbs separator="|" aria-label="breadcrumb" color="white">
          {props.item.map((page) => (
            <Link
              underline="hover"
              key="1"
              color="white"
              href="/"
              onClick={handleClick}
              style={{ marginLeft: 20, marginRight: 20 }}
            >
              {page}
            </Link>
          ))}
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};

export default HomeNavBar;
