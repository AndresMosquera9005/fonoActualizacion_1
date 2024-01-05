import React from 'react'
import { Col, Row } from 'react-bootstrap'
import compañia from "../image/mision vision/compañia.jpeg"
import "../Components/Estilos/Home.css"

function Valoracion() {
  return (
    <div id='divValoracion'>
      <h1 className='tituloValoresCompañia' id='idTituloValoresCompañia'>VALORES DE LA COMPAÑIA</h1>
      <Row>
        <Col className="col-md-4">
          <img src={compañia} alt="" id='imagenCompañia' />
        </Col>
        <Col>
          <div id='listaCompania'>
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