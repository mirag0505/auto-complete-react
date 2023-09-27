import React, { forwardRef } from "react";
import "./Options.css";
import { ListOfPeople } from "../../service";

type Props = {
  options: ListOfPeople[];
  className?: string;
};

export const Options = ({ options }: Props) => {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange(e.target.value);
  // };

  return (
    <div className="options">
      <ul>
        {options.map((val) => (
          <li key={val.name}>{val.name}</li>
        ))}
      </ul>
    </div>
  );
};
