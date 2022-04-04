import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const pages = ["Home", "Sobre", "Destaques", "Projetos", "Membros"];
const logo = "/src/Images/Logo.png";

function HomeHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ paddingTop: "0px", paddingBottom: "30px", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-around" }}>
          <IconButton sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <img src={logo} height={120}></img>
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white", backgroundColor: "#2B2B2B" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <IconButton
            sx={{ flexGrow: 100, display: { xs: "flex", md: "none" } }}
          >
            <img src={logo} height={120}></img>
          </IconButton>
          <HomeNavBar item={pages} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

function HomeNavBar(props) {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <Stack spacing={2}>
        <Breadcrumbs separator="|" aria-label="breadcrumb" color="white">
          {props.item.map((page) => (
            <Link
              underline="none"
              key="1"
              color="white"
              href={`#${page}`}
              sx={{":hover": {borderBottom: "1px solid #00B9E1"}}}
            style={{ marginLeft: 20, marginRight: 20, filter: "drop-shadow(0 4px 10px black)" }}
            >
              {page}
            </Link>
          ))}
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};

export default HomeHeader;
