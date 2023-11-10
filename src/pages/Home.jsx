import React from 'react';
import "../Components/Estilos/Home.css";
import { Col, Row } from 'react-bootstrap';
import docD from "../image/doctora/doctora_d.jpg";
import correo from "../icon/correo.jpg";
import horario from "../icon/horario2.jpg";
import telefono from "../icon/telefono.png";

function Home() {
  return (
    <div id='div'>
      <h1 id='fono'>Fonoaudilogía</h1>
      <Row>
        <Col col-md-4 >
          <img src={docD} alt="" className='docD' />
          <div className='parrafoUno'>
            <p id='parrafoUno' className='parafoColor'>El centro Foaudiologico es una organización que brinda servicios de fonoaudiología a personas de todas las edades y orígenes. Los servicios de fonoaudiología se centran en la evaluación, el diagnóstico y el tratamiento de trastornos de la comunicación, el habla, el lenguaje, la audición y la deglución. pueden desempeñar un papel importante en la mejora de la calidad de vida de las personas con trastornos de la comunicación. Al proporcionar servicios de evaluación, diagnóstico y tratamiento, las empresas de fonoaudiología pueden ayudar a las personas a desarrollar sus habilidades de comunicación y a participar plenamente en la sociedad.</p>
          </div>
        </Col>
      </Row>

      <p className='parrafo'>Somos una de las empresas de fonoaudiología que desempeña un papel importante en la mejora de la calidad de vida de las personas con trastornos de la comunicación. Al proporcionar servicios de evaluación, diagnóstico y tratamiento, las empresas de fonoaudiología pueden ayudar a las personas a desarrollar sus habilidades de comunicación y a participar plenamente en la sociedad.</p>

      <Row id='Row2'>
        <Col col-md-4>  
          <div className='card'> 
            <img className='icons' src={telefono} />          
            <h3 className='datosTitulo'>Contáctos</h3>
            <p className='numberphome'>3102384126 - 3145968515</p>
          </div>        
        </Col>

        <Col col-md-4>
         <ai AiOutlinePhone />
          <div className='card'>
            <img className='icons' src={correo} />
            <h3 className='datosTitulo'>Correo electronico</h3>
            <p className='numberphome'>centrofonorehabil@gmail.com</p>
          </div>        
        </Col>
        
        <Col col-md-4>
          <div className='card'>
            <img className='icons' src={horario}/>
            <h3 className='datosTitulo'>Horarios</h3>
            <p className='numberphome'>Lunes a Viernes 7:00 a 17:00 </p>
            <p className='numberphome'>Sábado 8:00 a 12:00</p>
          </div>        
        </Col>
      </Row>

      <h1>Sobre nosotros</h1>
      <p className='parrafo'>Creemos que el servicio es una expresión del amor y la compasión. Cuando servimos a los demás, estamos poniendo nuestro corazón en acción. Estamos demostrando que nos importan, que nos preocupamos por su bienestar.</p>

    </div>
  )
}

export default Home