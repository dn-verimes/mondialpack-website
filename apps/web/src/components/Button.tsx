import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string; // Added href prop
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 btn-ripple focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
  };
  
  const sizeClasses = {
    sm: "text-sm px-4 py-1.5",
    md: "text-base px-6 py-2.5",
    lg: "text-lg px-8 py-3.5",
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  
  // If href is provided, render a Link component from react-router-dom
  if (href) {
    return (
      <Link 
        to={href}
        className={buttonClasses}
      >
        {children}
      </Link>
    );
  }
  
  // Otherwise render a regular button
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
