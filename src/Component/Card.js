import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  return (
    <div className="mainDiv">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className="title">
            <h3>{item.title}</h3>
          </div>
          <div className="img">
            <img src={item.imgUrl} alt={item.title} />
          </div>
          <div className="info">
            <h6>{item.information}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
