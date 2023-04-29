import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function footerCard3({title, image, description}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#E6E0E9"  }}>
      <div style={{ display: "flex"}}>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
        <CardHeader
          title="Leia também"
        />
      </div>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent sx={{display: "flex", flexDirection: "column", gap: "1rem"}}>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
        <Typography sx={{display: "flex", justifyContent: "end"}}> 
        <Link to="/Noticia" style={{ padding: "10px 24px", backgroundColor: "#6750A4", color: "white", fontWeight: "bold", borderRadius: "140px", textDecoration: "none"}} href="#contained-buttons">
          ler agora
        </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}