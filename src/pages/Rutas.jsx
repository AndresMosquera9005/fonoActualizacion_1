import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Rutas = () => {
  return (
    <div>
        <h1>Rutas</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="">Nosotros</Link>
                </li>
                <li>
                    <Link>Portafolio</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Rutas