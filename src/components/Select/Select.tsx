import { HTMLAttributes, forwardRef } from "react";
import "./Select.css";
import { Input, Options } from "..";
import { ListOfPeople } from "../../service";

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  listOfValue: ListOfPeople[];
  isLoading: boolean;
  error?: string;
} & Omit<HTMLAttributes<HTMLInputElement>, "onChange">;

export const Select = forwardRef<HTMLInputElement, Props>(
  (
    { value, onChange, listOfValue, isLoading, error, ...restInputProps },
    forwardedRef
  ) => {
    const handleChange = (value: string) => {
      onChange(value);
    };

    return (
      <div className="select">
        <Input
          ref={forwardedRef}
          value={value}
          onChange={handleChange}
          {...restInputProps}
        />

        <Options
          options={listOfValue}
          value={value}
          onClick={handleChange}
          isLoading={isLoading}
          error={error}
        />
      </div>
    );
  }
);
