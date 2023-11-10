import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'  

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
                <h2>Nombre de Expositor 1</h2>
                <div className='icono'><ion-icon name="person-circle-outline"></ion-icon></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit facilis quasi odit quos nesciunt, vitae ullam officia esse ab at eius itaque amet maxime exercitationem. Repellat nulla numquam at?</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tarjeta">
                <h2>Nombre de Expositor 2</h2>
                <div className='icono'><ion-icon name="person-circle-outline"></ion-icon></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit facilis quasi odit quos nesciunt, vitae ullam officia esse ab at eius itaque amet maxime exercitationem. Repellat nulla numquam at?</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tarjeta">
                <h2>Nombre de Expositor 3</h2>
                <div className='icono'><ion-icon name="person-circle-outline"></ion-icon></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit facilis quasi odit quos nesciunt, vitae ullam officia esse ab at eius itaque amet maxime exercitationem. Repellat nulla numquam at?</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tarjeta">
                <h2>Nombre de Expositor 4</h2>
                <div className='icono'><ion-icon name="person-circle-outline"></ion-icon></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit facilis quasi odit quos nesciunt, vitae ullam officia esse ab at eius itaque amet maxime exercitationem. Repellat nulla numquam at?</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tarjeta">
                <h2>Nombre de Expositor 5</h2>
                <div className='icono'><ion-icon name="person-circle-outline"></ion-icon></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit facilis quasi odit quos nesciunt, vitae ullam officia esse ab at eius itaque amet maxime exercitationem. Repellat nulla numquam at?</p>
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