import axios from "axios";

export const requestTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2ExNzc4OTFhMjE3YmFiNDljNDVmNmI0YjFhOGRmMyIsInN1YiI6IjY2MTJhNzlmMTEwOGE4MDE3ZDhlOTE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OpzII633cKSYSctPRaPjDsFvRZN814ZjezPkbJCXEWY",
    },
  };

  const { data } = await axios.get(url, options);
  return data;
};

export const requestSearchMovie = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2ExNzc4OTFhMjE3YmFiNDljNDVmNmI0YjFhOGRmMyIsInN1YiI6IjY2MTJhNzlmMTEwOGE4MDE3ZDhlOTE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OpzII633cKSYSctPRaPjDsFvRZN814ZjezPkbJCXEWY",
    },
  };

  const { data } = await axios.get(url, options);
  return data;
};

export const requestMoviDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2ExNzc4OTFhMjE3YmFiNDljNDVmNmI0YjFhOGRmMyIsInN1YiI6IjY2MTJhNzlmMTEwOGE4MDE3ZDhlOTE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OpzII633cKSYSctPRaPjDsFvRZN814ZjezPkbJCXEWY",
    },
  };

  const { data } = await axios.get(url, options);
  return data;
};

export const requestMovieCredits = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2ExNzc4OTFhMjE3YmFiNDljNDVmNmI0YjFhOGRmMyIsInN1YiI6IjY2MTJhNzlmMTEwOGE4MDE3ZDhlOTE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OpzII633cKSYSctPRaPjDsFvRZN814ZjezPkbJCXEWY",
    },
  };

  const { data } = await axios.get(url, options);
  return data;
};

export const requestMovieReviews = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1;`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2ExNzc4OTFhMjE3YmFiNDljNDVmNmI0YjFhOGRmMyIsInN1YiI6IjY2MTJhNzlmMTEwOGE4MDE3ZDhlOTE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OpzII633cKSYSctPRaPjDsFvRZN814ZjezPkbJCXEWY",
    },
  };

  const { data } = await axios.get(url, options);
  return data;
};