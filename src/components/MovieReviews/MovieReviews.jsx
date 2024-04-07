import { useParams } from "react-router";
import { requestMovieReviews } from "../../services/api.js";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import css from "./MovieReviews.module.css"

const MovieReviews = () => {
  const [rewiews, setRewiews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await requestMovieReviews(movieId);
        setRewiews(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      {isError && <Error />}
      {isLoading && <Loader />}
      {rewiews && (
        <ul className={css.list}>
          {rewiews.results.map((rewiew) => {
            return (
              <li className={css.item} key={rewiew.id}>
                <p className={css.author}>Author : {rewiew.author}</p>
                <p>{rewiew.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;