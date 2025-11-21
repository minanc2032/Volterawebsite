import * as React from 'react';

interface SliderProps {
  defaultValue?: number[];
  value?: number[];
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number[]) => void;
  className?: string;
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      defaultValue = [0],
      value,
      min = 0,
      max = 100,
      step = 1,
      onValueChange,
      className = '',
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const currentValue = value !== undefined ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = [Number(e.target.value)];
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    const percentage = ((currentValue[0] - min) / (max - min)) * 100;

    return (
      <div ref={ref} className={`relative w-full ${className}`}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue[0]}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
          style={{
            background: `linear-gradient(to right, #aadd5f 0%, #aadd5f ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
          }}
        />
      </div>
    );
  }
);

Slider.displayName = 'Slider';
