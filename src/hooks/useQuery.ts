import { useEffect, useState } from "react";
import { People, api } from "../service";

export function useQuery(url: string, filterValue: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getData = setTimeout(() => {
      setIsLoading(true);
      api(`${url}?search=${filterValue}`).then((response) => {
        const responseData = response as People;
        responseData && setData(responseData.results);
        setIsLoading(false);
      });
    }, 1500);

    return () => clearTimeout(getData);
  });

  return { isLoading, data, error };
}
