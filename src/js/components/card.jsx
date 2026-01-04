import React from "react";

const Card = ({ title, text, buttonLabel, buttonUrl, imgUrl }) => {
  return (
    <div className="card h-100">
      <img src={imgUrl} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{text}</p>
        <a href={buttonUrl} className="btn btn-primary mt-2">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Card;