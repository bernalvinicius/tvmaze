import React from "react";
import { useDispatch } from "react-redux";

import { getShowInfos, getEpisodesList } from "./store/actions/tvShowAction";

import Routes from "./views/Routes";

const App = () => {
  const dispatch = useDispatch();

  /**
   * Does Get with the initial list of tv shows
   */
  React.useEffect(() => {
    dispatch(getShowInfos());
    dispatch(getEpisodesList());
  }, [dispatch]);

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
