import React from 'react'
import logo from '../assets/WhatsApp_Image_2023-09-14_at_7.26.16_PM-removebg-preview.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-2">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-1">
          <h2>¿CÓMO CONTACTARNOS?</h2>
          <div>
              <h3><b>Coordinadora general</b></h3>
              <h4>Maria Claudia Collante</h4>
              <h4>Email: <span>workshop2023barranquilla@gmail.com</span></h4>
              <div className="whatsapp">
                <ion-icon name="logo-whatsapp" size='large'></ion-icon> 
                <h4>+57 3175033540</h4>
              </div>
              <div className="instagram">
                <ion-icon name="logo-instagram" size='large'></ion-icon>
                <h4><a href="https://www.instagram.com/antryxeventos/" target='_blank' className='link-insta'>Antryx Eventos</a></h4>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer