import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;



