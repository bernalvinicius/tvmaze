import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getEpisodesList } from "../../store/actions/moviesAction";
import { Episodes } from "../../components";

const Infos = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  /**
   * Access the state of the application to populate the list of episodes on the Infos page.
   */
  const episodeState = useSelector((state) => state.episodesListReducer);

  /**
   * Get the list of episodes that the tv show has according to what the user has selected
   */
  React.useEffect(() => {
    dispatch(getEpisodesList(id));
  }, [id, dispatch]);

  return (
    <div className="infos">
      {episodeState.errorMsg !== "" && <p>{episodeState.errorMsg}</p>}
      {episodeState.loading && <p>Loading...</p>}
      {!episodeState.errorMsg && !episodeState.loading && <Episodes />}
    </div>
  );
};

export default Infos;
