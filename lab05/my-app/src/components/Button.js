import React from "react";
const Button = ({ title, onClick, disabled, className }) => {
    return (<button onClick={onClick} disabled={disabled} className={`${className} ${disabled ? "button-disabled" : ""}`}>
      {title}
    </button>);
};
export default Button;
