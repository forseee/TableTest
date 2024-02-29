import classNames from "classnames";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div>
      {label && (
        <label className="ml-2" htmlFor={`${label}-field`}>
          {label}
        </label>
      )}
      <input
        className={classNames(
          "p-2 rounded-md border-gray-400 border-2 block",
          className
        )}
        id={label ? `${label}-field` : `${props.type}`}
        {...props}
      />
    </div>
  );
};

export default Input;
