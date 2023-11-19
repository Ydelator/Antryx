import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/antrix_fondo-claro.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='container-navbar'>
        <Link onClick={()=>{setIsOpen(!false)}} to={'/'}> <img src={logo} alt='logo'></img> </Link>
        <div className={`container-nav ${isOpen && "open"}`}>
            <Link onClick={()=>{setIsOpen(false)}} className='links' to={'/'}>Inicio</Link>
            <Link onClick={()=>{setIsOpen(false)}} className='links' to={'/acercanosotros'}>Acerca de nosotros</Link>
            <Link onClick={()=>{setIsOpen(false)}} className='links' to={'/contacto'}>Contactanos</Link>
            <Link onClick={()=>{setIsOpen(false)}} className='links' to={'/galeria'}>Galeria</Link>
            <Link onClick={()=>{setIsOpen(false)}} className='links' to={'/agradecimientos'}>Agradecimientos</Link>
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