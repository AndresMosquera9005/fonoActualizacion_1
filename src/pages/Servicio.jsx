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
              description ="AYUDA A DESARROLLAR FUNCIONES Y HABILIDADES COGNITIVAS, EMOCIONALES, SENSORIALES Y MOTORAS, PARA QUE EL NIÑO O NIÑA PUEDA DESEMPEÑARSE EFICIENTEMENTE.
              " 
            />
          </Col>

          <Col col-md-4 >
            <Card 
              img = {Fonoaudiologia}
              title = "FONOAUDIOLOGÍA"
              description ="ES UNA DICIPLINA DE LA SALUD QUE ESTUDIA LA COMUNICACIÓN HUMANA Y LA DICIPLINA COMUNICATIVA."
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Card 
              img = {Fisioterapia}
              title = "FISIOTERAPIA"
              description ="DESARROLLA TÉCNICAS APLICADAS PARA HABILITAR LA SECUENCIA MOTORA, RECUPERAR FUNCIONES DE LOCOMOCIÓN Y/O REHABILITAR EL SISTEMA OSTEOMUSCULAR, PARTIENDO DE LA ACTIVIDAD REFLEJA, EL TONO MUSCULAR Y LOS PATRONES FUNCIONALES INDIVIDUALES E INTEGRALES."
            />
          </Col>
          <Col>
            <Card 
              img = {padres}
              title = "TALLER A PADRES"
              description ="APOYO PEDAGÓGICO DONDE SE LE FACILITA A LAS FAMILIAS NUEVAS TÉCNICAS Y ESTRATEGIAS, QUE FUNCIONAN COMO RECURSOS PARA LA EDUCACIÓN DE SUS HIJOS."
            />
          </Col>
          <Col className='col-md-4'>
            <Card 
              img = {docentes}
              title = "TALLER A DOCENTES"
              description = "TIENEN COMO PROPÓSITO APORTAR ELEMENTOS QUE FORTALEZCAN EL DISEÑO DE ESTRATEGIAS DIDÁCTICAS PARA FAVORECER EL PROCESO DE ENSEÑANZA DE LA LECTURA Y ESCRITURA Y LAS MATEMATICAS POR PARTE DE LAS MAESTRAS Y MAESTROS. "
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Card
              img = {asesoriaG}
              title = "ASESORÍA GRAUTITA"
              description = "SE OFRECE SIN COSTO  A LAS PERSONAS QUE LO NECESITAN. PUEDE OFRECERSE POR PARTE DE LAS ORGANIZACIONES GUBERNAMENTALES, NO GUBERNAMENTALES, O PRIVADOS."
            />          
          </Col>
          <Col>
          <Card
              img = {asosacion}
              title = "ASOCIONES DE IPS"
              description = "SON DOS TIPOS DE ORGANIZACIONES QUE PUEDEN TRABAJAR JUNSTAS PARA MEJORAR LA ATENCIÓN MÉDICA."
            />  
          </Col>
          <Col>
            <Card
              img = {asosacion}
              title = "CONVENIOS CON EMPRESAS"
              description = "ES UN ACUERDO ENTRE UNA INSTITUCIÓN EDUCATIVA Y UNA EMPRESA QUE TIENE COMO OBJETIVO ESTABLECES UNA RELACIÓN DE COLABORACIÓN ENTRE AMBAS PARTES."
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card 
              img = {domicilio}
              title = "SERVICIOS DOMICILIARIOS "
              description = "LOS SERVICIOS DOMICILIARIOS SON LOS SERVICIOS DE ATENCIÓN MÉDICA, SOCIAL O DE APOYO QUE SE BRINDAN EN EL HOGAR DE UNA PERSONA."
            />
          </Col>
        </Row>
      </div>
      <RedesSociales />
      <Footer />
    </>
  )
}

export default Servicio