import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import lb from '../../image/logo/logoletra_COLOR_azul_sinFondo.png'
import iconoCasaAzul from "../../icon/casaAzul.png"
import "./Header.css"

const Header = () => {
  return (    
    <div className='Menu' id="fondoHeader"> 
      <img src={lb} id='LogoHeader'/>
      <div>
        <img src={iconoCasaAzul} id='iconoCasa' />
      </div>
      <nav id='ListaMenu'>
        <ul>
          <li>
            <Link to="/" className='buttonHeader'>Inicio</Link> 
          </li>
          <li>
            <Link to="/nosotros" className='buttonHeader'>Nosotros</Link>
          </li>
          <li>
            <Link to="/servicio" className='buttonHeader'>Servicio </Link>
          </li>
          {/* <li>
            <Link to="/misionVision" className='buttonHeader'>Mision y Vision</Link>
          </li> */}
          <li>
            <Link to="/portafolio" className='buttonHeader'>Portafolio</Link>
          </li>          
        </ul>          
      </nav>
      <Outlet/>
    </div>    
  ) 
}

export default Header
