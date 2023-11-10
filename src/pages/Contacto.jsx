import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contacto = () => {
  const refForm = useRef();

  const handleSubmit = (event) =>{
    /*event.preventDefault()
    const serviceID = "service_cl3g4g5"
    const templateID = "template_83y6djk"

    const apiKey ="k4ZZJKOUogh7KT_P9"

    emailjs.sendForm(serviceID, templateID, refForm.current, apiKey)
    .then( result => console.log(result.text) )
    .catch( error => console.error(error))*/
  }
  return (
    <div className='contactanos'>
      <h2>Ponte en contacto con nosotros</h2>
      <form className='formulario' action="" ref={refForm} onSubmit={handleSubmit}>
            <div className="formulario1">
              <div className='elemento-form'>
                <label>Nombre <span>*</span></label>
                <input name='nombre' type="text" placeholder=''/>
              </div>

              <div className='elemento-form'>
                <label>Apellido <span>*</span></label>
                <input name='apellido' type="text" placeholder=''/>
              </div>
            </div>

            <div className="formulario2">
              <div className='elemento-form'>
                <label>Profesion</label>
                <input name='profesion' type="text" placeholder=''/>
              </div>

              <div className='elemento-form'>
                <label>Correo electronico <span>*</span></label>
                <input name='email' type="email" placeholder=''/>
              </div>
            </div>

            <label className='label-mensaje'>Mensaje <span>*</span></label>
            <textarea name="Message" id="" cols="25" rows="10" placeholder=''></textarea>

          <button className='btn-enviar'><span>Enviar</span></button>
      </form>
    </div>
  )
}

export default Contacto