import { createStore } from "redux";
/**
 * composeWithDevTools - this item allows debugging the reducer in Chrome devtools
 */
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
/**
 * thunk - allows side effects and asynchronous actions
 */
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
