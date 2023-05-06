import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from './image-43.png'
import { Link } from 'react-router-dom';

export default function CardsHome({text}) {
  return (
    <Card sx={{ maxWidth: 216, backgroundColor: "#FEF7FF", padding: "13px" }}>
      <CardMedia
        sx={{ height: 200, borderRadius: "18px" }}
        image={Logo}
      />
      <CardContent>
        <Typography sx={{fontSize: "20px", lineHeight: "20px", marginTop:"-5rem", color: "#252423"}} variant="body2" color="text.secondary">
          {text}
          
        </Typography>
      </CardContent>

      <CardActions
      sx={{borderTop: "1px solid #CAC4D0", padding: "13px 0px"}}
      >
        <Link to="./Noticia" style={{ background: "#6750A4", padding: "11px 25px", color: "white", fontWeight: "bold", borderRadius: "180px", textDecoration: "none"}} size="small">Ler Agora</Link>
      </CardActions>
    </Card>
  );
}