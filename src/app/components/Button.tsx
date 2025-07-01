import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-button-secondary rounded-full px-5 py-3 dm-sans font-bold hover:text-white hover:bg-button-primary-hover  text-sm transition-colors duration-300">
      {text}
    </button>
  );
};

export default Button;
