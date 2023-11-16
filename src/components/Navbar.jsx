import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/antrix_fondo-claro.png'

const Navbar = () => {
  return (
    <div className='container-navbar'>
        <Link to={'/'}> <img src={logo} alt='logo'></img> </Link>
        <div className="container-nav">
            <Link className='links' to={'/'}>Inicio</Link>
            <Link className='links' to={'/acercanosotros'}>Acerca de nosotros</Link>
            <Link className='links' to={'/contacto'}>Contactanos</Link>
            <Link className='links' to={'/galeria'}>Galeria</Link>
            <Link className='links' to={'/agradecimientos'}>Agradecimientos</Link>
        </div>
    </div>
  )
}

export default Navbar