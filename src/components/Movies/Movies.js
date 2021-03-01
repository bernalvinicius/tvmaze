import React from "react";
import { useSelector } from "react-redux";

import Movie from "../Movie";

const Movies = () => {
  const movieState = useSelector((state) => state.moviesListReducer);

  // console.log("movieState em Movie: ", movieState.data.data);
  return (
    <div className="content">
      {movieState?.data?.data?.map((movie, i) => (
        <Movie key={`movie_${i}`} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
