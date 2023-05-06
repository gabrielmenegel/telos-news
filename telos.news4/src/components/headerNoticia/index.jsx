import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CreateNoticiaButton from "../createNoticiaButton";
import Logo from './Caminho-19043.png'


export default function HeaderNoticia() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static"
      sx={{background: "transparent"}}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ displey: "flex", alignItems: "center", gap: "10px", padding: "0px 5rem" }}
          >
            <MenuIcon />
            <Typography variant="h6" component="div">
              menu
            </Typography>
          </IconButton>
          <Typography variant="h6" component="div" sx={{display: "flex", alignItems: "center", gap: "4px"}}>
            <img src={Logo} alt="Logo" />
            Télos
          </Typography>
          <CreateNoticiaButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
