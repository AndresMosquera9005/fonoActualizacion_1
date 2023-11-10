import React from 'react'
import "../Components/Servicios/Card.css"
import { Col, Row } from 'react-bootstrap';
import Card from '../Components/Servicios/Card'
import terapiaLenguaje from "../icon/icon1.png"
import respiracion from "../icon/icon2.png"
import pareja from "../icon/icon3.png"
import psicologia from "../icon/Psicología.png"
import TerapiaOcupacional from "../icon/terapia ocupacioonal.png"
import Fonoaudiologia from "../icon/fonoaudiologia2.png"
import Fisioterapia from "../icon/Fisioterapia.png"
import padres from "../icon/padres.png"
import grado from "../icon/Orientación vocacional a estudiantes de grado 11.png"
import docentes from "../icon/Taller a docentes.png"
import asesoriaG from "../icon/Asesoría gratuita.png"
import asosacion from "../icon/imagesAsociaciones e IPS.png"
import domicilio from "../icon/domicilio.jpg"

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
          <Col col-md-4>
            <Card 
              img = {grado}
              title = "Orientación vocacional a estudiantes de grado 11"
              description ="Es un proceso que ayuda a los estudiantes a tomar decisiones informadas sobre su futuro profesional. Para los estudiantes de grado 11, este proceso es especialmente importante, ya que están a punto de tomar la decisión de qué carrera estudiar."
            />
          </Col>
        </Row>        
        
        <Row>
          <Col col-md-4 >
            <Card 
              img = {psicologia}
              title = "Psicología"
              description ="Disciplina científica que estudia y analiza la conducta del ser humano, así como el análisis de los procesos mentales de individuos y grupos." 
            />
          </Col>

          <Col col-md-4 >
            <Card 
              img = {TerapiaOcupacional}
              title = "Terapia ocupacional"
              description ="Es el uso terapéutico de las actividades de cuidado, trabajo y juego para incrementar la independencia funcional, aumentar el desarrollo y prevenir la incapacidad; puede incluir la adaptación de tareas o del entorno para alcanzar la máxima independencia y para aumentar la calidad de vida." 
            />
          </Col>

          <Col col-md-4 >
            <Card 
              img = {Fonoaudiologia}
              title = "Fonoaudiología"
              description ="Es una disciplina de la salud que estudia la comunicación humana y la discapacidad comunicativa."
            />
          </Col>
        </Row>

        <Row>
          <Col col-md-4>
            <Card 
              img = {Fisioterapia}
              title = "Fisioterapia"
              description ="Es una disciplina de la salud que estudia la comunicación humana y la discapacidad comunicativa."
            />
          </Col>
          <Col col-md-4>
            <Card 
              img = {padres}
              title = "Taller a padres"
              description ="Apoyo pedagógico donde se le facilita a las familias nuevas técnicas y estrategias, que funcionan como recursos para la educación de sus hijos."
            />
          </Col>
          <Col col-md-4>
            <Card 
              img = {docentes}
              title = "Taller a docentes"
              description = "Tienen como propósito aportar elementos que fortalezcan el diseño de estrategias didácticas para favorecer el proceso de enseñanza de la lectura y escritura y las matemáticas por parte de las maestras y maestros."
            />
          </Col>
        </Row>

        <Row>
          <Col col-md-4>
            <Card
              img = {asesoriaG}
              title = "asesoría gratuita"
              description = "se ofrece sin costo a las personas que lo necesitan. Puede ofrecerse por parte de organizaciones gubernamentales, no gubernamentales o privadas."
            />          
          </Col>
          <Col col-md-4>
          <Card
              img = {asosacion}
              title = "Asociaciones e IPS"
              description = "Son dos tipos de organizaciones que pueden trabajar juntas para mejorar la atención médica."
            />  
          </Col>
          <Col col-md-4>
            <Card
              img = {asosacion}
              title = "Convenios con empresas"
              description = "Es un acuerdo entre una institución educativa y una empresa que tiene como objetivo establecer una relación de colaboración entre ambas partes."
            />
          </Col>
        </Row>
        <Row>
          <Col col-md-4>
            <Card 
              img = {domicilio}
              title = "Servicios domiciliarios"
              description = "Los servicios domiciliarios son servicios de atención médica, social o de apoyo que se brindan en el hogar de una persona."
            />
          </Col>
        </Row>

      </div>
    </>
  )
}

export default Servicio