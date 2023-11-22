import React from 'react'

function TarjetasAcordion(props) {
  return (
    <div>
        <h2 className="card-title, titleH2">{props.title}</h2>
        <p  className="card-description, description">{props.description}</p>
    </div>
  )
}

export default TarjetasAcordion