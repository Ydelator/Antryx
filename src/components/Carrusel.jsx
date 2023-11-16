import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'  
import Andres from '../assets/Andres_Serje.jpeg'
import Bisila from '../assets/Bisila_Bokoko.jpeg'
import Carlos from '../assets/Carlos_De_La_Hoz.jpg'
import Fausto from '../assets/Fausto_Colanna.jpeg'
import Juan from '../assets/Juan_Jaramillo.jpg'
import Kathy from '../assets/Kathy_Lopez.jpeg'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCube, Pagination, Navigation } from 'swiper/modules';


const Carrusel = () => {
  return (
    <div className='carrusel'>
        <Swiper
        effect={'cube'}
        grabCursor= {true}
        cubeEffect={{
          shadow:true,
          slideShadows:true,
          shadowOffset: 20,
          shadowScale:0.94,
        }}
        pagination={{el:'.paginacion', clickable:true}}
        navigation={{nextEl: '.next', prevEl:'.prev', clickable:true}}
        modules={[EffectCube, Pagination, Navigation]}
        className='mySwiper'

        >
           <SwiperSlide>
              <div className="tarjeta">
                <h2>Juan Jaramillo</h2>
                <img className='expositor' src={Juan} alt="juan" />
                <h4>Director de la CLENA</h4>
                <p>"Hablemos sobre Barranquilla y la búsqueda de su vocación como clúster de eventos y negocios".</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tarjeta">
                <h2>Andres Serje</h2>
                <img className='expositor' src={Andres} alt="andres" />
                <h4>CEO Sin Filtro Agencia & Dinklab</h4>
                <p>"Hablemos sobre la industria de los eventos y como lograr dejar una huella en cada asistente".</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tarjeta">
                <h2>Kathy López</h2>
                <img className='expositor' src={Kathy} alt="kathy" />
                <h4>Jefa de la Oficina de Turismo Alcaldía de Barranquilla</h4>
                <p>"Barranquilla, destino lider en turismo de eventos y negocios en Suramérica".</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tarjeta">
                <h2>Fausto Colonna</h2>
                <img className='expositor' src={Fausto} alt="fausto" />
                <h4>Event Decorator</h4>
                <p>"Te espero para contarte sobre la importancia de la Decoración en los eventos y su constante evolución".</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tarjeta">
                <h2>Carlos De La Hoz</h2>
                <img className='expositor' src={Carlos} alt="carlos" />
                <h4>Egresado SENA</h4>
                <p>"Quiero contarte sobre mi experiencia profesional como egresado SENA, en el mercado laboral de los eventos".</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tarjeta">
                <h2>Bisila Bokoko</h2>
                <img className='expositor' src={Bisila} alt="bisila" />
                <h4>Invitada Internacional</h4>
                <p>Mujer de negocios, emprendedora y filántropa y CEO de BBES, una agencia de desarrollo empresarial de Nueva York que representa y promueve marcas de mercados internacionales.</p>
              </div>
            </SwiperSlide> 
        </Swiper>
        <div className="indicador">
          <div className="prev"><ion-icon name="arrow-back-circle-outline"></ion-icon></div>
          <div className='paginacion'></div>
          <div className="next"><ion-icon name="arrow-forward-circle-outline"></ion-icon></div>
        </div>
    </div>
  )
}

export default Carrusel