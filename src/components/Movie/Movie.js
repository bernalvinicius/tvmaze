import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={movie.image.medium} alt="" />
      </div>
      <Link to={`shows/${movie.name}/${movie.id}`} className="card-link" />
      <div className="card-content">
        <div>
          <h3>{movie.name}</h3>
        </div>
        <div className="content-title">
          <span>{movie.rating.average}</span>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object,
};

export default Movie;
