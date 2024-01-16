import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Footer from '../Components/Footer/Footer'
import RedesSociales from '../Components/RedesSociales/RedesSociales'
import docD from "../image/doctora/doctora_d.jpg";
import doctoraDos from "../image/doctora/DOCTORA2_F.jpg"
import "../Components/Estilos/Home.css"

function Nosotros() {
  return (
    <div>
      <h1 id='fono'>NOSOTROS</h1> 
      <Row>
        <Col className="col-md-4" >
          <img src={docD} alt="" className='docD' id='docD' />   
        </Col>
        <Col>
          <p id='idTatianaParrafo'>LEYDY TATIANA PARRA VICTORIA Fonoaudióloga especialista en gerencia de la calidad en salud. Amplia experencia en coordinación de preocesos administrativos y terapéuticos del centro Fonoaudiólogico de rehabilitación. </p>
        </Col>
      </Row>
      <div className='divDoctoraDos'>
        <Row>
          <Col className="col-md-4" >
            <p id='parrafoPrincipal' className='parafoColor'>DIANA ERAZO MUÑOZ Terapeuta ocupacional líder en procesos de apoyo pedagógico. Amplia experencia en procesos terapéuticos de rehabilitación e inclución educatica. Directora del centro fonoaudiológico de rehabilitación.</p>
          </Col>
          <Col >
            <div className="col-md-4">
              <img src={doctoraDos} alt="" id='doctoraDos' />     
            </div>
          </Col>
        </Row>

      </div> 

    <RedesSociales />
    <Footer />
    </div>
  )
}

export default Nosotros