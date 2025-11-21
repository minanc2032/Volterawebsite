import * as React from 'react';

interface RadioGroupContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | undefined>(undefined);

interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ value, defaultValue, onValueChange, className = '', children }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || '');
    const currentValue = value !== undefined ? value : internalValue;

    const handleValueChange = (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <RadioGroupContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
        <div ref={ref} className={className} role="radiogroup">
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

interface RadioGroupItemProps {
  value: string;
  id: string;
  className?: string;
  disabled?: boolean;
}

export const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ value, id, className = '', disabled }, ref) => {
    const context = React.useContext(RadioGroupContext);

    if (!context) {
      throw new Error('RadioGroupItem must be used within RadioGroup');
    }

    const isChecked = context.value === value;

    return (
      <input
        ref={ref}
        type="radio"
        id={id}
        value={value}
        checked={isChecked}
        onChange={() => context.onValueChange(value)}
        disabled={disabled}
        className={className}
        data-state={isChecked ? 'checked' : 'unchecked'}
      />
    );
  }
);

RadioGroupItem.displayName = 'RadioGroupItem';
