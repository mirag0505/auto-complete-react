import "./Options.css";
import { ListOfPeople } from "../../service";
import { Highlighted } from "../Highlighted";

type Props = {
  options: ListOfPeople[];
  value: string;
  className?: string;
  onClick: (value: string) => void;
  isLoading: boolean;
};

export const Options = ({ options, value = "", onClick, isLoading }: Props) => {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange(e.target.value);
  // };

  return (
    <div className="options">
      <ul>
        {isLoading
          ? "Loading..."
          : options?.map((val) => (
              <li
                key={val.name}
                onClick={() => {
                  onClick(val.name);
                }}>
                <Highlighted text={val.name} highlight={value} />
              </li>
            ))}
        {!isLoading && options.length === 0 && "Not found"}
      </ul>
    </div>
  );
};
