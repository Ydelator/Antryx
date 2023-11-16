import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/antrix_fondo-claro.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='container-navbar'>
        <Link to={'/'}> <img src={logo} alt='logo'></img> </Link>
        <div className={`container-nav ${isOpen && "open"}`}>
            <Link className='links' to={'/'}>Inicio</Link>
            <Link className='links' to={'/acercanosotros'}>Acerca de nosotros</Link>
            <Link className='links' to={'/contacto'}>Contactanos</Link>
            <Link className='links' to={'/galeria'}>Galeria</Link>
            <Link className='links' to={'/agradecimientos'}>Agradecimientos</Link>
        </div>
        <div className={`nav-toogle ${isOpen && "open"}`} onClick={()=>{setIsOpen(!isOpen)}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
  )
}

export default Navbar