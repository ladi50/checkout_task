import React from "react";

import "./Card.scss";

const CardText = ({ left, right, style }) => {
  return (
    <div className="card__text" style={style}>
      {left && <div>{left}</div>}
      {right && <div>{right}</div>}
    </div>
  );
};

export default CardText;
