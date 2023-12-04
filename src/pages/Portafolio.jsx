import React from 'react'
import { Col, Row } from 'react-bootstrap'
import imagen from "../image/sin fondo/domiciliario2-1.png"
import adulto1 from "../image/sin fondo/etapaBebeAdulto-.png"
import adulto2 from "../image/sin fondo/etapaBebeAdulto2.png"
import RedesSociales from '../Components/RedesSociales/RedesSociales'
import "../Components/Estilos/Home.css"

function Portafolio() {
  return (
    <div id='fondo'>
      <div>
        <h1 className='tituloPortafolio'>SERVICIOS DOMOCILIARIOS</h1>
        <Row>
          <Col col-md-4>
            <img src={imagen} alt="" className='imagenesPorta' />
          </Col>
          <Col col-md-4>
            <h1 className='tituloPortafolio'>NUESTROS SERVISIOS</h1>
            <ul className='listaPortafolio'>              
              <li>Orientación vocacional a estuadiente a de grado 11</li>
              <li>Psicología</li>
              <li>Terapia ocupacional</li>
              <li>Fonoaudiología</li>
              <li>Fisoterapia</li>
              <li>Taller a padres</li>
              <li>Taller a docentes</li>              
            </ul>        
          </Col>
        </Row>
      </div>

      <div>
        <h1 className='tituloPortafolio'>CUIDADOS DE LA SALUD</h1>
        <Row>    
          <Col col-md-4>
            <ul id='cuidadSalud' className='listaPortafolio'>
              <li>Primera infancia</li>
              <li>Infancia</li>
              <li>Adolescencia</li>
              <li>Juventud</li>
              <li>Adultez</li>
              <li>Vejez</li>
            </ul>
          </Col>
          <Col col-md-4 >
            <img src={adulto2} id='adulto2'/>
            <img src={adulto1} id='adulto1'/>
          </Col>
        </Row>
      </div>
      <div>
        <h1 className='tituloPortafolio'>IMPORTANCIA DE LA TERAPIA </h1>
        <p className='significados'>Una profesión importante que tiene un impacto positivo en la vida de muchas personas. Los fonoaudiólogos ayudan a las personas a superar los trastornos de la comunicación, lo que puede mejorar su calidad de vida en muchos aspectos.</p>
        <h1 className='tituloPortafolio'>DESEMPEÑO FUNDAMENTAL</h1>
        <ul className='significados'>
          <li>EDUCACIÓN: Los fonoaudiólogos trabajan en las escuelas para ayudar a los estudiantes con trastornos del lenguaje y el habla.</li>
          <li>SALUD: Los fonoaudiólogos trabajan en los hospitales, las clínicas y otros centros de atención médica para evaluar y tratar a los pacientes con trastornos de la comunicación.</li>
          <li>REHABILITACIÓN: Los fonoaudiólogos trabajan en los centros de rehabilitación para ayudar a las personas que han sufrido lesiones o enfermedades que han afectado a su comunicación.</li>
          
        </ul>
      </div>
      <div>
        <h1 className='tituloPortafolio'>METODO DE LA EVALUACIÓN </h1>
        <p className='significados'> Utilizan una variedad de métodos de evaluación para determinar la causa de un trastorno de la comunicación. Estos métodos pueden incluir:</p>
        <ul className='significados'>
          <li>Historia clínica: El fonoaudiólogo recopila información sobre el historial médico, el desarrollo y el comportamiento del paciente.</li>
          <li>Examen físico: El fonoaudiólogo realiza un examen físico de la cabeza, el cuello y la boca del paciente.</li>
          <li>Pruebas de lenguaje: Las pruebas de lenguaje evalúan las habilidades de comprensión y expresión del lenguaje del paciente.</li>
          <li>Pruebas de habla: Las pruebas de habla evalúan la producción del habla del paciente.</li>
          <li>Pruebas de voz: Las pruebas de voz evalúan la calidad y la producción de la voz del paciente.</li>
        </ul>

      </div>
      <div id='redesSociales'>
        <RedesSociales />
      </div>
    </div>
  )
}

export default Portafolio
