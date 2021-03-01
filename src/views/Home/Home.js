import React from "react";
import { useSelector } from "react-redux";

import { Movies } from "../../components";

const Home = () => {
  const movieState = useSelector((state) => state.moviesListReducer);
  return (
    <div className="container">
      {movieState.errorMsg !== "" && <p>{movieState.errorMsg}</p>}
      {movieState.loading && <p>Loading...</p>}
      {!movieState.errorMsg && !movieState.loading && <Movies />}
    </div>
  );
};

export default Home;