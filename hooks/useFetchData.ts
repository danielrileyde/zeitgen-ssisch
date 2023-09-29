import { useEffect, useState } from "react";

/*
useFetchData is a "custom hook (a function)" which is a reusable piece of code, which uses state and performs "side effects".


*/
export const useFetchData = (url: string) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await fetch(url)
        .then(async (response) => {
          if (!response.ok) {
            throw new Error("Bad response from server");
          }
          const data = await response.json();
          setData(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
