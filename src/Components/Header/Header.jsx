import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import "./Header.css"
import lb from '../Js/LETRAS_BLANCO.jpg'

const Header = () => {
  return (    
    <div className='Menu'>
      <img src={lb} id='Logo'/>
      <nav id='ListaMenu'>
        <ul>
          <li>
            <Link to="/"><p>Inicio</p></Link> 
          </li>
          <li>
            <Link to="/servicio"><p>Servicio</p> </Link>
          </li>
          <li>
            <Link to="/misionVision"><p>Mision y Vision</p></Link>
          </li>
          <li>
            <Link to="/portafolio"><p>Portafolio</p></Link>
          </li>          
        </ul>          
      </nav>
      <Outlet/>
    </div>
  )
}

export default Header
