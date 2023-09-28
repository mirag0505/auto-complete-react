import {
  ChangeEvent,
  HTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
} from "react";
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
    // const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (value: string) => {
      onChange(value);
    };

    const filterList = (list: ListOfPeople[]) =>
      list.filter((optionValue) => {
        if (optionValue.name.toLowerCase().includes(value.toLocaleLowerCase()))
          return optionValue;
      });

    return (
      <div className="select">
        <Input
          ref={forwardedRef}
          value={value}
          onChange={handleChange}
          {...restInputProps}
        />

        <Options
          options={filterList(listOfValue)}
          value={value}
          onClick={handleChange}
        />
      </div>
    );
  }
);
