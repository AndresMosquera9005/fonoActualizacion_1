import React from 'react'
import TarjetasAcordion from './TarjetasAcordion'
import { Col, Row } from 'react-bootstrap'
import "../Estilos/Home.css"


function Preguntas() {
  return (
    <div className='preguntas'>
     <Row>
      <Col className='col'>
        <TarjetasAcordion
          title = "Javier Mosquera"
          description = "Javier Andres Mosquera Rodriguez"
        />
      </Col>
    </Row>
    <Row>
      <Col className='col'>
        <TarjetasAcordion 
          title = "Felipe Mosquera"
          description = "Luis felipe Mosquera Rodriguez"
        />
      </Col>
    </Row>
    </div>
  )
}

export default Preguntas