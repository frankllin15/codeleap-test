import { useState } from "react";

export const useMutation = (mutation, { variables = {} }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  console.log("useMutation", variables);
  console.log(typeof mutation);

  function mutationFn() {
    setLoading(true);
    mutation(variables)
      .then((response) => {
        response.json().then((data) => {
          setData(data);
        });
        setSuccess(response.ok);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return [mutationFn, { data, loading, error, success }];
};
