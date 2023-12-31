export type People = {
  count: number;
  next: string;
  previous: null;
  results: ListOfPeople[];
};

export type ListOfPeople = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: [];
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
};

const generalEnpoint = "https://swapi.dev/api/";

export const getPeople = (filterValue: string) => {
  return `${generalEnpoint}people/?search=${filterValue}`;
};

export async function api<T>(url: string): Promise<T | Error | string> {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    })
    .catch((e: Error | string) => e);
}
