import React from "react";

import "./Button.scss";

const Button = ({ title, onClick, type, disabled, style, className }) => {
  return (
    <button
      className={`button ${disabled ? "button__disabled" : ""} ${className}`}
      style={style}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
