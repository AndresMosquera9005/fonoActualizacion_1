import React from 'react'

const CardPreguntas =(props) => {
    return (
      <div className="card">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    )
}
export default CardPreguntas