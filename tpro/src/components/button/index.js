import React from "react";

const Button = ({ variant, size, disabled, onClick, icon, children }) => {
  const buttonClasses = `inline-flex items-center justify-center font-semibold leading-7 border border-transparent rounded-md focus:outline-none transition-all ${
    disabled ? "opacity-70 cursor-not-allowed" : ""
  } ${variantClasses[variant]} ${sizeClasses[size]}`;

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

const variantClasses = {
  primary: "text-white bg-blue-500 hover:bg-blue-500/90",
  ghost: "text-black bg-transparent hover:bg-gray-100",
};

const sizeClasses = {
  sm: "p-1 text-xs",
  md: "px-4 py-1 text-sm",
  lg: "px-4 py-2 text-base",
  // Add more sizes as needed
};

export default Button;
