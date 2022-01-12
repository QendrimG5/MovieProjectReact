import { createContext, useContext } from "react";

const MoviesContext = createContext({});

export function useMoviesContext() {
  return useContext(MoviesContext);
}

export default MoviesContext;
