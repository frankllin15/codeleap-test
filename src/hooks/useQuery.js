import { useEffect, useState } from "react";

export function useQuery(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    fetch(url, options)
      .then((response) => {
        response.json().then((data) => {
          if (isMounted) {
            setData(data);
            setLoading(false);
          }
        });
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setIsMounted(true);

    fetchData();

    return () => {
      setIsMounted(false);
    };
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
}
