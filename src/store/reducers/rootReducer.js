import { combineReducers } from "redux";
import moviesListReducer from "./moviesListReducer";
import episodesListReducer from "./moviesListReducer";

const rootReducer = combineReducers({
  moviesListReducer,
  episodesListReducer,
});

export default rootReducer;
