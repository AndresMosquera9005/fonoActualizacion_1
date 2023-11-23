import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import lb from '../../image/logo/logoletra COLOR azul fondo blanco.jpg'
import "./Header.css"

const Header = () => {
  return (    
    <div className='Menu' id="fondoHeader">
      <img src={lb} id='Logo'/>
      <nav id='ListaMenu'>
        <ul>
          <li>
            <Link to="/"><button className='buttonHeader'>Inicio</button></Link> 
          </li>
          <li>
            <Link to="/servicio"><button className='buttonHeader'>Servicio</button> </Link>
          </li>
          <li>
            <Link to="/misionVision"><button className='buttonHeader'>Mision y Vision</button></Link>
          </li>
          <li>
            <Link to="/portafolio"><button className='buttonHeader'>Portafolio</button></Link>
          </li>          
        </ul>          
      </nav>
      <Outlet/>
    </div>
  )
}

export default Header
