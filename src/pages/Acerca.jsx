import React from 'react'
import imagen_stock from '../assets/image-removebg-preview.png'
import imagen_2 from '../assets/image-removebg-preview-2.png'
const Acerca = () => {
  return (
    <div className='acerca-nosotros'>
      <h1>Acerca de Nosotros</h1>
      <div className="acerca-primero">
        <p>En un mundo donde la colaboración, el intercambio de conocimientos y la conexión son primordiales, Antryx emerge como la luz guía, creando eventos corporativos excepcionales. “Antryx”, nace del espíritu laborioso de las hormigas que trabajan unidas para lograr hazañas extraordinarias. Reunimos personas, ideas y tecnología para crear eventos inolvidables.</p>
        <img src={imagen_stock} alt="imagen_stock" />
      </div>
      
      <div className="acerca1">
        <img src={imagen_2} alt="imagen2" />
        <div className="mision-vision">
          <div className="mision">
            <h2>Mision</h2>
            <p>La misión de ANTRYX SAS es ser una empresa líder e innovadora del mercado en la Organización Profesional de Eventos. Una empresa reconocida por su gran profesionalismo y honestidad, enfocada en la planificación y producción de eventos corporativos sostenibles y creativos. <br />
            Con un equipo de trabajo altamente capacitado y una cartera de empresas proveedoras con alto nivel de compromiso y calidad que son nuestros aliados estratégicos para proveernos de todo tipo de productos y servicios necesarios para la ejecución exitosa de cualquier evento.
            </p>
          </div>
          <div className="vision">
            <h2>Vision</h2>
            <p>ANTRYX SAS busca posicionarse en el 2025 como Empresa líder y referente en la Región Caribe por ofrecer soluciones integrales, innovadoras y profesionales, en la planificación de eventos corporativos, a través de prácticas ambientalmente responsables que intervengan en el diseño, organización y producción de eventos con un mejoramiento continuo de todos los procesos
            </p>
          </div>
        </div>
        
      </div>
      <div className="objetivo">
        <h2>Objetivo</h2>
        <p>
        ANTRYX SAS nace en el año 2023 con el objetivo de colaborar y establecer sinergias con las empresas-clientes en la consecución exitosa de sus objetivos de comunicación, marketing y recursos humanos a través de la organización de eventos en toda la Región Caribe. <br />
        Nuestra razón de ser es que el cliente tenga la mejor experiencia y atención posible, ofreciéndole un evento único, con todos los detalles necesarios para satisfacer sus expectativas y requerimientos al poner en nuestras manos, manos sus eventos más importantes. <br />
        Hemos llegado con formas innovadoras y creativas de hacer nuestro trabajo para que los asistentes vean y escuchen sus mensajes de una manera que sorprenda y les quede grabada en la mente como una experiencia memorable. <br />
        Creamos diferentes experiencias que conectan a las personas con espacios y momentos, creamos historias, soñamos y pensamos que el mundo puede ser un poco mejor cuando nos unimos y trabajamos colaborativamente. 
        </p>
      </div>
      <div className="valores-marca">
        <h2>Valores de Marca</h2>
        <div className="cards">
          <p><b>Responsabilidad ambiental</b><br /><br />
          Es el valor indispensable que forma parte del alma que motiva a nuestro equipo para avanzar hacia un mundo más sostenible. Por ello seguimos la regla de las tres R: reducir todo aquellos que genere un desperdicio innecesario, reutilizar los residuos para darles otro uso y reciclar los desechos para obtener nuevos productos. <br />
          </p>
          <p><b>Pasión</b><br /><br />
           Hacemos lo que hacemos porque somos unos apasionados de nuestro trabajo y somos buenos en ello. Nuestra meta es la excelencia, no la perfección. Invertimos en formación de forma continua, nos renovamos constantemente e intentamos salir de nuestra zona de confort para nuestro crecimiento profesional y personal. <br /></p>
          <p><b>Colaboración</b><br /><br />
          Como empresa de planificación de eventos sostenibles apreciamos cada oportunidad de poder trabajar con organizaciones de la comunidad para asegurar que los excedentes de los eventos de nuestros clientes puedan ser donados o reutilizados. <br />
          </p>
          <p><b>Trabajo en equipo</b><br /><br />
          Cuando se trabaja en equipo, la unión conlleva al éxito.  Para ello creemos que hacer de la humildad un hábito es clave, aprendiendo de nuestros compañeros de profesión, aceptando nuestros errores, recibiendo consejos, escuchando y pidiendo ayuda cuando la necesitamos a través de una política interna de amor, felicidad y trabajo colaborativo. <br /></p>
          <p><b>Justicia social</b><br /><br />
          Creemos en una sociedad inclusiva, sin importar religión, género o situación, así como en el poder de la educación y la colaboración ciudadana para dejar a la próxima generación un mundo mejor.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Acerca