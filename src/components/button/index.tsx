import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button className="py-1 px-5 bg-gray-200 rounded-xl hover:bg-gray-300" {...props}>
      {text}
    </button>
  );
};

export default Button;
