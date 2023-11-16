import React from 'react'
import Andres from '../assets/Flyers/ANDRES SERJE.png'
import Bisila from '../assets/Flyers/BISILA BOKOKO.png'
import Carlos from '../assets/Flyers/CARLOS DE LA HOZ.png'
import Fausto from '../assets/Flyers/FAUSTO COLONNA.png'
import Juan from '../assets/Flyers/JUAN JARAMILLO.png'
import Kathy from '../assets/Flyers/KATHY LÓPEZ.png'

const Flyers = () => {
    const expositores = [{
        nombre: Juan
    },
    {
        nombre: Andres
    },
    {
        nombre: Kathy
    },
    {
        nombre: Fausto
    },
    {
        nombre: Carlos
    },
    {
        nombre: Bisila
    }
    ]
  return (
    <div className='flyer-container'>
        {
            expositores.map((item)=>{ 
                return <img src={item.nombre} alt="flyer" className='flyer-card'/>
            })
        }
    </div>
  )
}

export default Flyers