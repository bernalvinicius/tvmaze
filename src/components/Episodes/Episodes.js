import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { getEpisodesList } from "../../store/actions/moviesAction";

const Episodes = ({ id }) => {
  const dispatch = useDispatch();
  const episodeState = useSelector((state) => state.episodesListReducer);

  React.useEffect(() => {
    dispatch(getEpisodesList(id));
  }, [dispatch, id]);

  console.log("episodeState: ", episodeState);

  return <div>Episodes</div>;
};

Episodes.propTypes = {
  id: PropTypes.number,
};

export default Episodes;
