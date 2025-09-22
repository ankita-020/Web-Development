import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const { showGPTSearch } = useSelector((store) => store.gpt);
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {showGPTSearch && <GPTSearch />}
      {!showGPTSearch && (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
