import * as React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ id, checked, defaultChecked, onCheckedChange, disabled, className = '' }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);
    const isChecked = checked !== undefined ? checked : internalChecked;

    const handleClick = () => {
      if (disabled) return;
      const newChecked = !isChecked;
      if (checked === undefined) {
        setInternalChecked(newChecked);
      }
      onCheckedChange?.(newChecked);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="checkbox"
        id={id}
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleClick}
        className={`
          peer h-5 w-5 shrink-0 rounded border-2 border-gray-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50
          ${isChecked ? 'bg-[#aadd5f] border-[#aadd5f]' : 'bg-white'}
          ${className}
        `}
      >
        {isChecked && <Check className="h-4 w-4 text-white" />}
      </button>
    );
  }
);

Checkbox.displayName = 'Checkbox';
