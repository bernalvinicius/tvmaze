import { combineReducers } from "redux";
import episodesListReducer from "./episodesListReducer";
import moviesListReducer from "./moviesListReducer";

const rootReducer = combineReducers({
  episodesListReducer,
  moviesListReducer,
});

export default rootReducer;
