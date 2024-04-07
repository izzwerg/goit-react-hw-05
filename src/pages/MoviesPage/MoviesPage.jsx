import { useEffect, useState, useRef } from "react";
import { requestSearchMovie } from "../../services/api.js";
import { Formik, Field, Form } from "formik";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";
import Error from "../../components/Error/Error.jsx";
import css from "./MoviesPage.module.css";
import toast, { Toaster } from "react-hot-toast";
import MovieList from "../../components/MovieList/MovieList.jsx";

const MoviesPage = () => {
  const [foundFilms, setFoundFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }

    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await requestSearchMovie(searchQuery);
        setFoundFilms(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [searchQuery]);

  const handleSubmit = (searchTerm) => {
    if (searchTerm.trim().length === 0) {
        toast('Please specify what you want to find', {
            icon: '🔍',
          });
      return;
    }

    setSearchParams({ query: searchTerm });
  };

  return (
    <>
      <Formik
        initialValues={{ query: searchQuery ?? "" }}
        onSubmit={(values) => {
          handleSubmit(values.query);
        }}
      >
        <Form className={css.form}>
          <Field
            placeholder="Search"
            type="text"
            name="query"
            className={css.input}
            innerRef={inputRef}
          />
          <button
            type="submit"
            title="Click to search"
            aria-label="Search"
            className={css.btn}
          >
            Search
          </button>
        </Form>
      </Formik>
      {isError && <Error />}
      {isLoading && <Loader />}
      {foundFilms !== null && <MovieList movies={foundFilms} />}
      <Toaster position="top-left" reverseOrder={false} />
    </>
  );
};

export default MoviesPage;