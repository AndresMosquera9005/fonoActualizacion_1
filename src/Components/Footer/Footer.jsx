import React from 'react'
import lc from "../../image/logo/logoletra COLOR azul fondo blanco.jpg"
import "../Estilos/Home.css"

function Footer() {
  return (
    <div>
      <hr />
      {/* <h1>Centro fonoaudiologico</h1> */}
      <img src={lc} alt="" id='imagenFooterLb' />
      <p id='NIT'>NIT 901611523</p>
      <p id='DERECHOS'>Todos los derechos reservados.</p>
      <p id='ELABORADO'>Elaborado por Javier Mosquera</p>
    </div>
  ) 
}

export default Footer