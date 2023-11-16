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
        <img src="https://regioncaribe.com.co/wp-content/uploads/2019/07/Inauguran-dos-nuevas-sedes-del-SENA-para-formaci%C3%B3n-en-Econom%C3%ADa-Naranja-y-Turismo-en-Barranquilla-02.jpg" alt="image_nodo" />
    </div>
  )
}

export default Formulario