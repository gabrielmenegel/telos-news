import React from "react";
import inst from "./insta.png";
import linkdin from "./linkdin.png";
import chat from "./chat.png";
import play from "./play.png";
import image from "./image-48.png";

import castle from "./image-49.png";
import grades from "./image-50.png";
import education from "./image-51.png";
import speeches from "./image-52.png";
import card from './Rectangle-235.png'
import foto from './Rectangle-262.png'
import start from './start.png';
import vision from './vision.png'

import "./styles.css";

export default function MainNoticia() {
  return (
    <>
      <div className="global">
        <div className="icons">
          <img src={inst} alt="Instagram" />
          <img src={linkdin} alt="Linkdin" />
          <img src={chat} alt="Chat" />
          <img src={play} alt="Play" />
        </div>
        <div className="containerBurnout">
          <p>
            Então você está sentindo estresse, ansiedade e às vezes uma
            alteração de humor muito rápida? Talvez você possa estar sofrendo da
            Síndrome de Burnout ou Síndrome do Esgotamento! Aqui iremos te
            explicar de maneira bem sintetizada o que é o burnout, seu
            significado, alguns sintomas, formas de tratamento e como lidar.
            Continue lendo!
          </p>

          <h1>Burnout: o que é?</h1>

          <p>
            O burnout ou síndrome do esgotamento profissional é um distúrbio
            psíquico advindo de condições de trabalho desgastantes. Fazer muitas
            horas extras, ter uma pressão excessiva e ininterrupta sobre seu
            cargo são alguns dos motivos que podem te gerar essa sensação de
            esgotamento e desânimo para o trabalho.{" "}
          </p>
          <p>
            Como características principais, possui o estado de tensão emocional
            e estresse crônico devido a condições de trabalhos físicos,
            emocionais e psicológicos desgastantes. Profissões na área da
            educação, saúde, segurança entre outras estão entre as mais afetadas
            devido ao alto envolvimento interpessoal. Na quarentena, devido ao
            covid-19, muitos profissionais têm reclamado do aumento da jornada
            de trabalho e aumento de atribuições, gerando um grande estresse e
            desconforto.
          </p>

          <img src={image} alt="Imagem" />

          <h1>Sintomas do Burnout</h1>

          <p>
            O sintoma mais característico da síndrome é a sensação de
            esgotamento físico e emocional. Além disso, sintomas como dores de
            cabeça, cansaço, palpitação, pressão alta, insônia também podem
            estar associadas ao distúrbio.
          </p>
          <p> Atitudes negativas como:</p>

          <ul>
            <li>Isolamento;</li>
            <li>Mudanças bruscas de humor;</li>
            <li>Dificuldade de concentração;</li>
            <li>Ansiedade;</li>
            <li>Depressão;</li>
            <li>Pessimismo;</li>
            <li>Baixo autoestima</li>
            <li>
              Podem ser desencadeados também pela sensação de esgotamento.
            </li>
          </ul>

          <h1>Tratamento e atitudes</h1>

          <p>
            Dentre os tratamentos, o uso de antidepressivos e psicoterapia são
            prescritos, além de atividades físicas regulares serem altamente
            recomendadas para ajudar a controlar os sintomas.
          </p>
          <p>
            Para lidar com esse momento tão delicado no trabalho, primeiramente
            deve-se haver sinceridade entre o colaborador e a liderança.
            Explicar o que se sente, como se sente é muito importante para que o
            acompanhamento possa ocorrer da melhor maneira possível. Converse
            com seu líder e seja totalmente honesto!
          </p>
          <p>
            Novos hábitos e mudanças de vida podem auxiliar como por exemplo a
            inserção de exercícios físicos na rotina. Reserve um tempo para
            investir em si mesmo e nutrir seu corpo com boas sensações e
            momentos! Te garanto que fará super bem.
          </p>

          <p>
            Quem tem burnout na maioria das vezes não percebe. Então esteja
            atento aos feedbacks de pessoas que te acompanham e gostam de você.
            Procure um médico para ter o acompanhamento dos medicamentos e
            tratamento e não se esqueça que sua saúde mental é tão importante
            quanto a física, por isso, cuide!
          </p>

          <h1>
            Compartilhe com seus amigos que precisam ler esse assunto para se
            prevenirem e investirem mais na qualidade de vida!
          </h1>
        </div>

        <div className="contentCard">
          <h3>Leia também</h3>
          <div className="cards">
            <img src={castle} alt="castle" />
            <div>
              <h4 style={{color: "#517BB3"}}>Mercado de trabalho</h4>
              <h5>Gamificação: saiba como ela pode…</h5>
            </div>
          </div>

          <div className="cards">
            <img src={grades} alt="grades" />
            <div>
              <h4 style={{color: "#958186"}}>Negócios</h4>
              <h5>Por que trabalhar com propósito ?</h5>
            </div>
          </div>

          <div className="cards">
            <img src={education} alt="education" />
            <div>
              <h4 style={{color: "#353A3E"}}>Educação</h4>
              <h5>Por que contratar treinamentos…</h5>
            </div>
          </div>

          <div className="cards">
            <img src={speeches} alt="speeches" />
            <div>
              <h4 style={{color: "#353A3E"}}>Educação</h4>
              <h5>O que levar em consideração…</h5>
            </div>
          </div>

          <div className="cardBanner">
            <img style={{margin: "70px 0px"}} src={card} alt="cardbanner" />
            <h2>Se interessou pelo assunto? </h2>
            <p>Então dá uma olhada nesse curso gratuito que a Télos te oferece:</p>
          </div>

          <div className="fotoBanner">
            <img style={{marginTop: "-3rem"}} src={foto} alt="foto" />
            <h2>Se interessou pelo assunto? </h2>
            <div className="start" style={{display: "flex", alignItems: "center", gap: "11px"}}>
              <img src={start} alt="start" />
               <span>8 de 10</span>
            </div>
            <p>Você irá sair sabendo sobre liderança e comunicação.</p>
            <div className="details">
              <img src={vision} alt="" />
              <a href="#">Ver detalhes</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
