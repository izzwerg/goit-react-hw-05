import { Suspense, lazy, useRef } from "react";
import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useParams,
  useLocation,
  Outlet,
} from "react-router-dom";
import { requestMoviDetails } from "../../services/api.js";
import css from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader.jsx";
import Error from "../../components/Error/Error.jsx";

const MovieCast = lazy(() =>
  import("../../components/MovieCast/MovieCast.jsx")
);
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews.jsx")
);

const MovieDetailsPage = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await requestMoviDetails(movieId);
        setFilm(data);
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
      {film && (
        <div className={css.div}>
          <button type="button" className={css.back}>
            <Link to={backLinkRef.current} className={css.backLink}>
              Go back
            </Link>
          </button>

          <div className={css.result}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={film.original_title}
              className={css.img}
              width={400}
              height={600}
            />
            <div className={css.info}>
              <div>
                <h2>
                  {film.original_title}(
                  {film.release_date && film.release_date.split("-")[0]})
                </h2>
                <p>User Score: {Math.round(film.popularity / 100)}%</p>
              </div>
              <div>
                <h3>Overwiew</h3>
                <p>{film.overview}</p>
              </div>
              <div>
                <h3>Genres</h3>
                {film.genres.map((genre) => {
                  return <p key={genre.id}>{genre.name}</p>;
                })}
              </div>
            </div>
          </div>
          <div className={css.additional}>
            <h3>Additional information</h3>
            <ul className={css.additionalList}>
              <li>
                <Link className={css.additionalLink} to="cast">
                  Cast
                </Link>
              </li>
              <li>
                <Link className={css.additionalLink} to="reviews">
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Routes>
              <Outlet />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
