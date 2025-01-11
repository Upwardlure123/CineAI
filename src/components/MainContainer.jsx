import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(movies)

  // This is called early return
  if (movies === null) {
    return;
  }

  const mainMovie = movies[0];
  console.log("This is Main Movie", mainMovie)

  const { original_title, overview, id } = mainMovie;
  console.log("This is id", id);

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
