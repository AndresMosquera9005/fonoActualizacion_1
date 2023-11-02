import React from 'react'
import "../Components/Servicios/Card.css"
import terapiaLenguaje from "../icon/icon1.png"
import respiracion from "../icon/icon2.png"
import pareja from "../icon/icon3.png"
import { Col, Row } from 'react-bootstrap';
import Card from '../Components/Servicios/Card'

const Servicio = () => {
  return (
    <>
      <h1>Servicio</h1>
      <div id='div' className='tamañosImagenes'>
        <Row>
          <Col col-md-4 >
            <Card
              img = {respiracion}
              title = "Terapia Respiratoria"
              description ="La terapia ocupacional adopta un enfoque centrado en la persona / cliente que se centra en la ocupación, incluido el desempeño ocupacional y el compromiso ocupacional." 
            />
          </Col>
          <Col col-md-4>
            <Card 
              img = {terapiaLenguaje}
              title = "Terapia lenguaje"
              description ="Esta se entiende como la capacidad que tiene el ser humano de comprender lo que escucha o lee y cómo usa las palabras para comunicar lo que piensa." 
            />
          </Col>
          <Col col-md-4 >
            <Card 
              img = {pareja}
              title = "Terapia ocupacional"
              description ="Esta se entiende como la capacidad que tiene el ser humano de comprender lo que escucha o lee y cómo usa las palabras para comunicar lo que piensa." 
            />
          </Col>
        </Row>    
      </div>
    </>
  )
}

export default Servicio