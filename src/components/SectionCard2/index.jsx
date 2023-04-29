import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Logo from "./image-46.png"
import { Link } from 'react-router-dom';

export default function SectionCard2({button}) {

  return (
    <Card sx={{ display: 'flex', alignItems: "flex-end", backgroundColor: "#FEF7FF;" , borderRadius: "38px"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: "0px 140px 0px 40px" }}>
        <Link to="./Noticia" style={{ padding: "15px 30px", backgroundColor: "#6750A4", color: "white", fontWeight: "bold", borderRadius: "140px", marginBottom: "40px", textDecoration: "none"}} href="#contained-buttons">
          {button}
        </Link>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 570 }}
        image={Logo}
        alt="Live from space album cover"
      />
    </Card>
  );
}