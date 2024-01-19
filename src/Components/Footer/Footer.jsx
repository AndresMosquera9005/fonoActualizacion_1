import React from 'react'
import lc from "../../image/logo/logoletra COLOR azul fondo blanco.jpg"
import "../Estilos/Home.css"

function Footer() {
  return (
    <div id='fondoFooter'>
      <hr />
      {/* <h1>Centro fonoaudiologico</h1> */}
      <img src={lc} alt="" id='imagenFooterLb' />
      <p id='CENTROFONO'>Centro fonoaudiologico.</p>
      <p id='NUMNIT'>NIT 901611523.</p>
      <p id='ELABORADO'>Todos los derechos reservados.</p>
    </div>
  )
}

export default Footer