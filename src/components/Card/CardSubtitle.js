import React from "react";

import "./Card.scss";

const Cardsubtitle = ({ subtitle, style }) => {
  return (
    <div className="card__subtitle" style={style}>
      {subtitle}
    </div>
  );
};

export default Cardsubtitle;
