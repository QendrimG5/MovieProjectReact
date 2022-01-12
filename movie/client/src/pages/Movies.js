import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import MoviesContext from "../lib/context/MoviesContext";
import MovieList from "../components/movies/MovieList";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import Spinner from "../components/Spinner";
import API from "../api/index";
import MovieDetails from "./MovieDetails";

export default function Movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.movies
      .getMovies()
      .then((movies) => {
        setLoading(false);
        setMovies(movies);
      })
      .catch((e) => {});
  }, []);

  const handleFeatured = (movieId) => {
    const movie = movies.find((m) => m._id === movieId);

    if (!movie) {
      return;
    }

    API.movies
      .updateMovie({ ...movie, featured: !movie.featured })
      .then((updatedMovie) => {
        setMovies(movies.map((m) => (m._id === movieId ? updatedMovie : m)));
      });
  };

  const handleDelete = (movieId) => {
    API.movies.deleteMovie(movieId).then(() => {
      setMovies(movies.filter((movie) => movie._id !== movieId));
    });
  };

  const handleAddMovie = (movie) => {
    API.movies.addMovie(movie).then((newMovie) => {
      setMovies([...movies, newMovie]);
    });
  };

  const handleEditMovie = (movie) => {
    API.movies.updateMovie(movie).then((updatedMovie) => {
      setMovies(
        movies.map((movie) =>
          movie._id === updatedMovie._id ? updatedMovie : movie
        )
      );
    });
    // const newMovies = movies.map((movie) => {
    //   if (movie._id === updatedMovie._id) {
    //     console.log(movie);
    //     return updatedMovie;
    //   }
    //   return movie;
    // });
    // setMovies(newMovies);
  };

  const handleGetMovieById = (movieId) => {
    return movies.find((movie) => movie._id === movieId);
  };

  return (
    <MoviesContext.Provider
      value={{
        toggleFeatured: handleFeatured,
        deleteMovie: handleDelete,
        addMovie: handleAddMovie,
        editMovie: handleEditMovie,
        getMovieById: handleGetMovieById,
      }}
    >
      <div className="mt-3">
        {loading ? (
          <Spinner />
        ) : (
          <Switch>
            <Route
              exact
              path="/movies"
              render={() => <MovieList movies={movies} />}
            />

            <Route path="/movies/new" component={AddMovie} />
            <Route path="/movies/edit/:movieId" component={EditMovie} />
            <Route path="/movies/:id" component={MovieDetails} />
          </Switch>
        )}
      </div>
    </MoviesContext.Provider>
  );
}
