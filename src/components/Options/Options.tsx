import React, { forwardRef } from "react";
import "./ListOfValue.css";
import { ListOfPeople } from "../../service";

type Props = {
  options: ListOfPeople[];
  className?: string;
};

export const Options = ({ className, options }: Props) => {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange(e.target.value);
  // };

  return (
    <ul className={className}>
      {options.map((val) => (
        <li key={val.name}>{val.name}</li>
      ))}
    </ul>
  );
};
