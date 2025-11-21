import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`
          flex min-h-[80px] w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base
          placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-[#aadd5f] focus:border-transparent
          disabled:cursor-not-allowed disabled:opacity-50
          transition-colors duration-200
          ${className}
        `}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
