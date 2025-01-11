import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  return (
    <div className="bg-black">
      <div className="-mt-20 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
        <MovieList title={"Horror"} movies={topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
