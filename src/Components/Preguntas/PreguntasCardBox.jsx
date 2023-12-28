import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../Estilos/Home.css"

function PreguntasCardBox() {
  return (
    <div className='container'>
      <div>
        <h1 className='tituloPreguntas'>PREGUNTAS FRECUENTES</h1>
        <Row>
          <Col className='col-md-4'>
            <div className='cardPreguntas'>
            <h3 className='h3TitulosPreguntas'>¿CÓMO PUEDE AYUDARME UN FONOAUDIÓLOGO PARTICULAR ?</h3><hr />
            <p className='pSutitulosPreguntas'>Contar con un fonoaudiólogo particular permite el vínculo paciente y profesional de manera que se pueda ejecutar un proceso de evaluación y rehabilitación individualizado de acuerdo a las necesidades de cada paciente.</p>
            </div>
          </Col>
          <Col className='col-md-4'>
            <div className='cardPreguntas'>
              <h3 className='h3TitulosPreguntas'>¿CÓMO PUEDO OBTENER UNA CITA?</h3><hr />
              <p className='pSutitulosPreguntas'>Puedes agendar una cita por vía telefónica o por medio de nuestro chat de Whatsapp.</p>
            </div>
          </Col>          
          <Col className='col-md-4'>
            <div className='cardPreguntas'>
              <h3 className='h3TitulosPreguntas'>¿QUÉ MEDIOS DE PAGO PUEDO UTILIZAR?</h3><hr />
              <p className='pSutitulosPreguntas'>Recibimos medios de pago por medio de consignaciones bancarias,nequi y daviplata</p>
            </div>
          </Col>
        </Row>
      </div>
      
      <div>
      <Row>
        <Col className='col-md-4'>
          <div className='cardPreguntas'>
            <h3 className='h3TitulosPreguntas'>¿CUÁL ES SU COBERTURA DE LOS SERVICIO?</h3><hr />
            <p className='pSutitulosPreguntas'>Contamos con cobertura en todas las zonas de la ciudad de Bogotá.</p>
          </div>
        </Col>
          <Col className='col-md-4'>
            <div className='cardPreguntas'>
              <h3 className='h3TitulosPreguntas'>¿ QUÉ HORARIOS TIENEN DISPONIBLE? </h3><hr />
              <p className='pSutitulosPreguntas'>Manejamos horarios flexibles, de lunes a viernes de 7:00 AM a 17:00 PM, y los días sábados de 8:00 AM a 12:00 PM.</p>
            </div>
          </Col>          
        </Row>
      </div>
    </div>

  )
}

export default PreguntasCardBox