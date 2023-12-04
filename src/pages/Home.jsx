import React from 'react';
import { Col, Row } from 'react-bootstrap';
import docD from "../image/doctora/doctora_d.jpg";
import doctoraDos from "../image/doctora/DOCTORA2_F.jpg"
import correo from "../icon/correoAzul.png";
import horario from "../icon/horarioAtencion.png";
import telefono from "../icon/telefoAzul.png";
import PreguntasCardBox from '../Components/Preguntas/PreguntasCardBox';
import RedesSociales from '../Components/RedesSociales/RedesSociales';
import "../Components/Estilos/Home.css"
 
function Home() {
  return ( 
    <div id='div'>
      <h1 id='fono'>NOSOTROS</h1>
      <Row>
        <Col className="col-md-4" >
          <img src={docD} alt="" className='docD' id='docD' />   
        </Col>
        <Col className="col-md-4" >
          <img src={doctoraDos} alt="" id='doctoraDos' />   
        </Col>
        <Col >
          <div className="col-md-4">
            <p id='parrafoPrincipal' className='parafoColor'>El centro Foaudiologico es una organización que brinda servicios de fonoaudiología a personas de todas las edades y orígenes. Los servicios de fonoaudiología se centran en la evaluación, el diagnóstico y el tratamiento de trastornos de la comunicación, el habla, el lenguaje, la audición y la deglución. pueden desempeñar un papel importante en la mejora de la calidad de vida de las personas con trastornos de la comunicación. Al proporcionar servicios de evaluación, diagnóstico y tratamiento, las empresas de fonoaudiología pueden ayudar a las personas a desarrollar sus habilidades de comunicación y a participar plenamente en la sociedad.</p>
          </div>
        </Col>
      </Row>

      <p className='parrafo'>Somos una de las empresas de fonoaudiología que desempeña un papel importante en la mejora de la calidad de vida de las personas con trastornos de la comunicación. Al proporcionar servicios de evaluación, diagnóstico y tratamiento, las empresas de fonoaudiología pueden ayudar a las personas a desarrollar sus habilidades de comunicación y a participar plenamente en la sociedad.</p>

      <Row id='Row2'>
        <Col className="col-md-4">  
          <div className='card'> 
            <img className='icons' src={telefono} />          
            <h3 className='datosTitulo'>CONTÁCTOS</h3>
            <p className='numberphome'>3102384126 </p>
            <p className='numberphome'>3145968515</p>
          </div>        
        </Col>

        <Col className="col-md-4">
          <div className='card'>
            <img className='icons' src={correo} />
            <h3 className='datosTitulo'>CORREO ELECTRONICO</h3>
            <p className='numberphome'>centrofonorehabil@gmail.com</p>
            <p className='numberphome'>admicfonor@gmail.com</p>
          </div>        
        </Col>
        
        <Col className="col-md-4">
          <div className='card'>
            <img className='icons' src={horario}/>
            <h3 className='datosTitulo'>HORARIOS</h3>
            <p className='numberphome'>Lunes a Viernes 7:00 a 17:00 </p>
            <p className='numberphome'>Sábado 8:00 a 12:00</p>
          </div>        
        </Col>
      </Row>

      <h1 className='sobreNosotros'>SOBRE NOSOTROS</h1>
      <p className='parrafo'>Creemos que el servicio es una expresión del amor y la compasión. Cuando servimos a los demás, estamos poniendo nuestro corazón en acción. Estamos demostrando que nos importan, que nos preocupamos por su bienestar.</p>

      <PreguntasCardBox />
      <RedesSociales />
    </div>
  )
}

export default Home



// https://josetxu.com/flip-cards-o-tarjetas-giratorias-con-css3/