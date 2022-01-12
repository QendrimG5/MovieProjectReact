import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
} from "reactstrap";

import API from "../../src/api/index";
import Movie from "../components/movies/Movie";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  console.log("iddd", id);

  useEffect(() => {
    API.movies
      .getMovieById(id)
      .then((movieDetails) => {
        setMovie({ ...movieDetails });
      })
      .catch((e) => {});
    setLoading(false);
  }, []);

  if (!movie) return <h2>No data</h2>;

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="d-flex align-items-center">
          <CardImg
            top
            style={{
              objectFit: "contain",
              objectPosition: "top",
              marginTop: 10,
            }}
            width="100%"
            height={600}
            src={movie.img}
            alt="Card image cap"
          />

          <div className="mr-auto">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>

            <ul>
              <li>Director: {movie.director}</li>
              <li>Duration: {movie.duration}</li>
              <li>Price: {movie.price}</li>
              <li>Featured: {movie.featured ? "Yes" : "No"}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
