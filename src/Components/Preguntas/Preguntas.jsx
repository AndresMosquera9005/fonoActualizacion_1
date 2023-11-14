import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CardPreguntas from './CardPreguntas'

function Preguntas() {

  return (
    <div>
        <h1>Preguntas frecuentes</h1>
        <div>
            <Row>
                <Col col-md-12="value.toString()">
                    <CardPreguntas
                        title ="¿Cómo puede ayudarme un fonoaudiólogo particular?"
                        description = "Contar con un fonoaudiólogo particular permite el vínculo paciente y profesional de manera que se pueda ejecutar un proceso de evaluación y rehabilitación individualizado de acuerdo a las necesidades de cada paciente."
                        
                    />                
                </Col>               
            </Row>

            <Row>
                <Col col-md-12="value.toString()">
                    <CardPreguntas
                        title = "¿Cómo puedo obtener una cita?"
                        description = "Puedes agendar una cita por vía telefónica o por medio de nuestro chat de Whatsapp."
                    />
                </Col>                
            </Row>
            <Row>
                <Col col-md-12="value.toString()">
                    <CardPreguntas
                        title = "¿Cuál es su cobertura del servicio?"
                        description = "Contamos con cobertura en todas las zonas de la ciudad de Bogotá"
                    />
                </Col>
                    
            </Row>
        </div>
    </div>
  )
}

export default Preguntas