import { combineReducers } from "redux";
import episodesListReducer from "./episodesListReducer";
import showListReducer from "./showListReducer";

const rootReducer = combineReducers({
  episodesListReducer,
  showListReducer,
});

export default rootReducer;
