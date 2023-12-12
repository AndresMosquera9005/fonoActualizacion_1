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
import "../Components/Servicios/Card.css"

const Servicio = () => {
  return (
    <>    
      <div id='div' className='tamañosImagenes'>
        <h1 className='tituloServicio'>SERVICIOS</h1>
        <Row>
          <Col col-md-4>
            <Card
              img = {respiracion}
              title = "TERAPIA RESPIRATORIA"
              description ="DESARROLLA TÉCNICAS APLICADAS PARA HABILITAR LA SECUENCIA MOTORA, RECUPERAR FUNCIONES DE LOCOMOCIÓN Y/O REHABILITAR EL SISTEMA OSTEOMUSCULAR, PARTIENDO DE LA ACTIVIDAD REFLEJA, EL TONO MUSCULAR Y LOS PATRONES FUNCIONALES INDIVIDUALES E INTEGRALES." 
            />
          </Col>
          <Col col-md-4>
            <Card 
              img = {terapiaLenguaje}
              title = "TERAPIA LENGUAJE"
              description ="Esta se entiende como la capacidad que tiene el ser humano de comprender lo que escucha o lee y cómo usa las palabras para comunicar lo que piensa." 
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
              description ="EVALÚA E INTERVIENE EN TODOS AQUELLOS ASPECTOS COGNITIVOS, EMOCIONALES O CONDUCTUALES QUE PUEDAN ESTAR INTERFIRIENDO EN EL ADECUADO AJUSTE DEL NIÑO EN SU MEDIO. " 
            />
          </Col>

          <Col col-md-4 >
            <Card 
              img = {TerapiaOcupacional}
              title = "TERAPIA OCUPACIONAL"
              description ="AYUDA A DESARROLLAR
              FUNCIONES Y HABILIDADES COGNITIVAS, EMOCIONALES, SENSORIALES Y MOTORAS, PARA QUE EL NIÑO O NIÑA PUEDA DESEMPEÑARSE EFICIENTEMENTE.
              " 
            />
          </Col>

          <Col col-md-4 >
            <Card 
              img = {Fonoaudiologia}
              title = "FONOAUDIOLOGÍA"
              description ="Es una disciplina de la salud que estudia la comunicación humana y la discapacidad comunicativa."
            />
          </Col>
        </Row>

        <Row>
          <Col col-md-4>
            <Card 
              img = {Fisioterapia}
              title = "FISIOTERAPIA"
              description ="DESARROLLA TÉCNICAS APLICADAS PARA HABILITAR LA SECUENCIA MOTORA, RECUPERAR FUNCIONES DE LOCOMOCIÓN Y/O REHABILITAR EL SISTEMA OSTEOMUSCULAR, PARTIENDO DE LA ACTIVIDAD REFLEJA, EL TONO MUSCULAR Y LOS PATRONES FUNCIONALES INDIVIDUALES E INTEGRALES."
            />
          </Col>
          <Col col-md-4>
            <Card 
              img = {padres}
              title = "TALLER A PADRES"
              description ="Apoyo pedagógico donde se le facilita a las familias nuevas técnicas y estrategias, que funcionan como recursos para la educación de sus hijos."
            />
          </Col>
          <Col col-md-4>
            <Card 
              img = {docentes}
              title = "TALLER A DOCENTES"
              description = "Tienen como propósito aportar elementos que fortalezcan el diseño de estrategias didácticas para favorecer el proceso de enseñanza de la lectura y escritura y las matemáticas por parte de las maestras y maestros."
            />
          </Col>
        </Row>

        <Row>
          <Col col-md-4>
            <Card
              img = {asesoriaG}
              title = "ASESORÍA GRAUTITA"
              description = "se ofrece sin costo a las personas que lo necesitan. Puede ofrecerse por parte de organizaciones gubernamentales, no gubernamentales o privadas."
            />          
          </Col>
          <Col col-md-4>
          <Card
              img = {asosacion}
              title = "ASOCIONES DE IPS"
              description = "Son dos tipos de organizaciones que pueden trabajar juntas para mejorar la atención médica."
            />  
          </Col>
          <Col col-md-4>
            <Card
              img = {asosacion}
              title = "CONVENIOS CON EMPRESAS"
              description = "Es un acuerdo entre una institución educativa y una empresa que tiene como objetivo establecer una relación de colaboración entre ambas partes."
            />
          </Col>
        </Row>
        <Row>
          <Col col-md-4>
            <Card 
              img = {domicilio}
              title = "SERVICIOS DOMICILIARIOS "
              description = "Los servicios domiciliarios son servicios de atención médica, social o de apoyo que se brindan en el hogar de una persona."
            />
          </Col>
        </Row>
      </div>
      <RedesSociales />
    </>
  )
}

export default Servicio