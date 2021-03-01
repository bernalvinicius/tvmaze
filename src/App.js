import React from "react";
import { useDispatch } from "react-redux";

import { getMoviesList } from "./store/actions/moviesAction";

import Routes from "./views/Routes";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
