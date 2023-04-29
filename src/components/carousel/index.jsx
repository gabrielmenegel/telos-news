import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"


import imgOne from './Rectangle-227.png'
import imgTwo from './Rectangle-228.png'
import imgThree from './Rectangle-229.png'
import imgFour from './Rectangle-230.png'


const animation = { duration: 50000, easing: (t) => t }

export default function Carousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    <div className="carouselGlobal"> 
    <h1 style={{marginBottom: "5rem"}}>Artigos relacionados</h1>
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <div className="carouselContent">
          <div>
            <img src={imgOne} alt="" />
            <div>
              <h1 style={{ color: "#44403D"}}>Mercado de trabalho</h1>
              <p >Como se comportar em uma <br />
                 entrevista de emprego online</p>
            </div>
          </div>

          <div>
            <img src={imgTwo} alt="" />
            <div>
              <h1 style={{color: "#453D1F"}}>Negócios</h1>
              <p>Comunicação para venda:<br /> como ajustar seu discurso <br />para o momento?</p>
            </div>
          </div>

          <div><img src={imgThree} alt="" />
            <div>
              <h1 style={{ color: "#5D4B04"}}>Curiosidade</h1>
              <p>Comunicação no processo<br />seletivo: como se destacar na <br />entrevista?</p>
            </div>
          </div>

          <div>
            <img src={imgFour} alt="" />
            <div>
              <h1 style={{color: "#BD9804"}}>Mercado de trabalho</h1>
              <p>Mindfulness: como chegar ao<br /> próximo nível na sua carreira?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="keen-slider__slide number-slide1">
        <div className="carouselContent">
          <div>
            <img src={imgOne} alt="" />
            <div>
              <h1 style={{ color: "#44403D"}}>Mercado de trabalho</h1>
              <p >Como se comportar em uma <br />
                 entrevista de emprego online</p>
            </div>
          </div>

          <div>
            <img src={imgTwo} alt="" />
            <div>
              <h1 style={{color: "#453D1F"}}>Negócios</h1>
              <p>Comunicação para venda:<br /> como ajustar seu discurso <br />para o momento?</p>
            </div>
          </div>

          <div><img src={imgThree} alt="" />
            <div>
              <h1 style={{ color: "#5D4B04"}}>Curiosidade</h1>
              <p>Comunicação no processo<br />seletivo: como se destacar na <br />entrevista?</p>
            </div>
          </div>

          <div>
            <img src={imgFour} alt="" />
            <div>
              <h1 style={{color: "#BD9804"}}>Mercado de trabalho</h1>
              <p>Mindfulness: como chegar ao<br /> próximo nível na sua carreira?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}