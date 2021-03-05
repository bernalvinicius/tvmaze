import React from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";

import back from "../../assets/images/back.svg";

const Detail = () => {
  const history = useHistory();

  /**
   * Access the object with the episode selected by the user
   */
  const location = useLocation();
  const episodeDetail = location.state.episode;

  /**
   * Return to episode list
   */
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="details">
      <div className="content">
        <div className="content-back">
          <button onClick={handleBack}>
            <img src={back} alt="back" />
          </button>
        </div>
        <div className="content-detail">
          <div className="content-detail-image">
            <img src={episodeDetail.image.original} alt="" />
          </div>
          <div className="content-detail-infos">
            <h1>{episodeDetail.name}</h1>
            <span>{episodeDetail.summary.replace(/(<([^>]+)>)/gi, "")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
