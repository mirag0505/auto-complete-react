import { useState } from "react";
import "./App.css";
import { Select } from "./components";
import { useQuery } from "./hooks/useQuery";

function App() {
  const [value, setValue] = useState("");

  const { isLoading, data, error } = useQuery(
    "https://swapi.dev/api/people/",
    value
  );

  return (
    <Select
      value={value}
      onChange={setValue}
      listOfValue={data}
      isLoading={isLoading}
    />
  );
}

export default App;
