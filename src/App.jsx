import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import MisionVision from "./pages/MisionVision.jsx"
import Portafolio from "./pages/Portafolio.jsx"
import Servicio from "./pages/Servicio.jsx"
import Header from './Components/Header/Header.jsx'

const App = () => {
  
  return(
    <Router>
    <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/misionVision" element={ <MisionVision/> } />
          <Route path="/portafolio" element={ <Portafolio/>  } />
          <Route path="/servicio" element={ <Servicio/>  } />
        </Routes>
      </Suspense>
    </Router>    
  )
  
}

export default App
