import React from 'react'
import "../Estilos/Home.css"

function PreguntasCardBox() {
  return (
    <div class="boxesContainer, margenes">

      <div class="cardBox">
        <div class="card">
          <div class="front">
            <h3 className='todoH3'>Metodo de pago</h3>
            <p>Nequi, daviplata davivienda</p>
          </div>          
        </div>
      </div>

      <div class="cardBox">
        <div class="card">
          <div class="front">
            <h3>Card Two</h3>
            <p>Hover to flip</p>
            <strong>&#x21bb;</strong>
          </div>
          <div class="back">
            <h3>Back Side Two</h3>
            <p>Content in card two</p>
            <a href="#">Button 2</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreguntasCardBox