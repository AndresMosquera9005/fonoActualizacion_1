import React from 'react'
import "../Components/Estilos/misionvision.css"
import RedesSociales from '../Components/RedesSociales/RedesSociales'

function MisionVision() {
  return (
    <>
    <div id="fondo">
      <h2>MISION VISION Y VALORES</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <h3>MISION</h3>
              <p>En nuestra empresa de fonoaudiología, nos dedicamos apasionadamente a mejorar la calidad de vida de las personas a través de la comunicación efectiva y el bienestar auditivo. Nos esforzamos por ofrecer servicios de fonoaudiología de la más alta calidad, utilizando enfoques innovadores y personalizados para cada paciente. Nos comprometemos a ayudar a nuestros pacientes a desarrollar habilidades de comunicación sólidas, superar desafíos del habla y del lenguaje, y mejorar su capacidad auditiva, promoviendo así su integración plena en la sociedad. Nos guía un profundo sentido de empatía y profesionalismo en cada interacción, y nos esforzamos por ser líderes en el campo de la fonoaudiología, brindando servicios excepcionales que transforman vidas.</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <h3>VISION</h3>
              <p>Nuestra visión es ser reconocidos como el centro de fonoaudiología de referencia a nivel nacional, conocidos por nuestra excelencia clínica, innovación y compasión. Nos esforzamos por ser pioneros en la aplicación de técnicas avanzadas y tecnologías emergentes para mejorar la comunicación y la audición de nuestros pacientes. Aspiramos a ser un lugar donde las personas encuentren esperanza, apoyo y soluciones efectivas para los desafíos del habla, el lenguaje y la audición. Buscamos establecer asociaciones sólidas con otras instituciones de salud y educación, y ser un recurso confiable para las familias, médicos y educadores que buscan servicios de fonoaudiología de calidad. En última instancia, nuestra visión es contribuir significativamente a una sociedad donde todas las personas tengan acceso equitativo a servicios de fonoaudiología y puedan alcanzar su máximo potencial en la comunicación y el desarrollo del lenguaje.</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <h3>VALORES</h3>
              <p>Actuamos con honestidad y transparencia en todas nuestras interacciones, cumpliendo siempre con altos estándares éticos.</p>
            </div>
          </div>
        </div>
      </div>
      <RedesSociales />

    </div>
    </>

  )
}

export default MisionVision



       
    