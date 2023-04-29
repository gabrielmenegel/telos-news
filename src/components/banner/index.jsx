import React from "react";
import img from './sky.jpg'
import CardMedia from '@mui/material/CardMedia';
import logo from './Rectangle-233.png'
import styles from './styles.module.css'

export default function Banner(){
    return(
        <> 
        <CardMedia
        component="img"
        sx={{ width: "100%", height: "100vh", objectFit: "cover", position: "absolute", top: "0", zIndex: "-1"}}
        image={img}
        alt="Live from space album cover"
      />

      <div className={styles.container}>
        <h3>Mercado de trabalho</h3>
        <h2>Burnout: você sabe lidar com o</h2>
        <h2>estomago profissional</h2>
        <div className={styles.content}>
          <img src={logo} alt="" />
          <h5>jhon Doe</h5>
          <div className={styles.content}>
            <h5>tempo de leitura: <span>10 minutos</span></h5>
          </div>
        </div>
      </div>
      </>
    )
}