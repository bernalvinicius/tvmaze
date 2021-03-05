import React from "react";
import { useSelector } from "react-redux";

import Episode from "../Episode";

const Episodes = () => {
  /**
   * Access the state of the application to populate the list of episodes on the home page.
   */
  const episodeState = useSelector((state) => state.episodesListReducer);

  return (
    <div className="content-episodes">
      {episodeState?.data?.map((episode, i) => (
        <Episode key={`ep_${i}`} episode={episode} i={i} />
      ))}
    </div>
  );
};

export default Episodes;
