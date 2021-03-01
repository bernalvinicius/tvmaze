import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

import Episodes from "../Episodes";

const Movie = ({ movie }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={movie.image.medium} alt="" />
      </div>
      {/* <Link to={`shows/${movie.id}`} className="card-link" /> */}
      <div className="card-content">
        <div>
          <h3>{movie.name}</h3>
        </div>
        <div className="content-title">
          {/* {movie.summary.replace(/(<([^>]+)>)/gi, "")} */}
          <span>{movie.rating.average}</span>
        </div>
        <Episodes id={movie.id} />
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object,
};

export default Movie;
