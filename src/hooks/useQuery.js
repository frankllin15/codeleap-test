import { useEffect, useRef, useState } from "react";

export function useQuery(query, variables = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

  const fetchData = async () => {
    setLoading(true);

    query(variables)
      .then((response) => {
        response.json().then((data) => {
          if (mountedRef.current) {
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
    // setIsMounted(true);

    fetchData();

    return () => {
      // setIsMounted(false);
      mountedRef.current = false;
    };
  }, []);

  const refetch = () => {
    if (mountedRef.current) {
      fetchData();
    }
  };

  return { data, loading, error, refetch };
}
