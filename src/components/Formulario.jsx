import React , {useRef}from 'react'
import emailjs from '@emailjs/browser'

const Formulario = () => {
  /*antryxevents@gmail.com*/
  const refForm = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault()
    const serviceID = "service_cl3g4g5"
    const templateID = "template_83y6djk"

    const apiKey ="k4ZZJKOUogh7KT_P9"

    emailjs.sendForm(serviceID, templateID, refForm.current, apiKey)
    .then( result => console.log(result.text) )
    .catch( error => console.error(error))
  }

  return (
    <div className='inscripcion'>
        <h2>Formulario de inscripcion</h2>
        <form className='inscripcion-form' ref={refForm} action="" onSubmit={handleSubmit}>

            <label className='name'>Nombre <span>*</span></label>
            <input name='name' type="text" placeholder='' required/>

            <label className='lastname'>Apellido <span>*</span></label>
            <input name='lastname' type="text" placeholder='' required/>

            <label className='identificacion'>Identificacion <span>*</span></label>
            <input name='identificacion' type="text" placeholder='' required/>


            <label className='profesion'>Profesion</label>
            <input name='profesion' type="text" placeholder='' required/>
 
          
          <button className='btn-inscribirme'><span>Inscribirme</span></button>
            
        </form>
    </div>
  )
}

export default Formulario