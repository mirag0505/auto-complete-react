import { ChangeEvent, HTMLAttributes, forwardRef, useRef } from "react";
import "./Select.css";
import { Input, Options } from "..";
import { ListOfPeople } from "../../service";
//TODO add alias

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  listOfValue: ListOfPeople[];
} & Omit<HTMLAttributes<HTMLInputElement>, "onChange">;

export const Select = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, listOfValue, ...restInputProps }, forwardedRef) => {
    // const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (value: string) => {
      onChange(value);
      //   forwardedRef?.current?.focus();
    };

    return (
      <div className="select">
        <Input
          ref={forwardedRef}
          value={value}
          onChange={handleChange}
          {...restInputProps}
        />

        <Options options={listOfValue} />
      </div>
    );
  }
);
