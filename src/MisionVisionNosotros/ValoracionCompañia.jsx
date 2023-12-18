import React from 'react'
import doctoaDibujo from "../image/mision vision/doctoradibujo.jpeg"
import { Col, Row } from 'react-bootstrap'
import "../Components/Estilos/Home.css"

function Valoracion() {
  return (
    <div>
      <h1 className='tituloValoresCompañia'>VALORES DE LA COMPAÑIA</h1>
      <Row>
        <Col className="col-md-4">
          <img src={doctoaDibujo} alt="" id='imagenMision' />
        </Col>
        <Col>
          <div>
            <p className='parrafoValoresCompañia'>Profesionalismo y empatia.</p>
            <p className='parrafoValoresCompañia'>Integridad e innovación.</p>
            <p className='parrafoValoresCompañia'>Compromiso y responsabilidad.</p>
            <p className='parrafoValoresCompañia'>Trabajo en equipo.</p>
          </div>     
        </Col>
      </Row>    
    </div>
    
  )
}

export default Valoracion