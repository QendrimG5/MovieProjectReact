import { Alert, Row } from "reactstrap";
import Spinner from "../Spinner";
import Movie from "./Movie";

export default function MovieList(props) {
  const { movies, loading } = props;

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {!movies || movies.length === 0 ? (
            <Alert color="primary">There are no movies!</Alert>
          ) : (
            <Row>
              {movies.map((movie) => (
                <Movie key={movie._id} movie={movie} />
              ))}
            </Row>
          )}
        </>
      )}
    </div>
  );
}
