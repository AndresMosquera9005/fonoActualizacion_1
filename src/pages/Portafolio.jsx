import React from 'react'
import { Col, Row } from 'react-bootstrap'
import imagen from "../image/sin fondo/domiciliario2-1.png"
import adulto1 from "../image/sin fondo/etapaBebeAdulto-.png"
import adulto2 from "../image/sin fondo/etapaBebeAdulto2.png"
import RedesSociales from '../Components/RedesSociales/RedesSociales'
import "../Components/Estilos/Home.css"
import Footer from '../Components/Footer/Footer'

function Portafolio() {
  return (
    <div id='fondo'>
      <div>
        <h1 className='tituloPortafolio'>SERVICIOS DOMICILIARIOS</h1>
        <Row>
          <Col col-md-4>
            <img src={imagen} alt="" className='imagenesPorta' />
          </Col>
          <Col col-md-4>
            <h1 className='tituloPortafolio'>NUESTROS SERVICIOS</h1>
            <ul className='listaPortafolio'>              
              <li>Orientación vocacional a estuadiente a de grado 11.</li>
              <li>Psicología.</li>
              <li>Terapia ocupacional.</li>
              <li>Fonoaudiología.</li>
              <li>Fisoterapia.</li>
              <li>Taller a padres.</li>
              <li>Taller a docentes.</li>              
            </ul>        
          </Col>
        </Row>
      </div>

      <div>
        <h1 className='tituloPortafolio'>CUIDADOS DE LA SALUD</h1>
        <Row>    
          <Col col-md-4>
            <ul id='cuidadSalud' className='listaPortafolio'>
              <li>Primera infancia.</li>
              <li>Infancia.</li>
              <li>Adolescencia.</li>
              <li>Juventud.</li>
              <li>Adultez.</li>
              <li>Vejez.</li>
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
        <p className='significados'>Profesiones importantes que tiene un impacto positivo en la vida de muchas personas. Mejorando su calidad de vida.</p>
        <h1 className='tituloPortafolio'>DESEMPEÑO FUNDAMENTAL</h1>
        <ul className='significados'>
          <li>EDUCACIÓN: Trabajamos en las instituciones educativas para ayudar a los estudiantes en su proceso de desarrollo.</li>
          <li>SALUD: Trabajamos en centro de atención medica para evaluar y tratar proceso de desarrrollo.</li>          
        </ul>
      </div>
      <div>
        <h1 className='tituloPortafolio'>METODO DE LA EVALUACIÓN </h1>
        <p className='significados'> Utilizamos metodos de evaluación para determinar las necesidades de nuestros usuarios.</p>
        <ul className='significados'>
          <li>Historia clínica: antecendentes y desarrollo de la nuñez según corresponda. </li>
          <li>valoración fisioterapia</li>
          <li>valoración  terapia ocupacional </li>
          <li>valoración en psicoliogia</li>
          <li>valoración en fonoaudilogía </li>
        </ul>

      </div>
      <div id='redesSociales'>
        <RedesSociales />
      </div>
      <Footer />
    </div>
  )
}

export default Portafolio
