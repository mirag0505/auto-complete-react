import { ChangeEvent, HTMLAttributes, forwardRef, useState } from "react";
import "./Input.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
} & Omit<HTMLAttributes<HTMLInputElement>, "onChange">;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, ...restInputProps }, forwardedRef) => {
    const [opened, setOpened] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    const handleInputFocus = () => {
      setOpened(true);
    };

    const handleInputBlur = () => {
      setTimeout(() => {
        setOpened(false);
      }, 200);
    };

    return (
      <input
        value={value}
        ref={forwardedRef}
        onChange={handleChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={["input", opened === true ? "focus" : ""].join(" ")}
        {...restInputProps}
      />
    );
  }
);
