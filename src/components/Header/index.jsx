import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './caminho.png';
import CreateAccountButton from '../createAccountButton';

export function Header() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static"
      sx={{ background: "#fff", boxShadow: "none", border: "1px solid rgba(0, 0, 0, 0.07)", padding: "10px 120px"}}
      >
        <Toolbar 
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center", gap: "4px", color: "#000" }}>
            <img src={logo} alt="" />
            Télos
          </Typography>
          <CreateAccountButton/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}