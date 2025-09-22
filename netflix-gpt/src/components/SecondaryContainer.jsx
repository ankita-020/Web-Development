import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const { nowPlayingMovies } = useSelector((store) => store.movies);
  console.log("nowPlayingMovies", nowPlayingMovies);

  return (
    nowPlayingMovies && (
      <div className="bg-black relative z-3">
        <div className="-mt-82">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
