import { ChangeEvent, HTMLAttributes, forwardRef } from "react";
import "./Input.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
  className: string;
} & Omit<HTMLAttributes<HTMLInputElement>, "onChange">;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, onChange, ...restInputProps }, forwardedRef) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <input
        ref={forwardedRef}
        onChange={handleChange}
        className={className}
        {...restInputProps}
      />
    );
  }
);
