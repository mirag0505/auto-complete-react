import "./Options.css";
import { ListOfPeople } from "../../service";
import { Highlighted } from "../Highlighted";

type Props = {
  options: ListOfPeople[];
  value: string;
  className?: string;
  onClick: (value: string) => void;
  isLoading: boolean;
  error?: string;
};

export const Options = ({
  options,
  error,
  value = "",
  onClick,
  isLoading,
}: Props) => {
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
        {!isLoading && options?.length === 0 && <div>Not found</div>}
        {!isLoading && error ? <div className="error">{error}</div> : null}
      </ul>
    </div>
  );
};
