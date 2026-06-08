"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 border cursor-pointer";

  const variants = {
    primary:
      "bg-brand-primary text-white border-transparent hover:bg-brand-primaryDark focus:ring-2 focus:ring-offset-1 focus:ring-brand-primary",
    secondary:
      "bg-brand-secondary text-white border-transparent hover:bg-[#336666] focus:ring-2 focus:ring-offset-1 focus:ring-brand-secondary",
    outline:
      "bg-transparent text-brand-primary border-brand-primary hover:bg-[rgba(30,123,243,0.1)] focus:ring-2 focus:ring-offset-1 focus:ring-brand-primary",
    ghost:
      "bg-transparent text-brand-primary border-transparent hover:bg-[rgba(30,123,243,0.1)] focus:ring-2 focus:ring-offset-1 focus:ring-brand-primary",
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
