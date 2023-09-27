import { useEffect, useState } from "react";
import "./App.css";
import { People, ListOfPeople, api } from "./service";

function App() {
  const [listOfPeople, setListOfPeople] = useState<ListOfPeople[]>([]);

  useEffect(() => {
    api("https://swapi.dev/api/people/").then((response) => {
      const responseData = response as People;
      responseData && setListOfPeople(responseData.results);
    });
  }, []);

  return (
    <>{listOfPeople.length > 0 ? JSON.stringify(listOfPeople) : "Loading!"}</>
  );
}

export default App;
