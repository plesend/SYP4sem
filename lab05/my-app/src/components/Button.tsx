import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, disabled, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`${className} ${disabled ? "button-disabled" : ""}`}>
      {title}
    </button>
  );
};

export default Button;
