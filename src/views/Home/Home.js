import React from "react";
import { useSelector } from "react-redux";

import { Episodes } from "../../components";

const Home = () => {
  /**
   * Access the initial state of the application to populate the list of tv shows on the home page.
   */
  const showState = useSelector((state) => state.showListReducer);

  return (
    <div className="container">
      {showState.errorMsg !== "" && <p>{showState.errorMsg}</p>}
      {showState.loading && <p>Loading...</p>}
      {!showState.errorMsg && !showState.loading && (
        <div className="content">
          <div className="content-infos">
            <div className="content-infos-image">
              <img src={showState?.data?.image?.original} alt="" />
            </div>
            <div className="content-infos-description">
              <h1>{showState?.data?.name}</h1>
              <span>
                {showState?.data?.summary?.replace(/(<([^>]+)>)/gi, "")}
              </span>
            </div>
          </div>
          <Episodes />
        </div>
      )}
    </div>
  );
};

export default Home;
