import React from 'react';
import { Col, Row } from 'react-bootstrap';
//import docD from "../image/doctora/doctora_d.jpg";
//import docD from "../image/doctora/doc_recortado.png";
//import doctoraDos from "../image/doctora/DOCTORA2_F.jpg"
import correo from "../icon/correoAzul.png";
import horario from "../icon/horarioAtencion.png";
import telefono from "../icon/telefoAzul.png";
import PreguntasCardBox from '../Components/Preguntas/PreguntasCardBox';
import RedesSociales from '../Components/RedesSociales/RedesSociales';
import Footer from '../Components/Footer/Footer';
import Mision from '../MisionVisionNosotros/Mision';
import Vision from '../MisionVisionNosotros/Vision';
import Valoracion from '../MisionVisionNosotros/ValoracionCompañia';
import "../Components/Estilos/Home.css"
 
function Home() {
  return ( 
    <div id='div'>
      <Mision />
      <Vision />
      <Valoracion />

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

      <PreguntasCardBox />
      <RedesSociales />
      <div id='footerHome'>
        <Footer />
      </div>
    </div>
  )
} 

export default Home



// https://josetxu.com/flip-cards-o-tarjetas-giratorias-con-css3/