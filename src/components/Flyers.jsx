import React from 'react'
import Rosa from '../assets/Flyers/ROSA_MARIA_CORCHO.jpg'
import Bisila from '../assets/Flyers/BISILA BOKOKO.png'
import Carlos from '../assets/Flyers/CARLOS DE LA HOZ.png'
import Fausto from '../assets/Flyers/FAUSTO COLONNA.png'
import Juan from '../assets/Flyers/JUAN JARAMILLO.png'
import Kathy from '../assets/Flyers/KATHY LÓPEZ.png'
import {RViewer, RViewerTrigger} from 'react-viewerjs'

const Flyers = () => {
    const expositores = [
    Rosa
    ,
    Juan
    ,
    Kathy
    ,
    Fausto
    ,
    Carlos
    ,
    Bisila
    ]
  return (
   <RViewer imageUrls={expositores}> 
        <div className='flyer-container'>
            {
                expositores.map((item, index)=>{ 
                    return <RViewerTrigger index={index}>
                        <img src={item} alt="flyer" className='flyer-card'/>
                    </RViewerTrigger> 
                })
            }
        </div>
    </RViewer>
  )
}

export default Flyers