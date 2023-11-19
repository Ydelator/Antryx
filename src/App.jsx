import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import Acerca from './pages/Acerca.jsx'
import Contacto from './pages/Contacto.jsx'
import Agradecimientos from './pages/Agradecimientos.jsx'
import Galeria from './pages/Galeria.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='acercanosotros' element={<Acerca/>}/>
          <Route path='contacto' element={<Contacto/>}/>
          <Route path='agradecimientos' element={<Agradecimientos/>}/>
          <Route path='galeria' element={<Galeria/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
