import React, { forwardRef } from "react";
import "./Options.css";
import { ListOfPeople } from "../../service";

type Props = {
  options: ListOfPeople[];
  value: string;
  className?: string;
};

const Highlighted = ({ text = "", highlight = "" }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  function escapeRegex(text: string) {
    return text.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  const regex = new RegExp(`(${escapeRegex(highlight)})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
    </span>
  );
};

export const Options = ({ options, value = "" }: Props) => {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange(e.target.value);
  // };

  return (
    <div className="options">
      <ul>
        {options.map((val) => (
          <li key={val.name}>
            <Highlighted text={val.name} highlight={value} />
          </li>
        ))}
      </ul>
    </div>
  );
};
