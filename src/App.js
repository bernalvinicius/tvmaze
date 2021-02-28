import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "./store/actions/moviesAction";

const App = () => {
  const dispatch = useDispatch();
  const movieState = useSelector((state) => state.moviesListReducer);

  React.useEffect(() => {
    dispatch(getMoviesList());
  }, []);

  console.log("movieState: ", movieState);

  return <div>App</div>;
};

export default App;
