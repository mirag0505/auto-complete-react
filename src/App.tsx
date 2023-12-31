import { useState } from "react";
import "./App.css";
import { Select } from "./components";
import { useQuery } from "./hooks/useQuery";
import { People, getPeople } from "./service";

function App() {
  const [value, setValue] = useState("");
  const url = getPeople(value);
  const { isLoading, data, error } = useQuery<People>(url, value);

  return (
    <>
      Pick your favorite character:
      <Select
        value={value}
        onChange={setValue}
        listOfValue={data ? data.results : []}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}

export default App;
