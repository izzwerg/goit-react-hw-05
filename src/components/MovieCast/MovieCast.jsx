import { useParams } from "react-router";
import { requestMovieCredits } from "../../services/api.js";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import css from "./MovieCast.module.css"

const MovieCast = () => {
  const [casts, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await requestMovieCredits(movieId);
        setCast(data);
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
      {casts && (
        <ul className={css.list}>
          {casts.cast.map((cast) => {
            return (
              <li key={cast.cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt={cast.original_name}
                  key={cast.id}
                  width={300}
                  height={450}
                  className={css.img}
                />
                <p className={css.name}>Original name: {cast.original_name}</p>
                <p className={css.char}>Character: {cast.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MovieCast;