import React, { forwardRef } from "react";
import "./ListOfValue.css";
import { ListOfPeople } from "../../service";

type Props = {
  list: ListOfPeople[];
  className?: string;
};

export const ListOfValue = ({ className, list }: Props) => {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange(e.target.value);
  // };

  return (
    <ul className={className}>
      {list.map((val) => (
        <li key={val.name}>{val.name}</li>
      ))}
    </ul>
  );
};
