import React from "react";
import Card1 from "../Card1";
import Card2 from "../Card2";
import Card3 from "../Card3";

import styles from './styles.module.css'

import SectionCard2 from "../SectionCard2";
import SectionCard1 from "../SectionCard1";
import cardTertiary from './Rectangle-228.png'
import cardSegundary from './Rectangle-229.png'
import cardPrimary from './Rectangle-227.png'
import FooterCard1 from "../footerCard1";
import FooterCard2 from "../footerCard2";
import footerCard3 from "../footerCard3"; 

export default function RouteHome() {
  const noticia = [ {
    id: 1,
    title:" Mercado de trabalho",
    image: "../../components/footerCardprimary/Rectangle-227.png",
    description:"Como se comportar em uma entrevista online"
  }]

  return (
    <>
      <div className={styles.global}>
        <div className={styles.container}>
          <Card1 /> 
          <div className={styles.content}>
            <Card2
              text="Por que trabalhar com propósito ?"
            />
            <Card3
              text="3 Tendência sobre o futuro do trabalho"
            />
          </div>
        </div>
        <div className={styles.sectionCardprimary}>
          <SectionCard1
            text="Negócios"
            button="ler agora"
          />
        </div>

        <div className={styles.sectionCardsegundary}>
          <SectionCard2
            button="ler agora"
          />
        </div>

        <div className={styles.footerCard}>
          <div> 
        {noticia.map((noticias) => {
          return ( 
          <FooterCard1
          key={noticias.id}
          title={noticias.title}
          image={cardPrimary}
          description={noticias.description}
           />
           );
          })}
          </div>
          <FooterCard2
          title = " Mercado de Trabalho"
          image={cardSegundary}
          description= "Como se destacar nas entrevista online"
          />

          <footerCard3
          title = " Mercado de Trabalho"
          image = {cardTertiary}
          description = " Comunicação para venda: como ajustar seu discurso para o momento"
          />

        </div>
      </div>
    </>
  )
}