import React from 'react'
import { Col, Row } from 'react-bootstrap'
import imagenMision from "../image/mision vision/doctorasNiños.jpeg"

function Vision() {
  return (
    <div id='diseñoVision'>
      <Row>
        <Col>
          <img src={imagenMision} alt="" id='imagenVision' />
        </Col>
        <Col>
          <h1 id='vision'>VISIÓN</h1>
          <p id='pVision'>Nuestra finalidad es equiparar las oportunidades que tienen las personas, niños y niñas, en materia de salud e inclusión.</p>
        </Col>
        
      </Row>
    </div>
  )
}

export default Vision