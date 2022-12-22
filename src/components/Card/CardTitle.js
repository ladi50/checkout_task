import React from "react";

import "./Card.scss";

const CardTitle = ({ title, style, icon }) => {
  return (
    <div className="card__title" style={style}>
      <div className="card__title-title">{title}</div>

      {icon && icon}
    </div>
  );
};

export default CardTitle;
