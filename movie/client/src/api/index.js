import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/",
});

const API = {
  authentication: {
    login: (email, password) =>
      axiosInstance
        .post("auth", {
          credentials: {
            email,
            password,
          },
        })
        .then((response) => response.data.token),
    register: (email, password, passwordConfirmation) =>
      axiosInstance
        .post("users", {
          user: {
            email,
            password,
            passwordConfirmation,
          },
        })
        .then((response) => response.data.token),
  },

  users: {},

  movies: {
    getMovies: () =>
      axiosInstance.get("authfilms").then((response) => response.data.films),
    getMovieById: (id) =>
      axiosInstance
        .get(`authfilms/${id}`)
        .then((response) => response.data.film),

    addMovie: (movie) =>
      axiosInstance
        .post("authfilms", {
          film: movie,
        })
        .then((response) => response.data.film),

    updateMovie: (movie) =>
      axiosInstance
        .put(`authfilms/${movie._id}`, {
          film: movie,
        })
        .then((response) => response.data.film),

    deleteMovie: (movieId) => axiosInstance.delete(`authfilms/${movieId}`),
  },
};

export default API;
