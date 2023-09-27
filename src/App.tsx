import { useEffect, useState } from "react";
import "./App.css";
import { People, ListOfPeople, api } from "./service";
import { Select } from "./components";

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
      {listOfPeople.length > 0 ? "Loaded" : "Loading..."}
      {/* {!!value === true ? value : "empty"} */}
      {listOfPeople.length > 0 && (
        <Select value={value} onChange={setValue} listOfValue={listOfPeople} />
      )}
    </>
  );
}

export default App;
