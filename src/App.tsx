import { useEffect, useState } from "react";
import "./App.css";
import { People, ListOfPeople, api } from "./service";
import { Select } from "./components";

function App() {
  const [listOfPeople, setListOfPeople] = useState<ListOfPeople[]>([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = setTimeout(() => {
      setIsLoading(true);
      api(`https://swapi.dev/api/people/?search=${value}`).then((response) => {
        const responseData = response as People;
        responseData && setListOfPeople(responseData.results);
        setIsLoading(false);
      });
    }, 1500);

    return () => clearTimeout(getData);
  }, [value]);

  return (
    <Select
      value={value}
      onChange={setValue}
      listOfValue={listOfPeople}
      isLoading={isLoading}
    />
  );
}

export default App;
