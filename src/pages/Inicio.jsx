import React from 'react'
import Contador from '../components/Contador.jsx'
import banner from '../assets/Flyer_oficial.png'
import Carrusel from '../components/Carrusel.jsx'
import Formulario from '../components/Formulario.jsx'
import agenda from '../assets/Agenda_academica.jpg'
import {RViewer, RViewerTrigger} from 'react-viewerjs'

const Inicio = () => { 
  /*<iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7833.311998637951!2d-74.7892071!3d10.9893169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef43359c81399b5%3A0x8009042ac2d2f291!2sSENA%20NODO%20HOTELERIA%20Y%20TURISMO%20CENTRO%20DE%20COMERCIO!5e0!3m2!1ses-419!2sco!4v1694722640981!5m2!1ses-419!2sco" width="600" height="450" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>*/
  /*<img src={image_9} alt="imagen" className='img-tittle'/> */
  return (
    <div className='inicio'>
      <div className="cabecera">
        <Contador></Contador>
      </div>
      <div className='banner'>
        <h5>EL FUTURO DE LOS EVENTOS</h5>
      </div>
      <div className="info-evento">
        <RViewer imageUrls={banner}>
          <RViewerTrigger>
            <img src={banner} alt="banner" className='banner-info'/>
          </RViewerTrigger>
        </RViewer>
        <div className="info-evento-1">
          <RViewer imageUrls={agenda}>
            <RViewerTrigger>
              <img className='agenda' src={agenda} alt="agenda" />
            </RViewerTrigger>
          </RViewer>
          
        </div>
      </div>
      <Carrusel></Carrusel>
      <div className="pre-footer">
        <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7833.311998637951!2d-74.7892071!3d10.9893169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef43359c81399b5%3A0x8009042ac2d2f291!2sSENA%20NODO%20HOTELERIA%20Y%20TURISMO%20CENTRO%20DE%20COMERCIO!5e0!3m2!1ses-419!2sco!4v1694722640981!5m2!1ses-419!2sco" width="600" height="450" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="fomulario1">
          <Formulario></Formulario>
        </div>
      </div>
    </div>
  )
}

export default Inicio