import React from 'react'
import { Col, Row } from 'react-bootstrap'
import imagen from "../image/domiciliario.png"
import adulto1 from "../image/etapaBebeAdulto.jpg"
import adulto2 from "../image/etapaBebeAdulto2.jpg"
import RedesSociales from '../Components/RedesSociales/RedesSociales'
//import "../Estilos/Home.css"

function Portafolio() {

  return (
    <div id='fondo'>
      <div>
        <h1>Servicio domiciliario</h1>
        <Row>
          <Col col-md-4>
            <img src={imagen} alt="" className='imagenesPorta' />
          </Col>
          <Col col-md-4>
            <h1 className='subTitulos'>Nuestro servicio</h1>
            <ul>
              <li>Terapia respiratoria</li>
              <li>Terapia de lenguaje</li>
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
        <h1>Cuidado de la salud</h1>
        <Row>    
          <Col col-md-4>
            <ul>
              <li>Primera infanca</li>
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
      <RedesSociales />
    </div>
  )
}

export default Portafolio
