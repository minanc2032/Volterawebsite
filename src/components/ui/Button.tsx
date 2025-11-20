import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, className = '', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
      primary: 'bg-[#ff6b35] text-white hover:bg-[#ff5722] active:bg-[#e64a19] shadow-sm hover:shadow-md',
      secondary: 'bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] active:bg-[#0a0a0a] shadow-sm hover:shadow-md',
      outline: 'bg-transparent border-2 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white',
      ghost: 'bg-transparent text-[#1a1a1a] hover:bg-gray-100 active:bg-gray-200'
    };

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
