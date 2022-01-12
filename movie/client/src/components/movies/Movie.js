import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
} from "reactstrap";
import { useState } from "react";
import Featured from "./Featured";
import { useMoviesContext } from "../../lib/context/MoviesContext";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../../lib/context/AuthContext";
import { Link, useRouteMatch } from "react-router-dom";

export default function Movie(props) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { movie, onSlider } = props;
  const history = useHistory();
  const moviesContext = useMoviesContext();
  const authContext = useAuthContext();
  const { path, url } = useRouteMatch();

  const handleOnToggleFeatured = () => {
    moviesContext.toggleFeatured(movie._id);
  };

  const handleEdit = () => {
    history.push(`/movies/edit/${movie._id}`);
  };

  const handleOnDelete = () => {
    setIsDeleting(true);
  };

  const deleteMovie = () => {
    moviesContext.deleteMovie(movie._id);
  };

  const adminActions =
    authContext.isAdmin && !isDeleting ? (
      <>
        <Button
          color="primary"
          style={{ marginRight: 10 }}
          onClick={handleEdit}
        >
          Edit
        </Button>
        <Button color="danger" onClick={handleOnDelete}>
          Delete
        </Button>
      </>
    ) : (
      <>
        <span>Are you sure?</span>

        <Button
          style={{ marginLeft: 10, marginRight: 10 }}
          color="danger"
          onClick={deleteMovie}
        >
          Yes
        </Button>

        <Button color="success" onClick={() => setIsDeleting(false)}>
          No
        </Button>
      </>
    );

  const userActions = authContext.isUser && (
    <Button color="success" outlined>
      Add to cart
    </Button>
  );

  if (onSlider)
    return (
      <Card className="p-2">
        {authContext.isAdmin && !onSlider && (
          <Featured
            featured={movie.featured}
            onClick={handleOnToggleFeatured}
          />
        )}

        <CardImg
          top
          style={{ objectFit: "contain", marginTop: 10 }}
          width="100%"
          height={200}
          src={movie.img}
          alt="Card image cap"
        />

        <CardBody>
          <CardTitle tag="h5">
            <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
          </CardTitle>

          <CardText>Director: {movie.director}</CardText>
          <CardText>Duration: {movie.duration}</CardText>
          <CardText>Price: {movie.price}</CardText>

          {authContext.isAuthenticated && authContext.isAdmin && (
            <>{adminActions}</>
          )}
          {authContext.isAuthenticated && authContext.isUser && (
            <>{userActions}</>
          )}
        </CardBody>
      </Card>
    );

  return (
    <Col xs={12} md={4} lg={3}>
      <Card className="p-2">
        {authContext.isAdmin && (
          <Featured
            featured={movie.featured}
            onClick={handleOnToggleFeatured}
          />
        )}

        <CardImg
          top
          style={{ objectFit: "contain", marginTop: 10 }}
          width="100%"
          height={200}
          src={movie.img}
          alt="Card image cap"
        />

        <CardBody>
          <CardTitle tag="h5">{movie.title}</CardTitle>

          <CardText>Director: {movie.director}</CardText>
          <CardText>Duration: {movie.duration}</CardText>
          <CardText>Price: {movie.price}</CardText>

          {authContext.isAuthenticated && authContext.isAdmin && (
            <>{adminActions}</>
          )}
          {authContext.isAuthenticated && authContext.isUser && (
            <>{userActions}</>
          )}
        </CardBody>
      </Card>
    </Col>
  );
}
