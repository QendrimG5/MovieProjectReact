import { generate as id } from "shortid";
import MovieForm from "../components/movies/MovieForm";
import { useMoviesContext } from "../lib/context/MoviesContext";

export default function AddMovie(props) {
  const movieContext = useMoviesContext();

  const handleOnSubmit = (movieData) => {
    movieContext.addMovie(movieData);
    props.history.push("/movies");
  };

  return <MovieForm onSubmit={handleOnSubmit} />;
}
