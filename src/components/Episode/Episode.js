import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Episode = ({ episode, i }) => {
  return (
    <div className="content-episode">
      <div className="content-episode-title">
        <Link
          to={{
            pathname: `/details/${episode.id}`,
            state: { episode },
          }}
        >
          {i + 1} - {episode.name}
        </Link>
      </div>
    </div>
  );
};

Episode.propTypes = {
  episode: PropTypes.object,
  i: PropTypes.number,
};

export default Episode;
