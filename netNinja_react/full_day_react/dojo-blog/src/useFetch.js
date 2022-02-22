import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const AbortCont = new AbortController();

    console.log("use effect ran");
    setTimeout(() => {
      fetch(url, { signal: AbortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("could not fetch the data for that resource.");
          }
          return response.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          // error has name property, if errord don't update setIsPending and setError in component
          if (err.name === "AbortError") {
            console.log("fetch aborted due to unmouting of Home component");
          } else {
            setError(err.message);
            setIsPending(false);
            console.log(err);
          }
        });
    }, 1000);

    return () => {
      // console.log("cleanup function ran");
      AbortCont.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
