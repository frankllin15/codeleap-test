import React from "react";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";

const apiUrl = import.meta.env.VITE_API_URL;

const Context = createContext();

export const PostProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const {
    data: posts,
    loading,
    refetch,
  } = useQuery(apiUrl, {
    offset,
  });

  useEffect(() => {
    refetch();
  }, [offset]);

  return (
    <Context.Provider
      value={{
        posts,
        loading,
        refetch,
        setOffset,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePost = () => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};
