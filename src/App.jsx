import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Acerca from './pages/Acerca'

import Contacto from './pages/Contacto'

function App() {

  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='acercanosotros' element={<Acerca/>}/>

          <Route path='contacto' element={<Contacto/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
