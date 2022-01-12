import SliderCarousel from "../components/Slider";
import { useEffect, useState } from "react";
import API from "../api/index";
import Spinner from "../components/Spinner";

export default function Home() {
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

  return (
    <div className="" style={{ textAlign: "center" }}>
      <h1>Home Page</h1>

      {loading ? <Spinner /> : <SliderCarousel movies={movies} />}
    </div>
  );
}
