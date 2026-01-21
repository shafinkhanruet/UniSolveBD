import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30 focus:ring-orange-500 border border-transparent",
    secondary: "bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/30 focus:ring-amber-400 border border-transparent",
    gradient: "bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 hover:shadow-lg hover:shadow-orange-500/30 border border-transparent",
    outline: "bg-transparent border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 focus:ring-orange-500",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};