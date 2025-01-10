import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = ({ id }) => {
  const dispatch = useDispatch();
  
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id+ "/videos?language=en-US",
      API_OPTIONS
    );
    const url = "https://api.themoviedb.org/3/movie/" + id+ "/videos?language=en-US"
    const json = await data.json();
    console.log("This is url" , url)
    console.log("This is new id" , id)

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useTrailerVideo;
