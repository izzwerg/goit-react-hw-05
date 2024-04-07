import { requestTrendingMovies } from "../../services/api.js";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader.jsx";
import Error from "../../components/Error/Error.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from "./HomePage.module.css"

const HomePage = () => {
  const [TrendMovies, setTrendMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await requestTrendingMovies();
        setTrendMovies(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      {isError && <Error />}
      {isLoading && <Loader />}
      <h2 className={css.h2}>Trending today</h2>
      {TrendMovies !== null && <MovieList movies={TrendMovies} />}
    </>
  );
};

export default HomePage;