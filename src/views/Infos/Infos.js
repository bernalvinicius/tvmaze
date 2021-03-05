import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getEpisodesList } from "../../store/actions/moviesAction";
import { Episodes } from "../../components";

const Infos = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const episodeState = useSelector((state) => state.episodesListReducer);

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
