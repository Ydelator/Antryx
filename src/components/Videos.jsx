import React from 'react'
import invi_1 from '../assets/invitacion_1.mp4'
import invi_2 from '../assets/invitacion_2.mp4'
import invi_3 from '../assets/invitacion_3.mp4'
import invi_6 from '../assets/invitacion_6.mp4'

const Videos = () => {
    const videos = [
        invi_1,
        invi_2,
        invi_3,
        invi_6
    ]
  return (
    <div className='videos'>
        {
            videos.map((file, index)=>{
                return <video src={file} key={index} controls ></video>
            })
        }
    </div>
  )
}

export default Videos