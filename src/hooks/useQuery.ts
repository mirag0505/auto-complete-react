import { useEffect, useState } from "react";
import { api } from "../service";

export function useQuery<T>(url: string, filterValue: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getData = setTimeout(() => {
      setIsLoading(true);

      api(url)
        .then((response) => {
          response && setData(response as T);
        })
        .catch((e) => {
          if (e instanceof Error) {
            setError(e?.message);
          } else {
            setError("An unknown error occurred");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1500);

    return () => clearTimeout(getData);
  }, [filterValue, url]);

  return { isLoading, data, error };
}
