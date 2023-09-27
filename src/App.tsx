import { useEffect, useState } from "react";
import "./App.css";
import { People, ListOfPeople, api } from "./service";
import { Input } from "./components";

function App() {
  const [listOfPeople, setListOfPeople] = useState<ListOfPeople[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    api("https://swapi.dev/api/people/").then((response) => {
      const responseData = response as People;
      responseData && setListOfPeople(responseData.results);
    });
  }, []);

  return (
    <>
      {listOfPeople.length > 0 ? "Loaded" : "Loading!"}
      <Input className="input" value={value} onChange={setValue} />
      {!!value === true ? value : "empty"}
    </>
  );
}

export default App;
