import React from 'react'
import imagen_1 from '../assets/0001.jpg'
import imagen_2 from '../assets/0002.jpg'
import {RViewer, RViewerTrigger} from 'react-viewerjs'

const Agradecimientos = () => {
  const urlimage = [
    imagen_1,
    imagen_2
  ]
  return (
    <RViewer imageUrls={urlimage}>
      <div className='agradecimiento'>
        {
          urlimage.map((item, index)=>{
            return <RViewerTrigger index={index}>
              <img src={item} alt="image" />
            </RViewerTrigger>
          })
        }
      </div>
    </RViewer>
  )
}

export default Agradecimientos