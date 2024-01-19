import React from 'react'
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
import RedesSociales from '../Components/RedesSociales/RedesSociales';
import Footer from '../Components/Footer/Footer';
import "../Components/Servicios/Card.css"

const Servicio = () => {
  return (
    <>    
      <div id='div' className='tamañosImagenes'>
        <h1 id='SERVICIOS' className='tituloServicio'>SERVICIOS</h1>
        <Row> 
          <Col col-md-4>
            <Card
              img = {respiracion}
              title = "TERAPIA RESPIRATORIA"
              description ="Desarrolla técnicas aplicadas para habilitar la secuencia motora, recuperar funciones de locomoción y/o rehabilitar el sistema osteomuscular, partiendo de la activida refleja, el tono muscular y los patrones funcionales individuales e integral." 
            />
          </Col>
          <Col col-md-4>
            <Card 
              img = {domicilio}
              title = "SERVICIOS DOMICILIARIOS "
              description = "Los servicios domiciliarios son los servicios de atención médica, social o de apoyo que se brindan en el hogar de una persona."
            />
          </Col>
          
          <Col col-md-4>
            <Card 
              img = {grado}
              title = "ORIENTACIÓN VOCACIONAL A ESTUDIANTES DE GRADO 11"
              description ="Es un proceso que ayuda a los estudiantes a tomar decisiones informadas sobre su futuro profesional. Para los estudiantes de grado 11, este proceso es especialmente importante, ya que están a punto de tomar la decisión de qué carrera estudiar."
            />
          </Col>
        </Row>        
        
        <Row>
          <Col col-md-4 >
            <Card 
              img = {psicologia}
              title = "PSICOLOGÍA" 
              description ="Evalúa e interviene en todos aquellos aspectos cognitivos, emocionales o conductuales que puedan estar interfiriendo en el adecuado ajuste del niño en su medio." 
            />
          </Col>

          <Col col-md-4 >
            <Card 
              img = {TerapiaOcupacional}
              title = "TERAPIA OCUPACIONAL"
              description ="Ayuda a desarrollar funciones y habilidades cognitivas, emocionales, sensoriales y motoras, para que el niño o niña pueda desempeñarse eficientemente." 
            />
          </Col>

          <Col col-md-4 >
            <Card 
              img = {terapiaLenguaje}
              title = "FONOAUDIOLOGÍA"
              description ="Es una diciplina de la salud que estudia la comunicación humana y la disciplina comunicativa."
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Card 
              img = {Fisioterapia}
              title = "FISIOTERAPIA"
              description ="Desarrolla técnicas aplicadas para habilitar la secuencia motora, recuperar funciones de locomoción y/o rehabilitar el sistema osteomuscular, partiendo de la actividad refleja, el tono muscular y los patrones funcionales individuales e integrales."
            />
          </Col>
          <Col>
            <Card 
              img = {padres}
              title = "TALLER A PADRES"
              description ="Apoyo pedagógico donde se le facilita a las familias nuevas técnicas y estrategias, que funcionan como recursos para la educación de sus hijos."
            />
          </Col>
          <Col className='col-md-4'>
            <Card 
              img = {docentes}
              title = "TALLER A DOCENTES"
              description = "Tienen como propósito aportar elementos que fortalezcan el diseño de estrategias didácticas para favorecer el proceso de enseñanza de la lectura y escritura y las matematicas por parte de las maestras y maestros."
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Card
              img = {asesoriaG}
              title = "ASESORÍA GRAUTITA"
              description = "Se ofrece sin costoa las personas que lo necesitan. puede ofrecerse por parte de las organizaciones gubernamentales, no gubernamentales, o privados."
            />          
          </Col>
          {/* <Col>
            <Card 
              img = {domicilio}
              title = "SERVICIOS DOMICILIARIOS "
              description = "Los servicios domiciliarios son los servicios de atención médica, social o de apoyo que se brindan en el hogar de una persona."
            />
          </Col> */}
          {/* <Col>
          <Card
              img = {asosacion}
              title = "ASOCIONES DE IPS"
              description = "Son dos tipos de organizaciones que pueden trabajar junstas para mejorar la atención médica."
            />  
          </Col>
          <Col>
            <Card
              img = {asosacion}
              title = "CONVENIOS CON EMPRESAS"
              description = "Es un acuerdo entre una institución educativa y una empresa que tiene como objetivo estableces una relación de colaboración entre ambas partes."
            />
          </Col> */}
        </Row>
        {/* <Row>
          <Col>
            <Card 
              img = {domicilio}
              title = "SERVICIOS DOMICILIARIOS "
              description = "Los servicios domiciliarios son los servicios de atención médica, social o de apoyo que se brindan en el hogar de una persona."
            />
          </Col>
        </Row> */}
      </div>
      <RedesSociales />
      <Footer /> 
    </>
  )
} 

export default Servicio