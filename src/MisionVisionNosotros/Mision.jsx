import React from 'react'
import imagenMision from "../image/mision vision/doctorasNiños.jpeg"
import { Col, Row } from 'react-bootstrap'
import "../Components/Estilos/Home.css"

function Mision() {
  return (  
    <div id='diseñoMision'>
      <Row>
        <Col>
          <div>
            <h1 id='mision'>MISIÓN</h1>
            <p id='pMision'>Ser el centro de apoyo terapeutico en Bogotá más reconocido por su labor social en calidad y amor terapeutico a toda la población que lo requiera.</p>
          </div>
        </Col>
        <Col>
          <img src={imagenMision} alt="" id='imagenMision' />
        </Col>
      </Row>    
    </div>    
  )
}

export default Mision