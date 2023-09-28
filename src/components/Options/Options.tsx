import "./Options.css";
import { ListOfPeople } from "../../service";
import { Highlighted } from "../Highlighted";

type Props = {
  options: ListOfPeople[];
  value: string;
  className?: string;
  onClick: (value: string) => void;
};

export const Options = ({ options, value = "", onClick }: Props) => {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange(e.target.value);
  // };

  return (
    <div className="options">
      <ul>
        {options.map((val) => (
          <li
            key={val.name}
            onClick={() => {
              onClick(val.name);
            }}>
            <Highlighted text={val.name} highlight={value} />
          </li>
        ))}
      </ul>
    </div>
  );
};
