import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contacto = () => {
  const refForm = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault()
    window.alert("Tu mensaje ha sido enviado, gracias por tu apoyo")
    const serviceID = "service_8xndhzk"
    const templateID = "template_fgy2kha"

    const apiKey ="nWRrNz8nsdk7mv_sE"

    emailjs.sendForm(serviceID, templateID, refForm.current, apiKey)
    .then( result => console.log(result.text) )
    .catch( error => console.error(error))
    refForm.current.reset()
  }
  return (
    <div className='contactanos'>
      <h2>Ponte en contacto con nosotros</h2>
      <form className='formulario' action="" ref={refForm} onSubmit={handleSubmit}>
            <div className="formulario1">
              <div className='elemento-form'>
                <label>Nombre <span>*</span></label>
                <input name='user_name' type="text" placeholder='' required/>
              </div>

              <div className='elemento-form'>
                <label>Apellido <span>*</span></label>
                <input name='last_name' type="text" placeholder='' required/>
              </div>
            </div>

            <div className="formulario2">
              <div className='elemento-form'>
                <label>Profesion</label>
                <input name='profesion' type="text" placeholder=''/>
              </div>

              <div className='elemento-form'>
                <label>Correo electronico <span>*</span></label>
                <input name='email' type="email" placeholder='' required/>
              </div>
            </div>

            <label className='label-mensaje'>Mensaje <span>*</span></label>
            <textarea name="message" id="" cols="25" rows="10" placeholder='' required></textarea>

          <button className='btn-enviar'><span>Enviar</span></button>
      </form>
    </div>
  )
}

export default Contacto