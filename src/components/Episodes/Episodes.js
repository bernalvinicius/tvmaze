import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import Episode from "../Episode";
import back from "../../assets/images/back.svg";

const Episodes = () => {
  let { name } = useParams();
  const history = useHistory();
  const episodeState = useSelector((state) => state.episodesListReducer);

  /**
   * Return to tv shows list
   */
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="content-episodes">
      <div className="content-episodes-header">
        <button onClick={handleBack}>
          <img src={back} alt="back" />
        </button>
        <h1>{name}</h1>
      </div>
      {episodeState.data.map((episode, i) => (
        <Episode key={`ep_${i}`} episode={episode} i={i} />
      ))}
    </div>
  );
};

export default Episodes;
