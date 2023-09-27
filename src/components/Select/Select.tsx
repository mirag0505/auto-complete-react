import { HTMLAttributes, forwardRef } from "react";
import "./Select.css";
import { Input, Options } from "..";
import { ListOfPeople } from "../../service";
//TODO add alias

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  ListOfValue: ListOfPeople[];
} & Omit<HTMLAttributes<HTMLInputElement>, "onChange">;

export const Select = forwardRef<HTMLInputElement, Props>(
  (
    { className, value, onChange, ListOfValue, ...restInputProps },
    forwardedRef
  ) => {
    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //   onChange(e.target.value);
    // };

    return (
      <div className={className}>
        <Input
          ref={forwardedRef}
          value={value}
          onChange={onChange}
          {...restInputProps}
        />

        <Options options={ListOfValue} />
      </div>
    );
  }
);