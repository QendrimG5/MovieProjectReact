import { useMoviesContext } from "../lib/context/MoviesContext";
import { Alert } from "reactstrap";
import MovieForm from "../components/movies/MovieForm";

export default function EditMovie(props) {
  const { movieId } = props.match.params;

  const movieContext = useMoviesContext();

  const handleOnSubmit = (movieData) => {
    movieContext.editMovie(movieData);
    props.history.push("/movies");
  };

  const movie = movieContext.getMovieById(movieId);

  return !movie ? (
    <Alert color="info">Movie not found!</Alert>
  ) : (
    <div>
      <MovieForm initialValues={movie} onSubmit={handleOnSubmit} />
    </div>
  );
}
